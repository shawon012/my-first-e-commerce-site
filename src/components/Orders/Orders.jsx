import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemovefromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>
           <div className='review-container'>
                {
                    cart.map(product => <Reviewitem
                    key={product.id}
                    product={product}
                    handleRemovefromCart={handleRemovefromCart}
                    ></Reviewitem>)
                }
           </div>
           <div className='cart-container'>
            <Cart
             cart = {cart}
             handleClearCart={handleClearCart}
             >
                <Link className='proceed-link' to="/checkout">
                    <button className='btn-proceed'> Proceed Checkout</button>
                </Link>
             </Cart>
           </div>
        </div>
    );
};

export default Orders;