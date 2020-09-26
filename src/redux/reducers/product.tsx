import { FETCH_DATA, ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT, SORT_PRODUCT, ProductState, ProductActions } from '../../types/types'


const product = (
    state: ProductState = {
        allProducts: [],
        inCart: [],
    },
    action: ProductActions
): ProductState => {
    switch (action.type) {
        case FETCH_DATA: {
            const data = action.payload
            return { ...state, allProducts: data }
        }

        default:
            return state
    }
}

export default product
