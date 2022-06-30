import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import naver from "../../../src/images/naver.png";
import facebook from "../../../src/images/facebook.png";
import email from "../../../src/images/email.png";
import Footer from "../../components/Footer";
import axios from "axios";

function LoginPage() {
  const [LoginOn, setLoginOn] = useState(true);
  // const [TimerOn, setTimerOn] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // async function loginUser(event) {
  //   event.preventDefault();
  //   const resopnse = await fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id,
  //       password,
  //     }),
  //   });
  //   const data = await resopnse.json();
  //   try {
  //     if (data.user) {
  //       localStorage.setItem("token", data.user);
  //       alert("Welcome! Login sucessful");
  //       navigate("/");
  //     } else {
  //       alert("Please check your username and password");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     console.log(data);
  //   }
  // }

  //로그인 부
  const checkUser = () => {
    if (email === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    // Request API.
    axios
      .post("http://localhost:1337/api/auth/local", {
        /*DB의 변수명으로 불러오는 부분, 변수명 다를 수 있음*/
        id: "id",
        password: "password",
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        /* Backend Part, DB에 로그인정보 데이터 저장 */
        localStorage.setItem("token", response.data.jwt);
        navigate("/");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  /* 위의 로그인 과정 후, 로그인이 성공적인지 검증 */
  useEffect(() => {
    // 로그인 성공적이면?, 로그인해서 사용자가 토큰이 있으면?
    if (localStorage.getItem("token")) {
      /* 로그인 하면 첫 랜딩페이지 이동 */
      navigate("/");
    }
  }, []);

  return (
    <>
      {LoginOn === true ? <Login /> : <FindAccount />}
      <Footer />
    </>
  );

  function Login() {
    return (
      <>
        <div className='login_container'>
          {/* <form onSubmit={loginUser}> */}
          <form>
            <div className='login_title'>
              <h1>로그인</h1>
              <p>뉴로이어즈에 가입하고 다양한 서비스를 이용해 보세요.</p>
            </div>
            <div className='login_box'>
              <div className='login_box_left'>
                <div className='account_box'>
                  <input
                    placeholder='ID'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type='text'
                    name='id'
                    id='Id'
                    autoComplete='off'
                    required
                  ></input>
                  <input
                    placeholder='PW'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    name='pw'
                    id='pw'
                    autoComplete='off'
                    required
                  ></input>
                </div>
                <div className='login_btn'>
                  <button
                    onClick={() => {
                      checkUser();
                      // navigate("/mypage");
                    }}
                  >
                    로그인
                  </button>
                </div>
                <div className='social_login'>
                  <img src={naver} alt={naver} />
                  <img src={facebook} alt={facebook} />
                  <img src={email} alt={email} />
                </div>
                <div className='login_option'>
                  <div className='auto_login'>
                    <input type='checkbox'></input>
                    자동로그인
                  </div>
                  <div className='save_login'>
                    <input type='checkbox'></input>
                    ID 저장
                  </div>
                </div>
              </div>
              <div className='login_box_right'>
                <div className='signup_box'>
                  <h1>아직 회원이 아니신가요?</h1>
                  <p>뉴로이어즈에 가입하고 다양한 서비스를 이용해 보세요.</p>
                </div>
                <div className='signup_btn'>
                  <button
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    회원가입
                  </button>
                </div>
                <div className='signup_guide'>
                  <b>
                    <p
                      onClick={() => {
                        navigate("/qna");
                      }}
                    >
                      도움이 필요하신가요?
                    </p>
                  </b>
                </div>
                <div className='signup_guide_p2'>
                  <p
                    onClick={() => {
                      setLoginOn(false);
                    }}
                  >
                    아이디/비밀번호 찾기
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

  function FindAccount() {
    return (
      <>
        <div className='login_container'>
          <div className='login_title'>
            <h1>아이디 / 비밀번호 찾기</h1>
            <p>계정 정보를 확인할 수 있습니다.</p>
          </div>
          <div className='find_account_box'>
            <div className='find_ID'>
              <div className='find_ID_title'>
                <h5>아이디 찾기</h5>
                <b>
                  <p>가입시 입력한 정보를 기입해 주세요</p>
                </b>
              </div>
              <input id='name' placeholder='본명을 입력하세요'></input>
              <div className='certificate_form'>
                <input placeholder='휴대폰 번호'></input>
                <button id='phone_certify'>인증번호 전송</button>
              </div>
              <button id='confirm_id'>아이디 확인</button>
            </div>
            <div className='find_PW'>
              <div className='find_PW_title'>
                <h5>비밀번호 찾기</h5>
                <b>
                  <p>가입시 입력한 정보를 기입해주세요.</p>
                </b>
              </div>
              <input id='id' placeholder='ID 아이디를 입력하세요'></input>
              <div className='certificate_form'>
                <input placeholder='E-Mail 이메일 주소'></input>
                <button>이메일 인증</button>
              </div>
              <button id='confirm_PW'>비밀번호 확인</button>
            </div>
          </div>
          <div className='bottom-menu'>
            <p onClick={() => setLoginOn(true)}>로그인 화면으로</p>
            <p onClick={() => navigate("/signup")}>회원가입</p>
          </div>
        </div>
      </>
    );
  }

  function Timer() {
    return (
      <>
        <div>타이머</div>
      </>
    );
  }

  function ConfirmID() {
    return (
      <>
        <div className='found-id'>
          <input type='raido'></input>확인된 아이디
        </div>
      </>
    );
  }
}

export default LoginPage;
