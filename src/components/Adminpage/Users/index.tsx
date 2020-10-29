import React from "react";

import Thead from "./Thead";
import Tbody from "./Tbody";
import Nav from "../Nav";
import {
  useGetUsers,
  useUpdateUser,
  useDeleteUser,
} from "../../../hook/useUserApi";
import useStyles from "./styles";


const Products = () => {
  const classes = useStyles();
  const [users] = useGetUsers();
  const {handleUpdate, error} = useUpdateUser();
  const [handleDelete] = useDeleteUser();

  return (
    <div className={classes.root}>
      <Nav />
      <table className={classes.table}>
        <Thead />
        {users &&
          users.map((user: any) => (
            <Tbody
              key={user._id}
              data={user}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              error={error}
            />
          ))}
      </table>
    </div>
  );
};;;

export default React.memo(Products);
