import { useState, createContext, useEffect} from "react";

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);


    const [cart, setCart] = useState({});


    const addToCart = (newItem) => {
      let updatedItems = {...cart};
      if (newItem.id in updatedItems) {
        updatedItems[`${newItem.id}`]++
      } else {
        updatedItems[`${newItem.id}`] = 1;
      }
      setCart(updatedItems)
    }

    const removeFromCart = (keyToRemove) => {
      let updatedItems = {...cart};
      delete updatedItems[keyToRemove];
      setCart(updatedItems)
    }

    const [total, setTotal] = useState(0);

    const computeTotal = () => {
      let runningTotal = 0;
      for(let cartItem in cart) {
        let product = products.find(item => item.id === parseInt(cartItem))
        let amount = Number(product.price)*Number(cart[cartItem])
        runningTotal+=amount
      }
      setTotal(runningTotal)
    }

    // const increaseQuanity = () => {
    //   return
    // }

    // const decreaseQuanity = () => {
    //   return
    // }

    useEffect(() => {
      computeTotal();
    }, [cart]);

    // useEffect(() => {
    //   console.log(cart);
    // }, [cart]);
  
    return <AppContext.Provider value={{ cart, setCart, products, setProducts, addToCart, removeFromCart, total }}>{children}</AppContext.Provider>;
  };
  