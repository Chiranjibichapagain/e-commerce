import React from "react";

import useStyles from "./styles";

const Thead = () => {
  const classes = useStyles();
  return (
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Categories</th>
      <th>sizes</th>
      <th>Actions</th>
    </tr>
  );
};

export default Thead;
