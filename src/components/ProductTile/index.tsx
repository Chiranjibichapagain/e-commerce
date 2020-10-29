import React, {useState, useContext, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { CardProps } from "../../types/componentTypes";
import { Product } from "../../types/types";
import { addProduct } from "../../redux/actions";
import { ThemeContext} from "../contextAPI/context";
import useStyle from "./styles";

const ProductTile = ({ product }: CardProps) => {
  const classes = useStyle()
  const dispatch = useDispatch();
  const history= useHistory()
  const [logged, setLogged] = useState(false)
  const [banned, setBanned] = useState(false)
  const { info } = useContext(ThemeContext);// login info 

   useEffect(() => {
    getLS()
   }, [info])
  
  const addToCart = (product: Product) => {
    if (logged) {
      if (banned) {
        history.push('/banneduser')
      } else {
        dispatch(addProduct(product))
      }
    } else {
      history.push('/login')
    }
  };
 
  const cart = useSelector((state: any) => state.product.inCart)
  const isInCart = cart.find((cItem: Product) => cItem._id === product._id)
  
   const getLS = async() => {
    const LS = await localStorage.getItem("loginInfo");
     const loginInfo = typeof LS === "string" && JSON.parse(LS);
     loginInfo.banned? setBanned(true):setBanned(false)
    loginInfo? setLogged(true):setLogged(false)
   }

    return (
      <Paper elevation={5} className={classes.root}>
        <div className={classes.imageBox}>
          <img
            className={classes.image}
            src={product.image}
            alt={`${product.name}`}
          />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price}>{`${product.price}$`}</div>
        </div>
        <div className={classes.actions}>
          <button
            disabled={isInCart?true:false}
              onClick={()  =>  addToCart(product)}
            className={isInCart?classes.disabledBtn:classes.toCartButton}
          >
            <AddShoppingCartIcon />
            <Typography className={classes.btnText}>Add-to-cart</Typography>
          </button>
          <Link
            to={logged? banned? '/banneduser':`/products/${product._id}`:"/login"}
            style={{ textDecoration: "none" }}
          >
            <button className={classes.viewButton}>
              <VisibilityIcon />
              <Typography className={classes.btnText}>View-item</Typography>
            </button>
          </Link>
        </div>
      </Paper>
    );
}

export default React.memo(ProductTile)
