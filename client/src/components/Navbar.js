import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Shopping Cart</h2>
            </div>

            <ul className="links">
                <li>
                    <Link to="/cart" className="cart-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        cart <span className="order-number">{getCartCount()}</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="shop-link">Shop</Link>
                </li>
            </ul>

            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
