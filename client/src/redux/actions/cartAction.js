import  * as actionTypes from '../constants/cartConstant';

import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
        type : actionTypes.ADD_TO_CART,
        payload : {
            product : data._id,
            name : data.name,
            price : data.price,
            description : data.description,
            imageUrl : data.imageUrl,
            countInStock : data.countInStock,
            qty,
        }
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}


export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type : actionTypes.REMOVE_FROM_CART,
        payload : id
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}