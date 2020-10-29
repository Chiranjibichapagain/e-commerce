import React from "react";
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import { addProduct } from "../../redux/actions";
import { Product } from '../../types/types'
import {RouterParams}from '../../types/componentTypes'
import useStyles from "./styles";

const ProductEdit = ({ match }: RouteComponentProps<RouterParams>) => {
  const classes = useStyles();
  const dispatch=useDispatch()

  const products = useSelector((state: any) => state.product.allProducts)
  const data= products.find((product:Product)=>product._id===match.params.id)
  const cart = useSelector((state: any) => state.product.inCart)
  const isInCart = cart.find((cItem: Product) => cItem._id === match.params.id)
  
  return (
    <div>
      <Link to="/">
      <ArrowBackRoundedIcon className={classes.backArrow}/> 
      </Link>
    <div className={classes.root}>
      <div className={classes.infoBox}>
        <img alt={data.name} className={classes.image} src={data.image} />
        <div className={classes.details}>
          <h1 className={classes.name}>{data.name}</h1>
          <h3 className={classes.price}>{`${data.price} $`}</h3>
          <p className={classes.desc}>{data.description}</p>
          <p className={classes.category} style={{ listStyle: "none" }}>
          {data.categories}
            </p>
            {isInCart ? <h2>This product is in your cart</h2> :
          <div onClick={()=>dispatch(addProduct(data))} className={classes.actions}>
            <AddShoppingCartRoundedIcon className={classes.cart} />
          </div>
            }
        </div>
      </div>
      </div>
  </div>
  );
};

export default React.memo(ProductEdit);
