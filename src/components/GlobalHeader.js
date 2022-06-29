import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import NevigationBg from "../images/Nevigation-bg.png";
import "./GlobalHeader.css";

function Header(props) {
  const navigate = useNavigate();
  const [subMenu, setSubMenuOn] = useState(false);

  return (
    <>
      <div
        // id='Global-header'
        className='header'
        style={props.style}
      >
        {/* {console.log(setHeaderFix)} */}
        <div
          className='logo'
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt={logo} />
        </div>
        <div className='menu-nav'>
          <ul>
            <li
              onClick={() => {
                navigate("/company");
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              회사소개
            </li>
            <li
              onClick={() => {
                navigate("/technology");
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              기술
            </li>
            <li
              onClick={() => {
                navigate("/products");
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              제품
            </li>
            <li
              onClick={() => {
                navigate("/RnD");
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              연구개발
            </li>
            <li
              onClick={() => {
                navigate("/Productquery");
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              지원 및 서비스
            </li>
          </ul>
        </div>
        <div className='right-top-menu'>
          <div className='language-Btn'>
            <button>Language</button>
          </div>
          <div className='mypage-Btn'>
            <button
              onClick={() => {
                navigate("/mypage");
                localStorage.setItem("landingOn", false);
              }}
            >
              MyPage
            </button>
          </div>
          <div className='login-Btn'>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </button>
          </div>
        </div>
        {/* 2차오픈때 mvc 패턴, 상태가 없어서 에러 */}
        {/* {subMenu ? <SubMenu /> : null} */}
      </div>
    </>
  );

  function SubMenu() {
    const navigate = useNavigate();
    return (
      <>
        <div className='submenu' onMouseLeave={() => setSubMenuOn(false)}>
          <div className='submenu-logo'>
            <div className='logo-left'></div>
            <div className='logo-right'>
              <img src={NevigationBg} alt={NevigationBg} />
            </div>
          </div>
          <div className='list-open'>
            <div id='intro-list' className='list'>
              <ul>
                <li onClick={() => navigate("/company")}>
                  <a href='#company-s1'>회사소개</a>
                </li>
                <li>비전</li>
                <li>연혁</li>
                <li>파트너사</li>
                {/* <li>오시는길</li> */}
              </ul>
            </div>
            <div id='tech-list' className='list'>
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
            <div id='product-list' className='list'>
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
                  임상의사 결정지원
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
            <div id='RnD-list' className='list'>
              <ul>
                <li
                  onClick={() => {
                    navigate("/RnD");
                  }}
                >
                  보유기술 및<br />
                  특허
                </li>
                <li
                  onClick={() => {
                    navigate("/thesis");
                  }}
                >
                  연구 및<br />
                  논문자료
                </li>
              </ul>
            </div>
            <div id='query-list' className='list'>
              <ul>
                <li
                  onClick={() => {
                    navigate("/productquery");
                  }}
                >
                  제품문의
                </li>
                <li
                  onClick={() => {
                    navigate("/faq");
                  }}
                >
                  FAQ
                </li>
                <li
                  onClick={() => {
                    navigate("/qna");
                  }}
                >
                  Q&A
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
