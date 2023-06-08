import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import { AppContext } from './AppContext';
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom' 
import emptyCartImage from '../images/emptyCartImage.png';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert';



export default function ShoppingCart() {
  const { cart, products, removeFromCart, total } = useContext(AppContext);

  const cartItemKeys = Object.keys(cart);
  const cartItems = [];
  const cartItemCount = Object.keys(cart).length;

  for (let cartItemKey of cartItemKeys) {
    let product = products.find(item => item.id === parseInt(cartItemKey));
    if (product) {
      cartItems.push(product);
    }
  }

  if (cartItemCount === 0) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
          <Col xs={5} md={3}>
            <Image src={emptyCartImage} fluid />
          </Col>
        <h1>Your cart is empty.</h1>
        <Link to="/product-catalog">
          <Button variant="dark">Let's go Shopping!</Button>
        </Link>
      </Container>
    );
  }

  return (
    <>
      <br></br>
      <Stack gap={3}>
        <Container fluid>
          <h1>My Shopping Cart</h1>
          <Stack gap={2}>
            {cartItems.map((item, index) => (
              <Row key={index}>
                <div className="product-card-wrapper">
                  <CartItem
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating.rate}
                    quantity={cart[item.id]}
                    removeFromCart={() => {
                      removeFromCart(item.id);
                    }}
                  />
                </div>
              </Row>
            ))}
          </Stack> 
        </Container>
        <Alert className="text-right" variant="primary">
          Total Amount: ${total.toFixed(2)}
        </Alert>
      </Stack>
    </>
  );
}
