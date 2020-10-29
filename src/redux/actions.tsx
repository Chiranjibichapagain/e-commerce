import { Dispatch } from 'redux'

import { getAllProducts } from "../services/productService";
import { FETCH_DATA, ADD_PRODUCT, REMOVE_PRODUCT, Product } from '../types/types'



export const getData = (url: any) => async (dispatch: Dispatch) => {
  try {
    const response = await getAllProducts(url).then((response) => {
      return response.data;
    });
    return dispatch({ type: FETCH_DATA, payload: response });
  } catch (error) {
  }
};

export function addProduct(product: Product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export function removeProduct(product: Product) {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  }
}
