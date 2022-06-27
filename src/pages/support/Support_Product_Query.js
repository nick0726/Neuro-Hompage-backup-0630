// import ServiceBg from '../../images/05_support/Img-Bg-Service-m.png'
import { useState } from "react";
import MiddleNav from "../../components/MiddleNav";
import "./Support_Product_Query.css";
import ActiveBill from "../../images/05_support/Ask/Bill/Active.svg";
import InActiveBill from "../../images/05_support/Ask/Bill/Inactive.svg";
import ActiveAsk from "../../images/05_support/Ask/Normal/Active.svg";
import InActiveAsk from "../../images/05_support/Ask/Normal/Inactive.svg";
import ActiveShopping from "../../images/05_support/Ask/Shopping/Active.svg";
import InActiveShopping from "../../images/05_support/Ask/Shopping/Inactive.svg";
import ActiveTools from "../../images/05_support/Ask/Tools/Active.svg";
import InActiveTools from "../../images/05_support/Ask/Tools/Inactive.svg";

function SupportProductQuery() {
  const [isHoverOn, setHoverOn] = useState(false);

  return (
    <>
      <div id='support-bg'>
        <div className='bg-title'>
          <h2>지원/서비스</h2>
          <h6>고객님의 문의에 친절하게 답변해 드리겠습니다.</h6>
        </div>
      </div>
      <MiddleNav />
      <div id='query-box' className='middle-box'>
        <div className='small-box'>
          <h2>제품문의</h2>
          <div
            className='productquery-product-nav'
            onPointerEnter={() => setHoverOn(true)}
            onPointerOut={() => setHoverOn(false)}
          >
            <div className='nav-menu'>
              {isHoverOn === true ? (
                <img src={ActiveShopping} alt={ActiveShopping} />
              ) : (
                <img src={InActiveShopping} alt={InActiveShopping} />
              )}
              구매 문의
            </div>
            <div className='nav-menu'>
              {isHoverOn === true ? (
                <img src={ActiveBill} alt={ActiveBill} />
              ) : (
                <img src={InActiveBill} alt={InActiveBill} />
              )}
              견적 문의
            </div>
            <div className='nav-menu'>
              {isHoverOn === true ? (
                <img src={ActiveTools} alt={ActiveTools} />
              ) : (
                <img src={InActiveTools} alt={InActiveTools} />
              )}
              유지보수 문의
            </div>
            <div className='nav-menu'>
              {isHoverOn === true ? (
                <img src={ActiveAsk} alt={ActiveAsk} />
              ) : (
                <img src={InActiveAsk} alt={InActiveAsk} />
              )}
              일반 문의
            </div>
          </div>
        </div>
        <div id='query-info' className='small-box'>
          <div className='order-form'>
            <div className='order-menu-nav'>
              <h5>접수자 정보</h5>
              <input type='checkbox' />
              <p>회원정보와 동일</p>
            </div>

            <div className='order-user-form-box'>
              <div className='order-user-form'>
                <p>
                  이름<sup>*</sup>
                </p>
                <div className='border' />
                <input />
              </div>

              <div className='order-user-form'>
                <p id='charge-name'>
                  소속 병원<sup>*</sup>
                </p>
                <div className='border' />
                <input />
                <p id='charge-phone'>
                  소속 부서<sup>*</sup>
                </p>
                <input id='charge-phone-input' />
              </div>
              <div className='order-user-form'>
                <p id='charge-name'>
                  이메일<sup>*</sup>
                </p>
                <div className='border' />
                <input />
                <p id='charge-phone'>
                  연락처<sup>*</sup>
                </p>
                <input id='charge-phone-input' />
              </div>
            </div>

            <div className='order-menu-nav'>
              <h5>상세 내용</h5>
              <p id='refund-notice'>문의 내용을 입력해주시기 바랍니다.</p>
            </div>
            <div className='refund-account'>
              <div className='order-user-form-box'>
                <div className='order-user-form'>
                  <p>
                    제목<sup>*</sup>
                  </p>
                  <div className='border' />
                  <input />
                </div>
                <div id='query' className='order-user-form'>
                  <p>
                    상세 내용<sup>*</sup>
                  </p>
                  <div className='border' />
                  <input id='query-contents' />
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
          </div>
          <div id='lastSection'></div>
        </div>
      </div>
    </>
  );
}

export default SupportProductQuery;
