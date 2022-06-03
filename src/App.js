import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "../src/components/Header.css";
import LandingPage from "./pages/landing/LandingPage";
import IntroPage from "./pages/menu/IntroPage";
import TechnologyPage from "./pages/menu/TechnologyPage";
import ProductsPage from "./pages/menu/ProductsPage";
import RnDPage from "./pages/menu/RnDPage.js";
import SupportPage from "./pages/menu/RnDPage.js";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LoginPage from "./pages/login/LoginPage";
import "./bootstrap.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/company' element={<IntroPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/RnD' element={<RnDPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
