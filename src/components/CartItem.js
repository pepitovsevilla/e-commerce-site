import React from 'react';
import Card from 'react-bootstrap/Card';
import '../index.css';

export default function CartItem({ image, title, price, rating, addToCart}) {

  return (
    <Card className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Quantity: {rating}</Card.Text>
        <button onClick={addToCart}>Add to Cart</button>
      </Card.Body>
    </Card>
  );
}
