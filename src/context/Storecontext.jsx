import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };



  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);





  const [subtotal, setSubtotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(5); 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newSubtotal = 0;
  
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        newSubtotal += item.price * cartItems[item._id];
      }
    });
  
    setSubtotal(newSubtotal);
  
    const hasItems = Object.values(cartItems).some(quantity => quantity > 0);
    const newDeliveryFee = hasItems ? 5 : 0;
    setDeliveryFee(newDeliveryFee);
  
    setTotal(newSubtotal + newDeliveryFee);
  }, [cartItems]);
  


  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    subtotal,
    deliveryFee,
    total

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
