import "./App.css";
import MainPage from "./pages/main/MainPage";
import IntroPage from "./pages/menu/IntroPage";
import TechnologyPage from "./pages/menu/TechnologyPage";
import ProductsPage from "./pages/menu/ProductsPage";
import RnDPage from "./pages/menu/RnDPage.js";
import SupportPage from "./pages/menu/RnDPage.js";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/company' element={<IntroPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/RnD' element={<RnDPage />} />
        <Route path='/support' e lement={<SupportPage />} />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
