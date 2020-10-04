import React from "react";

import useStyles from "./styles";

const Thead = () => {
  const classes = useStyles();
  return (
    <tr>
      <th className={classes.th}>Image</th>
      <th className={classes.th}>Name</th>
      <th className={classes.th}>Description</th>
      <th className={classes.th}>Price</th>
      <th className={classes.th}>Categories</th>
      <th className={classes.th}>sizes</th>
      <th className={classes.th}>Actions</th>
    </tr>
  );
};

export default Thead;
