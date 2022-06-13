import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({
  landingOn,
  setLandingOn,
  myPageOn,
  setMyPageOn,
  topBtnColor,
  setTopBtnColor,
}) => {
  const navigate = useNavigate();
  const [subMenu, setSubMenuOn] = useState(false);

  useEffect(() => {
    let landingLocalStorageOn = localStorage.getItem("landingOn");
    landingLocalStorageOn === null
      ? setLandingOn(true)
      : setLandingOn(landingOn);
    // landingLocalOn === null ? setLandingOn(true) : setLandingOn(false);
    console.log(landingLocalStorageOn);
  }, [landingOn]);

  return (
    <>
      {/* {console.log(landingOn)} */}
      <div
        className='header'
        style={{
          backgroundColor: `${landingOn ? "transparent" : "white"}`,
        }}
      >
        <h1
          style={{
            color: `${landingOn ? "white" : "black"}`,
          }}
          onClick={() => {
            navigate("/");
            setLandingOn(true);
          }}
        >
          NeuroEars
        </h1>
        <div
          className='menu-nav'
          style={{
            color: `${landingOn ? "white" : "black"}`,
          }}
        >
          <ul>
            <li
              onClick={() => {
                navigate("/company");
                setLandingOn(false);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              회사소개
            </li>
            <li
              onClick={() => {
                navigate("/technology");
                setLandingOn(false);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              기술
            </li>
            <li
              onClick={() => {
                navigate("/products");
                setLandingOn(false);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              제품
            </li>
            <li
              onClick={() => {
                navigate("/RnD");
                setLandingOn(false);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              연구개발
            </li>
            <li
              onClick={() => {
                navigate("/support");
                setLandingOn(false);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              지원 및 서비스
            </li>
          </ul>
        </div>
        <div className='right-top-menu'>
          <div className='language-Btn'>
            <button
              style={{
                color: `${landingOn ? "white" : "black"}`,
                border: `${landingOn ? "1px solid white" : "1px solid black"}`,
              }}
            >
              Language
            </button>
          </div>
          <div className='mypage-Btn'>
            <button
              onClick={() => {
                navigate("/mypage");
                setLandingOn(false);
                localStorage.setItem("landingOn", false);
                // setMyPageOn(false);
                // setTopBtnColor(false);
              }}
            >
              {/* {console.log(localStorage.getItem('landingOn'))} */}
              MyPage
            </button>
          </div>
          <div className='login-Btn'>
            <button
              onClick={() => {
                navigate("/login");
                setLandingOn(false);
              }}
            >
              로그인
            </button>
          </div>
        </div>
        {/* {subMenu === true ? <SubMenu /> : null} */}
        {subMenu ? <SubMenu /> : null}
      </div>
    </>
  );

  function SubMenu() {
    return (
      <>
        <div className='submenu' onMouseLeave={() => setSubMenuOn(false)}>
          <div className='submenu-logo'>aaa</div>
          <div className='list'>
            <ul>
              <li>인사말</li>
              <li>비전</li>
              <li>연혁</li>
              <li>맴버</li>
              <li>파트너사</li>
              <li>보도자료</li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>
                소프트웨어 기반
                <br />
                안구추적 알고리즘
              </li>
              <li>인공지능(AI)</li>
              <li>
                개별 주파수 동조
                <br />
                뇌자극 알고리즘
              </li>
              <li>가상현실(VR)</li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>
                평형기능 분석
                <br />
                소프트웨어
              </li>
              <li>
                어지럼 재활
                <br />
                소프트웨어
              </li>
              <li>
                임상의사결정지원
                <br />
                소프트웨어
              </li>
              <li>
                이명 디지털
                <br />
                전자약
              </li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>
                보유기술 및<br />
                특허
              </li>
              <li>
                연구 및<br />
                논문자료
              </li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>제품문의</li>
              <li>FAQ</li>
              <li>Q&A</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

export default Header;
