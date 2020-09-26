import React from 'react';
import "./Subtotal.css";

const Subtotal = (props) => {
    return (
        <div>
            <div className='subtotal__title'>
                <p>Subtotal:</p>
                <p className='subtotal__number'>{props.subtotal}</p>
            </div>
            <button className='subtotal__button'>Proceed to Checkout</button>
        </div >
    );
};

export default Subtotal;