import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import naver from "../../../src/images/naver.png";
import facebook from "../../../src/images/facebook.png";
import email from "../../../src/images/email.png";
import Footer from "../../components/Footer";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='login_container'>
        <div className='login_title'>
          <h1>로그인</h1>
          <p>뉴로이어즈에 가입하고 다양한 서비스를 이용해 보세요.</p>
        </div>
        <div className='login_box'>
          <div className='login_box_left'>
            <div className='account_box'>
              <input></input>
              <input></input>
            </div>
            <div className='login_btn'>
              <button
                onClick={() => {
                  navigate("/mypage/account");
                }}
              >
                로그인
              </button>
            </div>
            <div className='social_login'>
              <img src={naver} alt={naver} />
              <img src={facebook} alt={facebook} />
              <img src={email} alt={email} />
            </div>
            <div className='login_option'>
              <div className='auto_login'>
                <input type='checkbox'></input>
                자동로그인
              </div>
              <div className='save_login'>
                <input type='checkbox'></input>
                ID 저장
              </div>
            </div>
          </div>
          <div className='login_box_right'>
            <div className='signup_box'>
              <h1>아직 회원이 아니신가요?</h1>
              <p>뉴로이어즈에 가입하고 다양한 서비스를 이용해 보세요</p>
            </div>
            <div className='signup_btn'>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </button>
            </div>
            <div className='signup_guide'>
              <p>도움이 필요하신가요?</p>
            </div>
            <div className='signup_guide_p2'>
              <p
                onClick={() => {
                  navigate("/inquiry");
                }}
              >
                아이디/비밀번호 찾기
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
