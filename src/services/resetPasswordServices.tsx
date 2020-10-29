import axios, { AxiosRequestConfig } from "axios";

 type User = {
  email:string
}
 type Password = {
  newPassword:string
}


export const sendChangeRequest = async (user: User) => {
  return axios.post("https://fast-depths-21544.herokuapp.com/api/password/forgetpass", user);
};

export const changePass = (password: Password, config:AxiosRequestConfig | undefined) => {
  return axios.post("https://fast-depths-21544.herokuapp.com/api/password/changepass", password, config);
};
