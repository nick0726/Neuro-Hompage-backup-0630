import BgBox from "../../components/Bg.Box";
import Footer from "../../components/Footer";
import MiddleNav from "../../components/MiddleNav";
import "./RnDPage.css";
import Author from "../../images/Author.jpg";
import Calender from "../../images/Calender.jpg";
import ThesisArrow from "../../images/Thesis-Arrow.jpg";
import { useState } from "react";

function RnDPage() {
  const [isCertiOn, setCertiOn] = useState(false);
  return (
    <>
      {isCertiOn === true ? (
        <Certifications />
      ) : (
        <>
          <div className="RnD-bg">
            <h2>연구개발</h2>
            <p>All-in-one 어지럼증 통합 솔루션</p>
            <MiddleNav />
          </div>
          <div id="RnD-contents" className="middle-box">
            <div className="small-box">
              <h2
                onClick={() => {
                  setCertiOn(!isCertiOn);
                }}
              >
                연구 및 논문 자료
              </h2>
              <Thesis />
              <Thesis />
              <Thesis />
              <Thesis />
              <Thesis />
              <Thesis />
              <Thesis />
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );

  function Thesis() {
    return (
      <>
        <div className="thesis">
          <h5>
            Top-down and bottom-up neurodynamic evidence in patients with
            tinnitus
          </h5>
          <p>
            <img src={Author} alt={Author} />
            Han Jae Jeon, Hyung-Jong Kim, Hyo-Jeong Lee, Chang-Geun Song, Sung
            Kwang Hong
            <img id="arrow" src={ThesisArrow} alt={ThesisArrow} />
          </p>
          <p>
            <img src={Calender} alt={Calender} />
            Eun-Cheon Lim, Jeong Hye Park, Hear Res. 2016 Dec;342:86-100
          </p>
        </div>
      </>
    );
  }

  function Certifications() {
    return (
      <>
        <div className="RnD-bg">
          <h2>연구개발</h2>
          <p>All-in-one 어지럼증 통합 솔루션</p>
          <MiddleNav />
        </div>
        <div id="RnD-certifications" className="middle-box">
          <div className="small-box">
            <h2
              onClick={() => {
                setCertiOn(!isCertiOn);
              }}
            >
              보유기술 및 특허
            </h2>
          </div>
          <div id="cards" className="small-box">
            <CertiCards />
            <CertiCards />
            <CertiCards />
            <CertiCards />
            <CertiCards />
            <CertiCards />
          </div>
        </div>
      </>
    );
  }

  function CertiCards() {
    return (
      <>
        <div className="certification">
          <h6>제 10-1934235호</h6>
          <h6>위변조 방지용</h6>
          <h6>특허명</h6>
        </div>
      </>
    );
  }
}
export default RnDPage;
