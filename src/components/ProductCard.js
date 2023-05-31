import React from 'react';
import Card from 'react-bootstrap/Card';
import '../index.css';
import Button from 'react-bootstrap/Button'

export default function ProductCard({ image, title, price, rating, addToCart}) {
  
  return (
    <Card className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Button onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
