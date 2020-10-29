import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory} from "react-router-dom";
import Modal from "react-modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

import Cart from '../Cart'
import Theme from "../Theme";
import Drawer from "../Drawer";
import logo from "../../ASSETS/Frame.svg";
import { NavProps, LoggedUser } from '../../types/componentTypes'
import { ThemeContext } from "../contextAPI/context";
import useStyles from "./styles";

Modal.setAppElement("#root");
const Nav = ({ style, handleDisplay, handleSearch, handleSort }: NavProps) => {
  const classes = useStyles();
  const history= useHistory()
  const { info, setInfo } = useContext(ThemeContext); // user logged info from login
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<LoggedUser>();
 
  useEffect(() => {
    getLS();
  }, [info]);

  const getLS = async () => {
    const LS = await localStorage.getItem("loginInfo");
    const info = typeof LS === "string" && JSON.parse(LS);
    setUser(info);
  };

  const handleLogOut = async () => {
    localStorage.removeItem("loginInfo");
    const LS = localStorage.getItem("loginInfo");
    const info = typeof LS === "string" ? JSON.parse(LS) : undefined;
    setUser(info);
    setInfo('')
  };

  const redirectHome =()=> {
    history.push('/')
  }
  const products = useSelector((state:any) => state.product.inCart);

  return (
    <div>
      <Paper className={classes.root}>
        <img onClick={()=>redirectHome()} alt='logo' src={logo} className={classes.logo} />
        <TextField
          onChange={handleSearch}
          label="Search"
          className={classes.search}
        />
        <div onClick={handleDisplay} className={classes.sortDiv}>
          <SortOutlinedIcon className={classes.sortBtn} />
          <p className={classes.sortText}>FILTER</p>
        </div>
        <div onClick={() => setOpen(true)} className={classes.cartDiv}>
          <ShoppingCartOutlinedIcon className={classes.cart} />
          <h2 className={classes.cartCount}>{products.length}</h2>
        </div>
        <Theme />
        {user && user.admin ?
          <Link to="/admin">
          <VpnKeyRoundedIcon className={classes.key} />
          </Link>
          : null}
        {user && (
          <div className={classes.profileDiv}>
            <PersonOutlineOutlinedIcon className={classes.profileIcon} />
            <p className={classes.profileName}>{`Hi ${user.name}`}</p>
            <PowerSettingsNewRoundedIcon
              onClick={() => handleLogOut()}
              className={classes.logoutIcon}
            />
          </div>
        )}

        {!user && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p className={classes.loginText}>LOG IN</p>
          </Link>
        )}

        <Modal className={classes.modal} isOpen={open}>
          <Cart setOpen={setOpen} token={user?.token} />
        </Modal>
      </Paper>
      <Drawer handleSort={handleSort} style={style} />
    </div>
  );
};;

export default React.memo(Nav);
