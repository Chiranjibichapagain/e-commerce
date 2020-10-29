import axios from "axios";

import {Credintials} from '../types/componentTypes'

const url = "https://fast-depths-21544.herokuapp.com/api/login";

export const login = async (credentials: Credintials) => {
  const response = await axios.post(url, credentials);
  return response.data;
};
