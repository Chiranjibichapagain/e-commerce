import axios from "axios";

import { User } from "../types/types";
import {UpdatedUser} from '../types/componentTypes'

const url = "https://fast-depths-21544.herokuapp.com/api/users";

export const getAllUsers = (url: string) => {
  return axios.get(url);
};
export const createUser = (newUser: User) => {
  return axios.post(url, newUser);
};
export const deleteUser = (id:string) => {
  return axios.delete(`${url}/${id}`);
};
export const updateUser = (id: string, updatedUser: UpdatedUser) => {
  return axios.put(`${url}/${id}`, updatedUser);
};
