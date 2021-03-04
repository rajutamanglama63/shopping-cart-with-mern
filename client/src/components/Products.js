import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({name, price, description, imageUrl, productId}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <div className="product-info">
                <p className="info-name">{name}</p>
                <p className="info-description">
                    {description}
                </p>
                <p className="info-price">${price}</p>
                <Link to={`/product/${productId}`} className="info-button">
                    view
                </Link>
            </div>
        </div>
    )
}

export default Products
