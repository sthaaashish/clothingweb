import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mens from "./components/Mens/Mens";
import Womens from "./components/Womens/Womens";
import Accessories from "./components/Accessories/Accessories";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import ReturnandExchange from "./components/footer/ReturnandExchange";
import ProductDetail from "./components/productdetail/ProductDetail";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <>
        <Navbar count={cartCount} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/mens"
            element={<Mens  />}
          />
          <Route
            path="/womens"
            element={<Womens />}
          />
          <Route
            path="/accessories"
            element={<Accessories />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/return-exchange-policy"
            element={<ReturnandExchange />}
          />
          <Route
            path="/productdetail/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cartItems} />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
