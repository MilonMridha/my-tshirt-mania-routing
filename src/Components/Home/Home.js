import React, { useState } from 'react';
import useTShirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import TShirt from '../Tshirt/TShirt';

const Home = () => {

    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        const exist = cart.find(item => item._id === tShirt._id );
        if(!exist){
            const newCart = [...cart, tShirt]
            setCart(newCart);
        }
        else{
            alert('Item is already added')
        }
        
    }

    const handleRemoveCart =(selectedItem) => {
        const rest =cart.filter(pd=> pd._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 mt-5'>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        {
                            tShirts.map(tShirt => <TShirt
                                key={tShirt._id}
                                tShirt={tShirt}
                                handleAddToCart={handleAddToCart}
                            ></TShirt>)
                        }
                    </div>

                </div>
                <div className='col-md-3'>
                    <Cart 
                    handleRemoveCart={handleRemoveCart}
                    cart={cart}></Cart>

                </div>
            </div>


        </div>
    );
};

export default Home;