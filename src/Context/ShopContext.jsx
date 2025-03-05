import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import {useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate() 

  const addToCart = async (itemId, size) => {
    if (!size) {
      // Show toast if size is not selected
      toast.error("Please select a size before adding to cart!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

const getCartCount = () => {
  let totalCount = 0;
  for(const items in cartItems){
    for( const item in cartItems [items]){
      try {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
          
        }
        
      } catch (error) {
        
      }
    }
  }
  return totalCount;
}

const updateQuantity = async(itemId , size , quantity) => {
  let cartData = structuredClone (cartItems);
  cartData[itemId][size] = quantity;
  setCartItems(cartData);

}


const getCartAmount = () => {

  let totalAmount = 0;
  for (const items in cartItems ){
    let itemInfo = products.find((product)=>product._id === items);
    for (const item in cartItems[items]){
     try {
      if (cartItems[items ] [item] > 0) {
        totalAmount += itemInfo.price * cartItems[items][item]
        
      }
     } catch (error) {
      
     }
    }
  }
  return totalAmount;


}

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount ,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <>
      <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </>
  );
};

export default ShopContextProvider;
