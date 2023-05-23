import React,{useState} from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Accessories from './components/Accessories/Accessories';
import PrivacyPolicy from './components/footer/PrivacyPolicy';
import ReturnandExchange from './components/footer/ReturnandExchange';



function App() {
  const [cartCount, setCartCount] =useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert("added to cart")
  };

  return (
    <Router>
    <div className="App">
      <Navbar  count={cartCount}/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mens' element={<Mens onAddToCart={handleAddToCart}/>}/>
          <Route path='/womens' element={<Womens onAddToCart={handleAddToCart}/>}/>
        <Route path='/accessories' element={<Accessories onAddToCart={handleAddToCart}/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/return-exchange-policy' element={<ReturnandExchange/>}/>
     </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
