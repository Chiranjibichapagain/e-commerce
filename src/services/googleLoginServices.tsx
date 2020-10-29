import axios from "axios";

export const signGoogle = (info: any) => {
  return axios.post("https://fast-depths-21544.herokuapp.com/auth/google-authenticate", info);
};
