import React from "react";
import "./main.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Main() {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='item'>Page1</div>
        <div className='item'>Page2</div>
        <div className='item'>Page3</div>
        <div className='item'>Page4</div>
        <div className='item'>Page5</div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
