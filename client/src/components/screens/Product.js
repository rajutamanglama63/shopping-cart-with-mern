import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { getProductDetail } from '../../redux/actions/productAction'
import { addToCart } from '../../redux/actions/cartAction'

const Product = ({match, history}) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const ProductDetails = useSelector((state) => state.getProductDetails)

    const { loading, product, error } = ProductDetails;

    useEffect(() => {
        if(product && match.params.id !== product._id) {
            dispatch(getProductDetail(match.params.id))
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    }

    return (
        <div className="product-screen">
            <div className="product-container">
                {
                    loading ? (
                        <h2>Loading..</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        <>
                            <div className="productScreen-left">
                                <div className="left-image">
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                                <div className="left-info">
                                    <p className="info-name">{product.name}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Description: {product.description}</p>
                                </div>
                            </div>
                            <div className="productScreen-right">
                                <div className="right-info">
                                    <p>
                                        Price: <span>${product.price}</span>
                                    </p>
                                    <p>
                                        Status: <span>{product.countInStock > 0 ? "In stock" : "Out of stock"}</span>
                                    </p>
                                    <p>
                                        Qty
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </p>
                                    <p>
                                        <button type="button" onClick={addToCartHandler}>Add to cart</button>
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Product
