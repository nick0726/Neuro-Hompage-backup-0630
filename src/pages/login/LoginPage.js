import React from "react";
import "./LoginPage.css";

function LoginPage() {
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
              <button>로그인</button>
            </div>
            <div className='social_login'>
              <p>N</p>
              <p>F</p>
              <p>E</p>
              <input type='checkbox'></input>
              <p>자동로그인</p>
            </div>
          </div>
          <div className='login_box_right'></div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
