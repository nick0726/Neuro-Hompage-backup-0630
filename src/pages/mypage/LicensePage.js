import "./LicensePage.css";
import { useState } from "react";
import document from "../../images/document.jpg";
import { useNavigate } from "react-router-dom";

const LicensePage = () => {
  let [hospital, setHospitalOn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className='hospital-box'>
        <div className='hospital-title'>
          <h1>라이선스 정보</h1>
          <div>고객님께서 구매하신 라이선스정보 입니다.</div>
          <br />
          <div className='hospital-title-border' />
          <div className='hospital-content-box'>
            <img src={document} alt={document} />
            <h5>구매하신 제품이 없습니다.</h5>
            <p>특별한 뉴로이어즈의 제품을 구매해보세요.</p>
          </div>
          <div className='hospital-title-border' />
          <button
            className='hospital-edit-btn'
            onClick={() => navigate("/products")}
          >
            제품둘러보기
          </button>
        </div>
      </div>
      {hospital === true ? <Edithospital /> : null}
    </>
  );

  function Edithospital() {
    return (
      <div className='hospital-box'>
        <div className='hospital-title'>
          <h1>병원 정보</h1>
          <div>
            고객님께서 입력하신 내 정보 입니다.
            <br />
            원할한 서비스를 위하여 모든 정보를 필히 입력해 주시기 바랍니다.
          </div>
          <div className='hospital-title-border' />
          <div className='info'>
            <div className='name'>이름</div>
            <div className='border'></div>
            <input />
          </div>
          <div className='info'>
            <div className='id'>아이디</div>
            <div className='border'></div>
            <input />
          </div>
          <div className='info'>
            <div className='pw'>비밀번호</div>
            <div className='border'></div>
          </div>
          <div className='info'>
            <div className='phone'>전화번호</div>
            <div className='border'></div>
          </div>
          <div className='info'>
            <div className='email'>이메일</div>
            <div className='border'></div>
          </div>
          <div className='account-title-border' />
          <button className='account-edit-btn'>수정하기</button>
        </div>
      </div>
    );
  }
};

export default LicensePage;
