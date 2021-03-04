import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Products from '../Products'
import { getProduct as listProduct } from '../../redux/actions/productAction'

const Home = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { loading, products, error } = getProducts;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])

    return (
        <div className="home-screen">
            <div className="container">
                <div className="home-screen-contents">
                    <h2 className="product-title">Latest Products</h2>
                    <div className="home-products">
                        {loading ? (
                        <h2>loading...</h2>
                        ): error ? (
                        <h2>{error}</h2>
                        ): (
                        products.map((product) => (
                            <Products 
                                key={product._id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                productId={product._id}
                            />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
