import "./App.css";
import Main from "./pages/main/MainPage";
import IntroPage from "./pages/menu/IntroPage";
import TechnologyPage from "./pages/menu/TechnologyPage";
import ProductsPage from "./pages/menu/ProductsPage";
import RnDPage from "./pages/menu/RnDPage.js";
import SupportPage from "./pages/menu/RnDPage.js";
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
