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

  return (
    <>
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
            >
              회사소개
            </li>
            <li
              onClick={() => {
                navigate("/technology");
                setLandingOn(false);
              }}
            >
              기술
            </li>
            <li
              onClick={() => {
                navigate("/products");
                setLandingOn(false);
              }}
            >
              제품
            </li>
            <li
              onClick={() => {
                navigate("/RnD");
                setLandingOn(false);
              }}
            >
              연구개발
            </li>
            <li
              onClick={() => {
                navigate("/support");
                setLandingOn(false);
              }}
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
                // setMyPageOn(!myPageOn);
                setMyPageOn(false);
                setTopBtnColor(false);
              }}
            >
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
      </div>
    </>
  );
};

export default Header;
