import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type : actionTypes.GET_PRODUCTS_REQUEST
        })

        const { data } = await axios.get("/api/product");

        dispatch({
            type : actionTypes.GET_PRODUCTS_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : actionTypes.GET_PRODUCTS_FAIL,
            payload : error.response && error.response.data.messege ? error.response.data.messege : error.message
        })
    }
}

export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type : actionTypes.GET_PRODUCTS_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/product/${id}`);

        dispatch({
            type : actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : actionTypes.GET_PRODUCTS_FAIL,
            payload : error.response && error.response.data.messege ? error.response.data.messege : error.message
        })
    }
}

export const removeProductDetail = () => (dispatch) => {
    dispatch({
        type : actionTypes.GET_PRODUCTS_DETAILS_RESET
    })
}