import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
} from "../services/userServices";

// get all users hook------------------------
export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getAllUsers("https://fast-depths-21544.herokuapp.com/api/users").then(
      (response) => response.data
    );
    setUsers(data);
  };

  return [users];
};

//Create User hook-------------------------------------
export const useCreateUser = () => {
  const history = useHistory();
  const [error, setError] = useState("");

  const handleCreate = async (values:any) => {
    try {
      await createUser(values).then((response) => {
     })
      history.push("/login");
      
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return {
   handleCreate,   
   error
  };
};

// update users hook----------------------------------------
export const useUpdateUser = () => {
  const [error, setError] = useState('')

  const handleUpdate = async (id: string, values: any) => {
      try {
        const update = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          admin:values.admin?'true':'false',
          banned:values.banned?'true':'false'
        }
    
        await updateUser(id, update).then((response: any) => {
          window.location.reload();

        });
      } catch (error) {
        setError(error.response.data.error);
      }
  };

  return { handleUpdate, error };
};

//Delete user hook-------------------------------------------
export const useDeleteUser = () => {
  const handleDelete = async (id: string) => {
    await deleteUser(id);
    window.location.reload();
  };
  return [handleDelete];
};

