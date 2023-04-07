import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let Shipping = 0;
    for( const product of cart){
        total = total + product.price;
        Shipping = Shipping + product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total + Shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${Shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;