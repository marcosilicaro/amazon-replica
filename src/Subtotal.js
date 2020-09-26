import React from 'react';

const Subtotal = (props) => {
    return (
        <div>
            <p>Subtotal:</p>
            <p>{props.subtotal}</p>
        </div>
    );
};

export default Subtotal;