import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 12) {
        shipping = 4;
    }
    else {
        shipping = 7;
    }

    const tax=(total/10).toFixed(2);
    const grandTotal=(total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
    <h5>Product Price: ${total}</h5>
            <p><small>Shipping: ${shipping}</small></p>
            <p><small>Tax+Vat: ${tax}</small></p>
            <h5>Total price: ${grandTotal}</h5>

        </div>
    );
};

export default Cart;