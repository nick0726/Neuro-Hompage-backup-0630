import "./Support_QnA.css";
import MiddleNav from "../../components/MiddleNav_Support";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SupportQnA() {
  const navigate = useNavigate();
  const [isMainFold, setMainFoldOn] = useState(false);
  const [isSubFold, setSubFoldOn] = useState(false);

  return (
    <>
      <div
        id='support-bg'
        onClick={() => {
          setMainFoldOn(false);
          setSubFoldOn(false);
        }}
      >
        <div className='bg-title'>
          <h2>지원/서비스</h2>
          <h6>고객님의 문의에 친절하게 답변해 드리겠습니다.</h6>
        </div>
      </div>
      <MiddleNav
        isMainFold={isMainFold}
        setMainFoldOn={setMainFoldOn}
        isSubFold={isSubFold}
        setSubFoldOn={setSubFoldOn}
      />
      <div
        id='QnA-middle-box'
        className='middle-box'
        onClick={() => {
          setMainFoldOn(false);
          setSubFoldOn(false);
        }}
      >
        <div id='search-box' className='small-box'>
          <h2>Q&A</h2>
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
        <div id='board-box' className='small-box'>
          <div className='board'>
            <div className='board-header'>
              <div className='header-1'>번호</div>
              <div className='header-2'>제목</div>
              <div className='header-3'>작성자</div>
              <div className='header-4'>작성일</div>
              <div className='header-5'>처리상태</div>
              <div className='header-6'>공개여부</div>
            </div>
            <div className='posts'>
              <div className='post-1'>1234</div>
              <div className='post-2'>title</div>
              <div className='post-3'>author</div>
              <div className='post-4'>post-date</div>
              <div className='post-5'>status</div>
              <div className='post-6'>isOpen</div>
            </div>
          </div>
        </div>
        <button
          id='submit-query'
          className='query-button'
          onClick={() => {
            navigate("/queryregistratoin");
          }}
        >
          문의하기
        </button>
        <div id='terms' className='payment'>
          <div>
            <ol>
              <li>공지사항</li>
              <li>공지사항</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportQnA;
