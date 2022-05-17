import "./App.css";
import Main from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";
import TechnologyPage from "./pages/TechnologyPage";
import ProductsPage from "./pages/ProductsPage";
import RnDPage from "./pages/RnDPage.js";
import SupportPage from "./pages/RnDPage.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<IntroPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/RnD' element={<RnDPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
