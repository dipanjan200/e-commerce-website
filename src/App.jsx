import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Placeorder from "./Pages/placeorder";
import Orders from "./Pages/Orders";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=" px-20 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About/>}/>
       <Route path="contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route  path="login" element={<Login/>}/>
        <Route path="/place-order" element={<Placeorder/>}/>
        <Route  path="/orders" element={<Orders/>}/>
      </Routes>
      <Footer/>

     
    </div>
  );
};

export default App;
