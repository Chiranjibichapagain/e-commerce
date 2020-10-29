import React, { useContext } from "react";

import { ThemeContext } from "../../../contextAPI/context";
import useStyles from "./styles";

const Thead = () => {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);

  return (
    <thead>
      <tr>
        <th style={{ backgroundColor: `${theme}` }} className={classes.th}>
          Image
        </th>

        <th style={{ backgroundColor: `${theme}` }} className={classes.th}>
          Name
        </th>

        <th style={{ backgroundColor: `${theme}` }} className={classes.th}>
          Description
        </th>

        <th style={{ backgroundColor: `${theme}` }} className={classes.th}>
          Price ($)
        </th>

        <th style={{ backgroundColor: `${theme}` }} className={classes.th}>
          Category
        </th>
        
        <th style={{ backgroundColor: `${theme}` }} className={classes.th}>
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default React.memo(Thead);
