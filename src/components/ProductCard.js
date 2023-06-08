import Card from 'react-bootstrap/Card';
import '../index.css';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { Link } from 'react-router-dom' 

export default function ProductCard({ image, title, price, rating, addToCart, category}) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    addToCart();
    setShowOverlay(true);
    // Reset the overlay after a certain duration
    setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
  };


  return (
    <Card className={`product-card ${category}`}>
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <div className="d-grid gap-2">
          <Button variant="dark" onClick={handleClick}>
            Add to Cart
            {showOverlay && (
              <div className="overlay" variant="success"><span>Item added to cart.     </span><span>     
                <Link to="/shopping-cart">View Cart.</Link>
              </span></div>
            )}
          </Button>
      </div>
      </Card.Body>
    </Card>
  );
}
