import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "react-modal";
import ProductEdit from "./ProductEdit";

import { TbodyProps } from "../../../../types/componentTypes";
import useStyles from "./styles";

const Tbody = ({ data }: TbodyProps) => {
  const classes = useStyles();

const [open, setOpen] = useState(false);
Modal.setAppElement("#root");
  return (
    <tbody>
      <tr className={classes.tr}>
        <td>
          {" "}
          <img className={classes.image} src={data.image} />{" "}
        </td>
        <td className={classes.name}>{data.name}</td>
        <td className={classes.desc}>{data.description}</td>
        <td className={classes.price}>{data.price}</td>
        <td className={classes.category} style={{ listStyle: "none" }}>
          {data.categories.map((item: string) => (
            <li key={data.id}>{item}</li>
          ))}
        </td>
        <td className={classes.sizes}>
          {data.sizes.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </td>
        <td className={classes.actions}>
          <EditIcon
            onClick={() => setOpen(true)}
            className={classes.editIcon}
          />
          <DeleteIcon className={classes.deleteIcon} />
          <Modal className={classes.modal} isOpen={open}>
            <ProductEdit data={data} closeIt={setOpen} />
          </Modal>
        </td>
      </tr>
    </tbody>
  );
};

export default Tbody;
