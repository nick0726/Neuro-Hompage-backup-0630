import "./AccountPage.css";
import { useState } from "react";

const AccountPage = () => {
  const [input, inputUpdate] = useState("");
  const [edit, editOn] = useState(false);
  return (
    <>
      <div className='account-box'>
        <div className='account-title'>
          <h1>내 정보</h1>
          <div>
            고객님께서 입력하신 내 정보 입니다.
            <br />
            원할한 서비스를 위하여 모든 정보를 필히 입력해 주시기 바랍니다.
          </div>
          <div className='account-title-border' />
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
            {edit === true ? (
              <ChangePW />
            ) : (
              <input
                onChange={(e) => {
                  return inputUpdate(e.target.value);
                }}
              />
            )}
          </div>
          <div className='info'>
            <div className='phone'>전화번호</div>
            <div className='border'></div>
            {edit === true ? (
              <PhoneCertify />
            ) : (
              <input
                onChange={(e) => {
                  return inputUpdate(e.target.value);
                }}
              />
            )}
          </div>
          <div className='info'>
            <div className='email'>이메일</div>
            <div className='border'></div>
            {edit === true ? (
              <EmailCertify />
            ) : (
              <input
                onChange={(e) => {
                  return inputUpdate(e.target.value);
                }}
              />
            )}
          </div>
          <div className='account-title-border' />
          {edit === true ? (
            <button className='account-cancle-btn'>취소</button>
          ) : null}
          <button
            className='account-edit-btn'
            onClick={() => {
              // let copy = [...input];
              if (!input) {
                alert("비밀번호를 입력하세요");
              } else {
                editOn(!edit);
              }
            }}
          >
            수정하기
          </button>
        </div>
      </div>
    </>
  );

  function ChangePW() {
    return <button className='changePW'>비밀번호 변경하기</button>;
  }

  function PhoneCertify() {
    return (
      <>
        {/* <div className='phone-edit-input'> */}
        <input />
        <button>휴대폰 인증</button>
        {/* </div> */}
      </>
    );
  }

  function EmailCertify() {
    return (
      <>
        <input className='email-edit-input'></input>
        <button>이메일 인증</button>
      </>
    );
  }
};

export default AccountPage;
