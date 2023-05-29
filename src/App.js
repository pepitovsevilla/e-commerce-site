import './App.css';
import NavBarComponent from './components/NavBarComponent';
import ProductCard from './components/ProductCard'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
      <NavBarComponent />
      <Container fluid>
        <Row>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>      
      </Container>
    </>
  );
}

export default App;
