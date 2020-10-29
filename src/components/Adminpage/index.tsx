import React from "react";

import Products from "./Products";
import useStyles from "./styles";

const AdminPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Products />
    </div>
  );
};

export default React.memo(AdminPage) ;
