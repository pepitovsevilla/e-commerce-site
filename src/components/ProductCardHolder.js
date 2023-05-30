import ProductCard from './ProductCard';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import { AppContext } from './AppContext';


export default function ProductCardHolder() {
  const {products, addToCart} = useContext(AppContext);
  return (
    <Container fluid className="product-card-container">
      <Row xs={1} md={2} lg={3} xl={4} className="gx-3 gy-3">
        {products.map((product, index) => (
          <Col key={index}>
            <div className="product-card-wrapper">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating.rate}
                addToCart={()=>{addToCart(product)}}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
