import React from "react";
// import { useState } from "react";
import "./sideNav.css";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='sideNav'>
        <Nav
          className='flex-column'
          variant='pills'
          defaultActiveKey='/mypage/account'
        >
          <Nav.Link eventKey='/mypage/account'>내계정</Nav.Link>
          <Nav.Link
            eventKey='link-1'
            onClick={() => navigate("/mypage/hospitalinfo")}
          >
            병원 정보
          </Nav.Link>
          <Nav.Link eventKey='link-2'>라이선스 관리</Nav.Link>
          <Nav.Link eventKey='link-3'>구매 이력</Nav.Link>
          <Nav.Link eventKey='link-4'>접속 이력</Nav.Link>
          <Nav.Link eventKey='link-5'>다운로드</Nav.Link>
          <Nav.Link eventKey='link-6'>결제</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default SideNav;
