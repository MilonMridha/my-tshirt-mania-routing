import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TShirt = (props) => {
    const { tShirt, handleAddToCart } = props;
    const { name, picture, price, } = tShirt;
    return (
        <div className='container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Model:{name}</Card.Title>
                    <h5> Price: ${price}</h5>

                    <Button onClick={() => handleAddToCart(tShirt)} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TShirt;