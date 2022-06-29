import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "../src/components/GlobalHeader.css";
import Header from "../src/components/GlobalHeader";
import LandingPage from "./pages/landing/LandingPage";
import CompanyPage from "./pages/Intro/CompanyPage";
import TechnologyPage from "./pages/technology/TechnologyPage";
import ProductsPage from "./pages/product/ProductsPage";
import RnDPage from "./pages/RnD/RnDPage.js";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/signup/SignupPage";
import Inquiry from "./pages/inquiry/InquiryPage";
import Support_Product_Query from "./pages/support/Support_Product_Query";
import MyPage from "./pages/mypage/MyPage";
import SupportFAQ from "./pages/support/Support_FAQ";
import SupportQnA from "./pages/support/Support_QnA";
import "./bootstrap.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TopBtn from "./components/TopBtn";
import { ThesisPage } from "./pages/RnD/ThesisPage";
// import Cart from "./pages/Cart";
import QueryRegistration from "./pages/support/Support_QueryRegistratoin";

function App() {
  const [isGlobalHeaderOn, setGlobalHeaderOn] = useState(true);
  const [isMainFold, setMainFoldOn] = useState(false);
  const [isSubFold, setSubFoldOn] = useState(false);
  // const [topBtnColor, setTopBtnColor] = useState(true);

  const currentPath = useLocation().pathname;

  return (
    <>
      {/* {console.log(currentPath)} */}
      <Provider store={store}>
        <Header
          style={{ display: `${currentPath == "/" ? "none" : "flex"}` }}
        />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route
            path='/RnD'
            element={
              <RnDPage
                isMainFold={isMainFold}
                setMainFoldOn={setMainFoldOn}
                isSubFold={isSubFold}
                setSubFoldOn={setSubFoldOn}
              />
            }
          />
          <Route path='/thesis' element={<ThesisPage />} />
          <Route path='/productquery' element={<Support_Product_Query />} />
          <Route path='/queryregistratoin' element={<QueryRegistration />} />
          <Route path='/faq' element={<SupportFAQ />} />
          <Route path='/qna' element={<SupportQnA />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          {/* 비밀번호 변경 */}
          <Route path='/inquiry' element={<Inquiry />} />
          <Route path='/mypage' element={<MyPage />}></Route>
          <Route path='*' element={<div>404</div>} />
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
        {/* <TopBtn topBtnColor={topBtnColor} setTopBtnColor={setTopBtnColor} /> */}
      </Provider>
    </>
  );
}

export default App;
