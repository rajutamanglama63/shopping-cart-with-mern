import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

// components
import CartItem from '../CartItem'

// actions
import {addToCart, removeFromCart} from '../../redux/actions/cartAction'

const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };
    return (
        <div className="cartScreen">
            <div className="cart-container">
                <div className="cartScreen-left">
                    <h2>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <div>
                            your cart is empty.<Link to="/">Go Back</Link>
                        </div>
                    ) : cartItems.map((item) => (
                        <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
                    ))}
                </div>
                <div className="cartScreen-right">
                    <div className="cartScreen-info">
                        <p>Subtotal ({getCartCount()}) items</p>
                        <p>${getCartSubTotal()}</p>
                    </div>
                    <div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
