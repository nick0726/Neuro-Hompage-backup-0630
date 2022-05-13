import "./App.css";
import Main from "./pages/main/main";
import Company from "./pages/menu/company";
import Product from "./pages/menu/products";
import Technology from "./pages/menu/technology";
import Development from "./pages/menu/development";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='about' element={<Company />} />
        <Route path='technology' element={<Technology />} />
        <Route path='products' element={<Product />} />
        <Route path='development' element={<Development />} />
        <Route path='support'>
          {/* <Route path='' />
        <Route path='' />
        <Route path='' />
        <Route path='' /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
