import React, { Link, useState, useEffect } from "react";
import "./LandingHeader.css";
import { useNavigate } from "react-router-dom";

const LandingHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='Landing header'>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          NeuroEars
        </h1>
        <div className='menu-nav'>
          <ul>
            <li>
              <p
                onClick={() => {
                  navigate("/company");
                }}
              >
                회사소개
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/technology");
                }}
              >
                기술
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/product");
                }}
              >
                제품
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/RnD");
                }}
              >
                연구개발
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/support");
                }}
              >
                지원 및 서비스
              </p>
            </li>
          </ul>
        </div>
        <div className='right-top-menu'>
          <div className='language-Btn'>
            <button>Language</button>
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
      </div>
    </>
  );
};

export default LandingHeader;
