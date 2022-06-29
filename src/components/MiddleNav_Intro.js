import React, { useState } from "react";
import "./MiddleNav.css";
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
  return (
    <>
      <div className='middle-nav-box'>
        <div className='middle-nav-contents'>
          <div
            className='home-img'
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={home} alt={home} />
          </div>
          <div className='menu'>
            <div className='menu-title'>회사소개</div>
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
          <div className='section'>
            <div className='section-title'>소개</div>
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
            <div onClick={() => props.navigate("/technology")}>기술</div>
            <div onClick={() => props.navigate("/products")}>제품</div>
            <div onClick={() => props.navigate("/RnD")}>연구개발</div>
            <div onClick={() => props.navigate("/Productquery")}>
              지원 및 서비스
            </div>
          </div>
          <div className='section'></div>
        </div>
      </div>
    </>
  );
}

function Subnav(props) {
  return (
    <>
      <div id='Intro-Subnav' className='middle-nav-box'>
        <div className='middle-nav-contents'>
          <div className='home-img'></div>
          <div className='menu'></div>
          <div className='section'>
            <a href='#history-small-box'>
              <div>연혁</div>
            </a>
            <a href='#member-box-1'>
              <div>맴버</div>
            </a>
            <a href='#partners'>
              <div>파트너사</div>
            </a>
            <a href='#location-box'>
              <div>오시는길</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleNav;
