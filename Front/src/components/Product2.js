import React from 'react'
import Rating from './Rating'
import "../styles/Product.css"
import { Link } from 'react-router-dom'


const Product2 = ({product}) => {

    return (
        <Link to={`/products/product/${product._id}`} className="product-link">
            <div className="col-md-6">
                <div className="product-card">
                    <div className="product-image">
                        <img src={product.image} alt="" width="200" height="200"/>
                    </div>
                    <h2>{product.description}</h2>
                    <Rating rating={product.rating} numRev={product.numRev} />
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default Product2
