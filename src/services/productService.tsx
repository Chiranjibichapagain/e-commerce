import axios, { AxiosRequestConfig } from "axios";

import { Product } from "../types/types";

const url = "https://fast-depths-21544.herokuapp.com/api/products";

export const getAllProducts = async (url: string) => {
  return await axios.get(url);
};
export const createProduct = async (newProduct: Product, config: AxiosRequestConfig | undefined) => {
  return axios.post(url, newProduct, config);
};
export const deleteProduct = (id: string) => {
  return axios.delete(`${url}/${id}`);
};
export const updateProduct = (id: string, updatedProduct: Product) => {
  return axios.put(`${url}/${id}`, updatedProduct);
};
