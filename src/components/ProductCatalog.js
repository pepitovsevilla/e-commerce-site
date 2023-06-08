import ProductCard from './ProductCard';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import mensClothingImage from '../images/mens-clothes.jpg';
import womensClothingImage from '../images/womens-clothes.jpg';
import gadgetsImage from '../images/gadgets.jpg';
import jewelryImage from '../images/jewelry.jpg';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom' 

export default function ProductCatalog() {

  const {products, addToCart} = useContext(AppContext);
  
  return (
    <>
    <Carousel className="my-4 mx-4 rounded">
      <Carousel.Item>
        <Link to="/womens-clothing">
          <img
            className="d-block w-100 carousel-image"
            src={womensClothingImage}
            alt="Shop Women's Fashion"
          />
          <Carousel.Caption>
            <h3>Shop Women's Fashion</h3>
            <p>Explore our catalog for women's fashion.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
          <Link to="/mens-clothing">
            <img
              className="d-block w-100 carousel-image"
              src={mensClothingImage}
              alt="Shop Men's Fashion"
            />
            
                    <Carousel.Caption>
            <h3>Shop Men's Fashion</h3>
            <p>Explore our catalog for men's fashion.</p>
                    </Carousel.Caption>
          </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/electronics">
          <img
            className="d-block w-100 carousel-image"
            src={gadgetsImage}
            alt="Shop Electronics"
          />
          <Carousel.Caption>
            <h3>Shop Electronics</h3>
            <p>Explore our catalog for electronics.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/jewelry">
          <img
            className="d-block w-100 carousel-image"
            src={jewelryImage}
            alt="Shop Jewelry"
          />
          <Carousel.Caption>
            <h3>Shop Jewelry</h3>
            <p>Explore our catalog for jewelry.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
    <Container fluid="lg" className="product-card-container d-flex justify-content-center">
      <Row xs={1} md={2} lg={3} xl={4} className="gx-3 gy-3">
        {products.map((product, index) => (
          <Col key={index}>
            <div className="product-card-wrapper">
              <ProductCard
                category={product.category.replace(/[^\w\s]/gi, "").replace(/\s+/g, "")}
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
    </>
    
  );
}
