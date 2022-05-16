import React from "react";
import "./main.css";

function Main() {
  return (
    <>
      <Header />
      <div className='main_container'>
        <div className='main_container_content'>
          <div className='main_container_navigator'>
            어딧니
            <div className='mainpage_page1_title'>
              <h1>NeuroEars</h1>
              <h4>평형기능</h4>
              <h4>소프트웨어 개발</h4>
              <h4>전문기업</h4>
              <div className='mainpage_page1_subtitle'>
                <h5>Software as Medical Device for</h5>
                <h5>Vestibular function tests and rehabilitation</h5>
              </div>
            </div>
            <div className='mainpage_page1_btn'>
              <button>문의하기</button>
            </div>
          </div>
        </div>

        <div className='main'>Page2</div>
        <div className='main'>Page3</div>
        <div className='main'>Page4</div>
        <div className='main'>Page5</div>
      </div>
    </>
  );
}

export default Main;
