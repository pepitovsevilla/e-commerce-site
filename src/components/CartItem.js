import React from 'react';
import Card from 'react-bootstrap/Card';
import '../index.css';
import Button from 'react-bootstrap/Button'

export default function CartItem({ image, title, price, rating, quantity, removeFromCart}) {
  
  return (
    <Card className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Quantity: {quantity} pcs</Card.Text>
        <Button onClick={removeFromCart}>Remove from Cart</Button>
      </Card.Body>
    </Card>
  );
}
