import { useState, createContext, useEffect} from "react";

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products?limit=10');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    const [cart, setCart] = useState([]);
  
    const addToCart = (newItem) => {
      let updatedItems = [...cart, newItem];
      setCart(updatedItems);
    };
  
    useEffect(() => {
      console.log(cart);
    }, [cart]);
  
    return <AppContext.Provider value={{ cart, setCart, products, setProducts, addToCart }}>{children}</AppContext.Provider>;
  };
  