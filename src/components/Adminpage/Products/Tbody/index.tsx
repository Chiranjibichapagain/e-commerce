import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "react-modal";

import ProductEdit from "./ProductEdit";
import { TbodyProps } from "../../../../types/componentTypes";
import useStyles from "./styles";

Modal.setAppElement("#root");
const Tbody = ({
  data,
  handleProductUpdate,
  handleProductDelete,
  error
}: TbodyProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  return (
    <tbody>
      <tr className={classes.tr}>
        <td>
          {" "}
          <img alt={data.name} className={classes.image} src={data.image} />{" "}
        </td>
        <td className={classes.name}>{data.name}</td>
        <td className={classes.desc}>{data.description}</td>
        <td className={classes.price}>{data.price}</td>
        <td className={classes.category}>{data.category}</td>
        <td className={classes.actions}>
          <EditIcon
            onClick={() => setOpen(true)}
            className={classes.editIcon}
          />
          <DeleteIcon
            onClick={() => handleProductDelete(data._id)}
            className={classes.deleteIcon}
          />
          <Modal className={classes.modal} isOpen={open}>
            <ProductEdit
              data={data}
              handleProductUpdate={handleProductUpdate}
              closeIt={setOpen}
              error={error}
            />
          </Modal>
        </td>
      </tr>
      
    </tbody>
  );
};

export default React.memo(Tbody);
