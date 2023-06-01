import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import { AppContext } from './AppContext';
import CartItem from './CartItem';


export default function ShoppingCart() {
  const {cart, products, removeFromCart, total} = useContext(AppContext);

  let cartItemKeys = Object.keys(cart);
  let cartItems = [];
  
  for (let cartItemKey of cartItemKeys) {
    let product = products.find(item => item.id === parseInt(cartItemKey));
    if (product) {
      cartItems.push(product);
    }
  }
  return (
    <>
    <br></br>
    <h1>SHOPPING CART</h1>
    <Container fluid className>
      <Row xs={1} md={2} lg={3} xl={4} className="gx-3 gy-3">
        {cartItems.map((item, index) => (
          <Col key={index}>
            <div className="product-card-wrapper">
              <CartItem
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating.rate}
                quantity={cart[item.id]}
                removeFromCart={()=>{removeFromCart(item.id)}}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    <h1>Total Amount {total}</h1>
    </>
    
  );
}
