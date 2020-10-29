export const FETCH_DATA = 'FETCH_DATA'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const SORT_PRODUCT = 'SORT_PRODUCT'


export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image?: string;
  admin?: boolean;
  banned?: boolean;
  transactions:any
};

export type ProductState = {
    allProducts: Product[]
    inCart: Product[]
}

export type fetchDataAction = {
    type: typeof FETCH_DATA
    payload: Product[]
}
export type AddProductAction = {
    type: typeof ADD_PRODUCT
    payload: Product
}
export type RemoveProductAction = {
    type: typeof REMOVE_PRODUCT
    payload: Product
}
export type SearchProductAction = {
    type: typeof SEARCH_PRODUCT
    payload: string
}
export type SortProductAction = {
    type: typeof SORT_PRODUCT
    payload: string
}

export type ProductActions = | fetchDataAction | AddProductAction | RemoveProductAction | SearchProductAction | SortProductAction

export type AppState = {
    state: ProductState
}

