import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/home";
import ProductHero from "./components/home/ProductHero";
import CategoriesPage from "./components/categories/CategoriesHero";
import CartPage from "./components/cart/Cartpage";
import ContactUs from "./components/contact-us";
import SingleProduct from "./components/product/single-product";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<ProductHero />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:slug" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
