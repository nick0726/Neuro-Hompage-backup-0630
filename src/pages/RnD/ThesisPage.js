import React, { useState } from "react";
import MiddleNav from "../../components/MiddleNav_RnD_Thesis";
import BgBox from "../../components/Bg.Box";
import Footer from "../../components/Footer";
import Author from "../../images/Author.jpg";
import Calender from "../../images/Calender.jpg";
import ThesisArrow from "../../images/Thesis-Arrow.jpg";
import ThesisData from "../../data/ThesisData";
import "./RnDPage.css";
import { Link } from "react-router-dom";

export const ThesisPage = () => {
  const [thesis, thesisUpdate] = useState(ThesisData);
  return (
    <>
      <div className='RnD-bg'>
        <div className='bg-title'>
          <h2>연구개발</h2>
          <p>All-in-one 어지럼증 통합 솔루션</p>
        </div>
      </div>
      <MiddleNav />
      <div id='RnD-contents' className='middle-box'>
        <div id='thesis' className='small-box'>
          <h2>연구 및 논문 자료</h2>
          {thesis.map((el, i) => {
            return <Thesis thesis={thesis} i={i} />;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

function Thesis(props) {
  return (
    <>
      <div className='thesis'>
        <div className='thesis-contents'>
          <h5>{props.thesis[props.i].title}</h5>
          <p>
            <img src={Author} alt={Author} />
            {props.thesis[props.i].author}
          </p>
          <p>
            <img src={Calender} alt={Calender} />
            {props.thesis[props.i].source}
          </p>
        </div>
        <div className='arrow-box'>
          <a href={props.thesis[props.i].linkUrl} rel='noreferrer'>
            <img id='arrow' src={ThesisArrow} alt={ThesisArrow} />
          </a>
        </div>
      </div>
    </>
  );
}
