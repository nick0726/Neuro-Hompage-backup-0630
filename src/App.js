import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "../src/components/Header.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LandingPage from "./pages/landing/LandingPage";
import CompanyPage from "./pages/Intro/CompanyPage";
import TechnologyPage from "./pages/technology/TechnologyPage";
import ProductsPage from "./pages/product/ProductsPage";
import RnDPage from "./pages/RnD/RnDPage.js";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/signup/SignupPage";
import Inquiry from "./pages/inquiry/InquiryPage";
import SupportPage from "./pages/support/SupportPage";
import MyPage from "./pages/mypage/MyPage";
import PurchaseHistory from "./pages/mypage/PurchaseHistoryPage";
import Account from "./pages/mypage/AccountPage";
import HospitalInfo from "./pages/mypage/HospitalInfoPage";
import License from "./pages/mypage/LicensePage";
import ConnectionHistory from "./pages/mypage/ConnectionHistoryPage";
import Download from "./pages/mypage/DownloadPage";
import Payment from "./pages/mypage/PaymentPage";
import SupportFAQ from "./pages/support/Support_FAQ";
import SupportQnA from "./pages/support/Support_QnA";
import Productquery from "./pages/support/Support_Product_Query";
import "./bootstrap.css";
import { Provider } from "react-redux";
import store from "./redux/store";

// import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/RnD' element={<RnDPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/productquery' element={<Productquery />} />
          <Route path='/faq' element={<SupportFAQ />} />
          <Route path='/qna' element={<SupportQnA />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/inquiry' element={<Inquiry />} />
          <Route path='/mypage' element={<MyPage />}>
            <Route path='account' element={<Account />} />
            <Route path='hospitalinfo' element={<HospitalInfo />} />
            <Route path='license' element={<License />} />
            <Route path='purchasehistory' element={<PurchaseHistory />} />
            <Route path='connectionhistory' element={<ConnectionHistory />} />
            <Route path='download' element={<Download />} />
            <Route path='payment' element={<Payment />} />
          </Route>
          <Route path='*' element={<div>404</div>} />
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
