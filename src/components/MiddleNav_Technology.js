import React, { useEffect, useState } from "react";
import "./MiddleNav_Technology.css";
import home from "../images/Home.png";
import data from "../data/IntroNavData";
import unfold from "../images/unfold.svg";
import { useNavigate } from "react-router-dom";

const MiddleNav = (props) => {
  const navigate = useNavigate();
  const [introNavData, setIntroNavData] = useState(data);
  /*Props */
  // const [isMainFold, setMainFoldOn] = useState(false);
  // const [isSubFold, setSubFoldOn] = useState(false);

  // useEffect(() => {
  //   props.setHeaderFix === false
  //     ? props.setHeaderFix(false)
  //     : props.setLandingOn(false);
  // }, []);

  return (
    <>
      <div className='middle-nav-box'>
        <div className='middle-nav-contents'>
          <div
            className='home-img'
            onClick={() => {
              navigate("/");
              props.setHeaderFixOn(false);
            }}
          >
            <img src={home} alt={home} />
          </div>
          <div className='menu'>
            <div className='menu-title'>기술</div>
            {/* {introNavData[0].title} */}
            <img
              onClick={() => {
                props.setMainFoldOn(!props.isMainFold);
                props.setSubFoldOn(false);
              }}
              id='unfold'
              src={unfold}
              alt={unfold}
            />
          </div>
          <div id='sb-tech-1' className='section'>
            <div className='section-title'>
              소프트웨어 기반 안구추적 알고리즘
            </div>
            {/* {introNavData[0].subtitle} */}
            <img
              onClick={() => {
                props.setMainFoldOn(false);
                props.setSubFoldOn(!props.isSubFold);
              }}
              id='unfold'
              src={unfold}
              alt={unfold}
            />
          </div>
        </div>
      </div>
      {props.isMainFold === true ? (
        <MainNav
          isFold={props.isMainFold}
          setMainFoldOn={props.setMainFoldOn}
          navigate={navigate}
        />
      ) : null}

      {props.isSubFold === true ? (
        <Subnav isFold={props.isSubFold} setFoldOn={props.setSubFoldOn} />
      ) : null}
    </>
  );
};

function MainNav(props) {
  return (
    <>
      <div id='MainNav' className='middle-nav-box'>
        <div className='middle-nav-contents'>
          <div className='home-img'></div>
          <div className='menu'>
            <div onClick={() => props.navigate("/company")}>회사소개</div>
            <div onClick={() => props.navigate("/products")}>제품</div>
            <div onClick={() => props.navigate("/RnD")}>연구개발</div>
            <div onClick={() => props.navigate("/Productquery")}>
              지원 및 서비스
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Subnav(props) {
  return (
    <>
      <div id='Subnav' className='middle-nav-box'>
        <div className='middle-nav-contents'>
          <div className='home-img'></div>
          <div className='menu'></div>
          <div className='section'>
            <a href='#VR-full-box'>
              <div>가상현실(VR)</div>
            </a>
            <a href='#AI-section'>
              <div>인공지능(AI)</div>
            </a>
            <a href='#frequency-ALGO'>
              <div>
                개별주파수 동조
                <br />
                뇌자극 알고리즘
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleNav;
