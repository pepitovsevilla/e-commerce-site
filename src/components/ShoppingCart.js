import ProductCard from './ProductCard';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import { AppContext } from './AppContext';


export default function ShoppingCart() {
  const {cart, addToCart} = useContext(AppContext);
  return (
    <>
    <br></br>
    <h1>SHOPPING CART</h1>
    <Container fluid className>
      <Row xs={1} md={2} lg={3} xl={4} className="gx-3 gy-3">
        {cart.map((item, index) => (
          <Col key={index}>
            <div className="product-card-wrapper">
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating.rate}
                addToCart={()=>{addToCart(item)}}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </>
    
  );
}
