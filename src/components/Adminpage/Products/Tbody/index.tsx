import React from "react";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { TbodyProps } from "../../../../types/componentTypes";
import useStyles from "./styles";

const Tbody = ({ data }: TbodyProps) => {
  const classes = useStyles();
  return (
    <tr>
      <td>
        {" "}
        <img className={classes.image} src={data.image} />{" "}
      </td>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td style={{ listStyle: "none" }}>
        {data.categories.map((item: string) => (
          <li>{item}</li>
        ))}
      </td>
      <td className={classes.sizes} >
        {data.sizes.map((item: string) => (
          <li>{item}</li>
        ))}
      </td>
      <td className={classes.actions}>
        <EditIcon className={classes.editIcon} />
        <DeleteIcon className={classes.deleteIcon} />
      </td>
    </tr>
  );
};

export default Tbody;
