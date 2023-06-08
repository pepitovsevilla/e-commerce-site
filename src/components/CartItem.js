import React from 'react';
import Card from 'react-bootstrap/Card';
import '../index.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function CartItem({ image, title, price, rating, quantity, removeFromCart}) {
  
  return (
    <Card className="align-items-center">
        <Card.Body className="d-flex my-4 mx-4">
          <Row>
            <Col>
              <Card.Img src={image} rounded style={{ maxHeight: '200px', objectFit: 'contain' }}/>
            </Col>
            <Col>
              <Card.Title>{title}</Card.Title>
              <Card.Text>Price: ${price}</Card.Text>
              <Card.Text>Rating: {rating}</Card.Text>
              <Card.Text>Quantity: {quantity}</Card.Text>
              <Button onClick={removeFromCart}>Remove from Cart</Button>
            </Col>
          </Row>
        </Card.Body>
    </Card>
  );
}