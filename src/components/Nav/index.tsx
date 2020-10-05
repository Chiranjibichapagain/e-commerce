import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";

import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FiberNewOutlinedIcon className={classes.logo} />
      <TextField label="Search Products.." className={classes.search} />
      <div className={classes.sortDiv}>
        <SortOutlinedIcon className={classes.sortBtn} />
        <p className={classes.sortText}>SORT</p>
      </div>
      <div className={classes.cartDiv}>
        <ShoppingCartOutlinedIcon className={classes.cart} />
        <h2 className={classes.cartCount}>10</h2>
      </div>
      <PersonOutlineOutlinedIcon className={classes.profile} />
    </Paper>
  );
};

export default Nav;
