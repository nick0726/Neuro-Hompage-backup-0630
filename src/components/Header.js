import React, { Link, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ landingOn, setLandingOn }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="header"
        style={{
          backgroundColor: `${landingOn ? 'transparent' : 'white'}`,
          position: `${landingOn ? 'fixed' : 'relative'}`,
        }}
      >
        <h1
          onClick={() => {
            navigate('/');
            setLandingOn(true);
          }}
        >
          NeuroEars
        </h1>
        <div className="menu-nav">
          <ul>
            <li
              onClick={() => {
                navigate('/company');
              }}
            >
              회사소개
            </li>
            <li
              onClick={() => {
                navigate('/technology');
              }}
            >
              기술
            </li>
            <li
              onClick={() => {
                navigate('/products');
              }}
            >
              제품
            </li>
            <li
              onClick={() => {
                navigate('/RnD');
              }}
            >
              연구개발
            </li>
            <li
              onClick={() => {
                navigate('/support');
              }}
            >
              지원 및 서비스
            </li>
          </ul>
        </div>
        <div className="right-top-menu">
          <div className="language-Btn">
            <button>Language</button>
          </div>
          <div className="mypage-Btn">
            <button
              onClick={() => {
                navigate('/mypage/account');
              }}
            >
              MyPage
            </button>
          </div>
          <div className="login-Btn">
            <button
              onClick={() => {
                navigate('/login');
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
