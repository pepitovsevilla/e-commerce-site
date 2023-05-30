import './App.css';
import NavBarComponent from './components/NavBarComponent';
import ProductCardHolder from './components/ProductCardHolder'
import ShoppingCart from './components/ShoppingCart'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './components/AppContext';

function App() {
  
  return (
    <>
      <AppContextProvider>
        <NavBarComponent />
        <ProductCardHolder />
        <ShoppingCart />
      </AppContextProvider>
    </>

  );
}

export default App;
