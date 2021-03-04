import * as actionTypes from '../constants/cartConstant';

const INITIAL_CART_STATE = {
    cartItems : [],
}

export const cartReducer = (state = INITIAL_CART_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload

            const existingItem = state.cartItems.find((data) => data.product === item.product);

            if(existingItem) {
                return {
                    ...state,
                    cartItems : state.cartItems.map((data) => data.product ===  existingItem.product ? item : data),
                }
            } else {
                return{
                    ...state,
                    cartItems : [...state.cartItems, item]
                }
            }

        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems : state.cartItems.filter((data) => data.product !== action.payload),
            }
        default:
            return state;
    }
}