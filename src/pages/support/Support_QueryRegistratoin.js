import MiddleNav from "../../components/MiddleNav_Intro";
import "./Support_QueryRegistration.css";
import upload from "../../images/upload.jpg";

function QueryRegistration() {
  return (
    <>
      <div id='support-bg'>
        <div className='bg-title'>
          <h2>지원/서비스</h2>
          <h6>고객님의 문의에 친절하게 답변해 드리겠습니다.</h6>
        </div>
      </div>
      <MiddleNav />
      <div className='middle-box'>
        <div id='query-registration' className='small-box'>
          <h2>문의 등록</h2>
          <div className='order-form'>
            <div id='query-regeistration-box' className='order-user-form-box'>
              <div className='order-user-form'>
                <p>
                  상담유형<sup>*</sup>
                </p>
                <div className='border' />
                <select>
                  <option>문의유형1</option>
                  <option>문의유형2</option>
                  <option>문의유형3</option>
                </select>
              </div>
              <div className='order-user-form'>
                <p>
                  제목<sup>*</sup>
                </p>
                <div className='border' />
                <input placeholder='제목을 입력해 주세요' />
              </div>
              <div id='query' className='order-user-form'>
                <p>
                  상세 내용<sup>*</sup>
                </p>
                <div className='border' />
                <input
                  id='query-contents'
                  placeholder='상세내용을 입력해 주세요'
                />
              </div>

              <div className='order-user-form'>
                <p>
                  첨부파일<sup>*</sup>
                </p>
                <div id='account-copy-border' className='border' />
                <input placeholder='첨부파일을 업로드 해주세요' />
                <button id='uploadFile'>
                  <img src={upload} alt={upload} /> 첨부파일
                </button>
              </div>

              <div id='isOpen' className='order-user-form'>
                <p>
                  공개여부<sup>*</sup>
                </p>
                <div id='account-copy-border' className='border' />
                <div className='button-box'>
                  <button id='open'>공개</button>
                  <button id='secret'>비공개</button>
                </div>
              </div>
            </div>

            <div id='terms-title' className='order-menu-nav'>
              <h5>개인정보 수집 및 이용 동의</h5>
            </div>
            <div id='terms' className='payment'>
              <div>
                <ol>
                  <li>
                    개인정보의 수집∙이용 및 목적 : 문의자 신원 확인, 문의내용
                    확인 및 처리 결과 통보
                  </li>
                  <li>
                    수집하려는 개인정보의 항목 필수항목 : 성명, 휴대폰번호,
                    이메일
                  </li>
                  <li>
                    개인정보의 보유 및 이용 기간 : 문의 내용의 처리가 완료될 때
                    까지
                  </li>
                  <li>
                    귀하는 개인정보 수집∙이용에 동의하지 않으실 수 있습니다.
                    동의 거부 시 문의에 대한 회신 등의 서비스는 제한될 수
                    있습니다.
                  </li>
                </ol>
              </div>
            </div>
            <div className='terms-agree'>
              <input type='checkbox' />
              동의합니다.
            </div>
            <button id='submit-query'>문의하기</button>
            <div id='lastSection'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QueryRegistration;
