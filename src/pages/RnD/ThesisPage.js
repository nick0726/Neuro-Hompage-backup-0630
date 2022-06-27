import React from "react";
import MiddleNav from "../../components/MiddleNav";
import BgBox from "../../components/Bg.Box";
import Footer from "../../components/Footer";
import Author from "../../images/Author.jpg";
import Calender from "../../images/Calender.jpg";
import ThesisArrow from "../../images/Thesis-Arrow.jpg";

export const ThesisPage = () => {
  return (
    <>
      <div className='RnD-bg'>
        <div className='bg-title'>
          <h2>연구개발</h2>
          <p>All-in-one 어지럼증 통합 솔루션</p>
        </div>
        <MiddleNav />
      </div>
      <div id='RnD-contents' className='middle-box'>
        <div id='thesis' className='small-box'>
          <h2>연구 및 논문 자료</h2>
          <Thesis />
          <Thesis />
          <Thesis />
          <Thesis />
          <Thesis />
          <Thesis />
          <Thesis />
        </div>
      </div>

      <Footer />
    </>
  );
};

function Thesis() {
  return (
    <>
      <div className='thesis'>
        <h5>
          Top-down and bottom-up neurodynamic evidence in patients with tinnitus
        </h5>
        <p>
          <img src={Author} alt={Author} />
          Han Jae Jeon, Hyung-Jong Kim, Hyo-Jeong Lee, Chang-Geun Song, Sung
          Kwang Hong
          <img id='arrow' src={ThesisArrow} alt={ThesisArrow} />
        </p>
        <p>
          <img src={Calender} alt={Calender} />
          Eun-Cheon Lim, Jeong Hye Park, Hear Res. 2016 Dec;342:86-100
        </p>
      </div>
    </>
  );
}
