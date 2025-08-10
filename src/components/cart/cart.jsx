import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../Redux/cartSlice';

const cart = () => {
    const { items, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.length === 0 ? <p>Cart is empty</p> : (
                <>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalAmount}</h3> 
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </>
            )}
        </div>
    );
}

export default cart;