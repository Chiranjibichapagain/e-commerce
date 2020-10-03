import React from "react";
import { CardProps } from '../../types/componentTypes'
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";

import useStyle from "./styles";

const ProductTile = ({ product }: CardProps) => {
    const classes = useStyle()
    return (
      <Paper elevation={5} className={classes.root}>
        <div className={classes.imageBox}>
          <img
            className={classes.image}
            src={product.image}
            alt={`image of ${product.name}`}
          />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price}>{`${product.price}$`}</div>
        </div>
        <div className={classes.description}>
          <Typography>{product.description}</Typography>
        </div>
        <div className={classes.actions}>
          <button className={classes.toCartButton}>
            <AddShoppingCartIcon />
            <Typography className={classes.btnText}>Add-to-cart</Typography>
          </button>
          <button className={classes.viewButton}>
            <VisibilityIcon />
            <Typography className={classes.btnText}>View-item</Typography>
          </button>
        </div>
      </Paper>
    );
}

export default ProductTile
