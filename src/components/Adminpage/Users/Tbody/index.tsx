import React, { useState } from "react";
import Modal from "react-modal";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import UserEdit from "./UserEdit";
import ViewOrder from '../../../ViewOrder'
import { UserTbodyProps } from "../../../../types/componentTypes";
import useStyles from "./styles";

const Tbody = ({
  data,
  handleUpdate,
  handleDelete,
  error
}: UserTbodyProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  Modal.setAppElement("#root");
  return (
    <tbody>
      <tr className={data.banned?classes.bannedTr:classes.tr}>
        <td>
          {" "}
          <img
            alt='Parrot'
            className={classes.image}
            src="https://img.pngio.com/parrot-png-images-download-png-image-parrots-png-412_360.png"
          />{" "}
        </td>
        <td className={classes.name}>{`${data.firstName} ${data.lastName}`}</td>
        <td className={classes.email}>{data.email}</td>
        <td className={classes.orders}><button onClick={() => setOrderOpen(true)} className={classes.ordersView}>View Orders</button></td>
        <td className={classes.admin}>{data.admin ? "True" : "False"}</td>
        <td className={classes.bann}>{data.banned ? "True" : "False"}</td>

        <td className={classes.actions}>
          <EditIcon
            onClick={() => setOpen(true)}
            className={classes.editIcon}
          />
          <DeleteIcon
            onClick={() => handleDelete(data._id)}
            className={classes.deleteIcon}
          />
          <Modal className={classes.modal} isOpen={open}>
            <UserEdit
              data={data}
              closeIt={setOpen}
              handleUpdate={handleUpdate}
              error={error}
            />
          </Modal>
          <Modal className={classes.modal} isOpen={orderOpen}>
            <ViewOrder
              data={data.transactions}
              name={data.firstName + ' ' + data.lastName}
              closeIt={setOrderOpen}
            />
          </Modal>
        </td>
      </tr>
    </tbody>
  );
};

export default React.memo(Tbody);
