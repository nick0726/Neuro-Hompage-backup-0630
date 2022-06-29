import { useState } from "react";
import BgBox from "../../components/Bg.Box";
import Footer from "../../components/Footer";
import MiddleNav from "../../components/MiddleNav_RnD";
import "./RnDPage.css";
import certi from "../../images/certi.svg";

const RnDPage = () => {
  return (
    <>
      <Certifications />
      <Footer />
    </>
  );

  function Certifications() {
    const [isMainFold, setMainFoldOn] = useState(false);
    const [isSubFold, setSubFoldOn] = useState(false);
    return (
      <>
        <div
          className='RnD-bg'
          onClick={() => {
            setMainFoldOn(false);
            setSubFoldOn(false);
          }}
        >
          <div className='bg-title'>
            <h2>연구개발</h2>
            <p>All-in-one 어지럼증 통합 솔루션</p>
          </div>
        </div>
        <MiddleNav
          isSubFold={isSubFold}
          setSubFoldOn={setSubFoldOn}
          isMainFold={isMainFold}
          setMainFoldOn={setMainFoldOn}
        />
        <div
          id='RnD-certifications'
          className='middle-box'
          onClick={() => {
            setMainFoldOn(false);
            setSubFoldOn(false);
          }}
        >
          <div className='small-box'>
            <h2>보유기술 및 특허</h2>
            <div id='cards'>
              <CertiCards />
              <CertiCards />
              <CertiCards />
              <CertiCards />
            </div>
            <div id='cards'>
              <CertiCards />
              <CertiCards />
              <CertiCards />
              <CertiCards />
            </div>
          </div>
        </div>
      </>
    );
  }

  function CertiCards() {
    return (
      <>
        <div className='certification'>
          <img src={certi} alt={certi} />
          <h6>제 10-1934235호</h6>
          <h6>위변조 방지용</h6>
          <h6>특허명</h6>
        </div>
      </>
    );
  }
};
export default RnDPage;
