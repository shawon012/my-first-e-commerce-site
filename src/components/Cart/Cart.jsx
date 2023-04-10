import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({cart, handleClearCart, children} ) => {
    // const {cart} = props;

    let total = 0;
    let Shipping = 0;
    let quantity = 0;
    for( const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        total = total + product.price * product.quantity;
        Shipping = Shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total*7/100;
    const grandTotal = total + Shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${Shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span >Clear Cart</span>
            <FontAwesomeIcon  icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;