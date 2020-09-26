import { Dispatch } from 'redux'

import { FETCH_DATA, ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT, SORT_PRODUCT } from '../types/types'



export const getData = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()

    return dispatch({ type: FETCH_DATA, payload: products })
  } catch (error) {
    console.log(error)
  }
}