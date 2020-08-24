import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, stock } = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br />
                <p><small>by:{seller}</small></p>
                <br />
                <p>${price}</p>

                <p><small>Only {stock} left in stock-Order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="add-button"><FontAwesomeIcon icon={ faShoppingCart } /> add to cart</button>
            </div>


        </div>
    );
};

export default Product;