import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
    const SideDrawerClass = ["side-drawer"];

    if(show) {
        SideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }
    return (
        <div className={SideDrawerClass.join(" ")}>
            <ul className="sidedrawer-links" onClick={click}>
                <li>
                    <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        cart <span className="sidedrawer-order-number">{getCartCount()}</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="shop-link">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
