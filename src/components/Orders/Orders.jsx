import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemovefromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
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
            <Cart cart = {cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;