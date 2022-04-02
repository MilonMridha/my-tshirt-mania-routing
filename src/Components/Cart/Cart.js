import React from 'react';


const Cart = ({cart,handleRemoveCart}) => {

    return (
        <div className='mt-3'>
            <h4>Selected Item: {cart.length}</h4>
            {
                cart.map(item => <p>{item.name}
                <button onClick={()=> handleRemoveCart(item)}>X</button>
                </p>)
            }
            {cart.length === 3 && <button>Buy 3 item</button>}
            {cart.length === 0 || <p>thanks for buying</p>}

        </div>
    );
};

export default Cart;