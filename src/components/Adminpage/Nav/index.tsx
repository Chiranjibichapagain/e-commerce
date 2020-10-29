import React from "react";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import logo from '../../../ASSETS/Frame.svg'
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const LS = localStorage.getItem("loginInfo");
  const parsedInfo = typeof LS === "string" && JSON.parse(LS);

  const handleLogout = () => {
    localStorage.removeItem("loginInfo");
    history.push("/");
  };

  return (
    <Paper className={classes.nav}>
      <Link to="/">
        <img alt='logo' className={classes.logo} src={logo} />
      </Link>

      <h1>Admin Dashboard</h1>
      <div className={classes.itemDiv}>
        <Link to="/admin/products" style={{ textDecoration: "none" }}>
          <span className={classes.item}>Products</span>
        </Link>
        <Link to="/admin/users" style={{ textDecoration: "none" }}>
          <span className={classes.item}>Users</span>
        </Link>
      </div>
      <div className={classes.profileDiv}>
        <h3 className={classes.profile}>{parsedInfo.name}</h3>
        <p onClick={handleLogout} className={classes.profileText}>
          LOG OUT
        </p>
      </div>
    </Paper>
  );
};

export default React.memo(Nav);
