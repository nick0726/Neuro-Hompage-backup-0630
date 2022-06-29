import { useEffect, useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import "./SignupPage.css";
import warning from "../../images/06_signin/warning.svg";
import email_certi from "../../images/email_certi.jpg";
import phone_certi from "../../images/phone_certi.svg";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isTermsOn, setTermsOn] = useState(false);
  const [isFormsOn, setFormsOn] = useState(false);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  //   const postTest = () => {
  //     axios
  //       .post("https://reqres.in/api/register", {
  //         "email": "eve.holt@reqres.in",
  //         "password": "pistol",
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // }

  return (
    <>
      {isFormsOn === true ? (
        <Form
          navigate={navigate}
          isTermsOn={isTermsOn}
          setTermsOn={setTermsOn}
          setFormsOn={setFormsOn}
        />
      ) : (
        <Terms
          navigate={navigate}
          isTermsOn={isTermsOn}
          setTermsOn={setTermsOn}
          setFormsOn={setFormsOn}
        />
      )}
    </>
  );
};

function Terms(props) {
  return (
    <>
      <div className='full-box'>
        <div id='signup-middle-box' className='middle-box'>
          <h2>NeuroEars 회원가입</h2>
          <p>뉴로이어즈 서비스 이용을 위해 약관에 동의해 주세요.</p>
          <div id='signup-small-box' className='small-box'>
            <div className='signup-term-box'>
              <div className='signup-terms'>
                <div className='terms-1'>
                  <input type='checkbox' />
                  모든 약관 동의
                </div>
              </div>
              <div className='signup-terms'>
                <div className='terms-2'>
                  <h6>뉴로이어즈 회원 약관</h6>
                  <p>
                    <input type='checkbox' />
                    이용 약관동의 (필수)
                  </p>
                  <p>
                    <input type='checkbox' />
                    개인정보 수집, 이용 동의 (필수)
                  </p>
                </div>
              </div>
              <div className='signup-terms'>
                <div className='terms-3'>
                  <h6>광고성 정보 수신동의</h6>
                  <p>
                    <input type='checkbox' />
                    마케팅 정보 수신 동의 (선택)
                  </p>
                </div>
              </div>
              <div className='signup-terms'>
                <button
                  onClick={() => {
                    props.setFormsOn(true);
                  }}
                >
                  다음
                </button>
                <div id='terms-4'>
                  <p>이미 계정이 있나요?</p>
                  <b>
                    <p
                      onClick={() => {
                        props.navigate("/login");
                      }}
                    >
                      로그인 하기
                    </p>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Form(props) {
  const [isPhonecertiOn, setPhoneCertiOn] = useState(false);
  const [isEmailcertiOn, setEmailcertiOn] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    // Request API.
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        id: id,
        password: password,
        passwordRepeat: passwordRepeat,
        name: name,
        email: email,
        phone: phone,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <>
      <div className='full-box'>
        <div id='signup-middle-box' className='middle-box'>
          <h2>NeuroEars 회원가입</h2>
          <p>뉴로이어즈 서비스 이용을 위해 약관에 동의해 주세요.</p>
          <form action='/signup' method='POST'>
            <div id='signup-small-box' className='small-box'>
              <div className='signup-box'>
                <div className='signup-forms'>
                  <h6>아이디</h6>
                  <div className='forms-with-btn'>
                    <input
                      placeholder='아이디를 입력해 주세요.'
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      type='text'
                      name='id'
                      id='Id'
                      autoComplete='off'
                      required
                    ></input>
                    <button>중복확인</button>
                  </div>
                </div>
                <div className='signup-forms'>
                  <h6>비밀번호</h6>
                  <div className='forms-without-btn'>
                    <input
                      placeholder='비밀번호를 입력해 주세요.'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type='password'
                      name='pw'
                      id='pw'
                      autoComplete='off'
                      required
                    ></input>
                    <input
                      placeholder='비밀번호를 한번 더 입력해 주세요.'
                      value={passwordRepeat}
                      onChange={(e) => setPasswordRepeat(e.target.value)}
                      type='password'
                      name='passwordRepeat'
                      id='pwRepeat'
                      autoComplete='off'
                      required
                    ></input>
                    <p>
                      <img src={warning} alt={warning} /> 8자리 이상,
                      영문/숫자/특수문자 총 2가지 이상
                    </p>
                  </div>
                </div>

                <div className='signup-forms'>
                  <h6>이름</h6>
                  <div className='forms-without-btn'>
                    <input
                      placeholder='이름을 입력해 주세요.'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type='text'
                      name='name'
                      id='Name'
                      autoComplete='off'
                      required
                    ></input>
                  </div>
                </div>

                <div className='signup-forms'>
                  <div className='forms-2'></div>
                </div>
                <div className='signup-forms'>
                  <div className='forms-3'></div>
                </div>
                <div className='signup-forms'>
                  <h6>전화번호</h6>

                  {isPhonecertiOn === true ? (
                    <Certificate
                      isPhonecertiOn={isPhonecertiOn}
                      setPhoneCertiOn={setPhoneCertiOn}
                    />
                  ) : (
                    <div className='forms-with-btn'>
                      <input
                        placeholder='전화번호를 입력해 주세요.'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type='text'
                        name='phone'
                        id='Phone'
                        autoComplete='off'
                        required
                      ></input>
                      <button
                        id='phone-certificatoin'
                        onClick={() => setPhoneCertiOn(true)}
                      >
                        <img src={phone_certi} alt={phone_certi} />
                        휴대폰 인증
                      </button>
                    </div>
                  )}
                </div>
                <div className='signup-forms'>
                  <h6> 이메일</h6>

                  {isEmailcertiOn === true ? (
                    <Certificate
                      isEmailcertiOn={isEmailcertiOn}
                      setEmailcertiOn={setEmailcertiOn}
                    />
                  ) : (
                    <div className='forms-with-btn'>
                      <input
                        placeholder='이메일을 입력해 주세요.'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type='text'
                        name='email'
                        id='email'
                        autoComplete='off'
                        required
                      ></input>
                      <button
                        id='email-certificatoin'
                        onClick={() => setEmailcertiOn(true)}
                      >
                        <img src={email_certi} alt={email_certi} />
                        이메일 인증
                      </button>
                    </div>
                  )}
                </div>
                <div className='signup-forms'>
                  <button
                    id='signup-btn'
                    onClick={() => {
                      props.setFormsOn(true);
                    }}
                  >
                    회원가입 하기
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Certificate() {
  return (
    <>
      <div className='forms-with-btn'>
        <input placeholder='전화번호를 입력해 주세요.'></input>
        <button id='phone-certificatoin'>
          <img src={phone_certi} alt={phone_certi} />
          휴대폰 인증
        </button>
      </div>
      <div className='forms-with-btn'>
        <input placeholder='인증번호를 입력해 주세요.'></input>
        <button id='resend-certification'>인증번호 재전송</button>
      </div>
    </>
  );
}
export default SignupPage;
