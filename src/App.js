import './App.css';
import NavBarComponent from './components/NavBarComponent';
import ProductCatalog from './components/ProductCatalog'
import ShoppingCart from './components/ShoppingCart'
import 'bootstrap/dist/css/bootstrap.min.css';

import WomensClothingCatalog from './components/WomensClothingCatalog'
import MensClothingCatalog from './components/MensClothingCatalog'
import JewelryCatalog from './components/JewelryCatalog'
import ElectronicsCatalog from './components/ElectronicsCatalog';

import { Routes, Route } from 'react-router-dom' 
;

function App() {
  
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductCatalog/>} />
        <Route path="/womens-clothing" element={<WomensClothingCatalog/>} />
        <Route path="/mens-clothing" element={<MensClothingCatalog/>} />
        <Route path="/electronics" element={<ElectronicsCatalog/>} />
        <Route path="/jewelry" element={<JewelryCatalog/>} />
        <Route path="/shopping-cart" element={<ShoppingCart />} /> 
      </Routes>
    </>

  );
}

export default App;
