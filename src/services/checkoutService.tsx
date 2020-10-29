import axios from "axios";

const url = "https://fast-depths-21544.herokuapp.com/api/checkout";

export const checkout = async (info: any) => {
  const response = await axios.post(url, info);
  return response.data;
};