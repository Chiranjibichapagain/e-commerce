import { FETCH_DATA, ADD_PRODUCT, REMOVE_PRODUCT, ProductState, ProductActions } from '../../types/types'


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
        case ADD_PRODUCT: {
            const newItem = action.payload
            if (state.inCart.find((product) => product._id === newItem._id)) {
              return state;
            }
            return { ...state, inCart: [...state.inCart, newItem] }
        }
        case REMOVE_PRODUCT: {
            const toRemove = action.payload
            const getIndex = state.inCart.findIndex(
              (product) => product._id === toRemove._id
            );
            if (getIndex >= 0) {
                state.inCart.splice(getIndex, 1)
                return { ...state, inCart: [...state.inCart] }
            }
            return state
        }

        default:
            return state
    }
}

export default product
