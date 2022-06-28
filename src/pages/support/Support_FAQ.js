import React, { useState } from "react";
import MiddleNav from "../../components/MiddleNav";
import "./Support_FAQ.css";
import FAQmodal from "../../components/FAQ_Modal";
import FAQ from "../../components/FAQ";
import data from "../../data/FaQdata";

const Support_FAQ = () => {
  /*FAQ 필수 States faq, selected*/
  const [faq, faqUpdate] = useState(data);
  const [selected, setSelected] = useState(-1);
  const [isClick, setClickOn] = useState(false);
  const style = {
    color: `${isClick === true ? "white" : "black"}`,
    backgroundColor: `${isClick === true ? "#024abd" : "white"}`,
  };
  return (
    <>
      <div id='support-bg'>
        <div className='bg-title'>
          <h2>지원/서비스</h2>
          <h6>고객님의 문의에 친절하게 답변해 드리겠습니다.</h6>
        </div>
      </div>
      <MiddleNav />
      <div id='FAQ-middle-box' className='middle-box'>
        <h3>FAQ</h3>
        <h3>자주하는 질문</h3>
        <div id='FAQ-small-box'>
          <div className='FAQ-box'>
            <div className='FAQ-nav'>
              <div
                className='nav-menu'
                // onClick={() => {
                //   setClickOn(!isClick);
                // }}
                // style={style}
              >
                전체
              </div>
              <div className='nav-menu'>소프트웨어</div>
              <div className='nav-menu'>구매</div>
              <div className='nav-menu'>FAQs</div>
            </div>
          </div>
          <div className='search'>
            <div className='search-left'>
              <select>
                <option>제목</option>
                <option>번호</option>
                <option>작성자</option>
              </select>
            </div>
            <div className='search-middle'>
              <input
                className='search-middle'
                placeholder='검색어를 입력해 주세요.'
              />
            </div>
            <div className='search-button'>
              <button className='search-button'>검색</button>
            </div>
          </div>
        </div>
      </div>
      <div className='FAQ-modal-bg'>
        {faq.map((el, i) => {
          return (
            <div key={i}>
              <FAQ
                faq={faq[i]}
                idx={i}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Support_FAQ;
