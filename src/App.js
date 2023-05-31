import './App.css';
import NavBarComponent from './components/NavBarComponent';
import ProductCatalog from './components/ProductCatalog'
import ShoppingCart from './components/ShoppingCart'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom' 

function App() {
  
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/product-catalog" element={<ProductCatalog/>} />
        <Route path="/shopping-cart" element={<ShoppingCart />} /> 
      </Routes>
    </>

  );
}

export default App;
