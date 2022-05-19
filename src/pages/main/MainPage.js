import React from "react";
import "./Mainpage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReactFullpage from "@fullpage/react-fullpage";
import s1_background from "../../images/Mainpage_background_2.png";
import report1 from "../../images/Mainpage_background_4.png";

function MainPage() {
  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"F9KG8-XM0I7-7I1LI-VUO8J-TYTKM"}
        scrollingSpeed={1000} /* Options here */
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              {/* FullPage 작동 구현을 위한 ReactFullpage.Wrapper */}
              <ReactFullpage.Wrapper>
                {/* 첫번쨰 화면: NeuroEars */}
                <div className='section s0'>
                  <Header />
                  <div className='s0_main_container'>
                    <div className='s0_main_container_content'>
                      <div className='s0_mainpage_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>측정 진단 치료</h4>
                        <h4>소프트웨어 개발 전문기업</h4>
                        <div className='s0_mainpage_btn'>
                          <button>문의하기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 두번쨰 화면 Company 페이지 */}
                <div className='section s1'>
                  <div className='s1_main_container'>
                    <div className='s1_main_container_content'>
                      <div className='s1_mainpage_title'>
                        <h1>Company</h1>
                        <div className='s1_mainpage_title_underline'></div>
                        <div className='s1_mainpage_content'>
                          <p>
                            뉴로이어즈(주)는 신경이과 전문의료진과 연구개발
                            <br />
                            전문가들이 모여 설립한 기업으로, 의학과 뇌공학계
                            <br />
                            와의 공동연구를 통해 어지럼과 이명을 쉽고 간단하
                            <br />게 진단하고 치료하는 방법을 찾기 위해
                            설립되었습
                            <br />
                            니다.
                          </p>
                          <div className='s1_mainpage_btn'>
                            <button>View More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img className='s1_mainpage_img' src={s1_background} />
                  </div>
                </div>

                {/* 세번째 화면: Technology 페이지 */}
                <div className='section s2'>
                  <div className='s2_main_container'>
                    <div className='s2_main_container_content'>
                      <div className='s2_mainpage_title'>
                        <h1>Technology</h1>
                        <div className='s2_mainpage_title_underline'></div>
                        <h2>개별 주파수 동조 뇌자극 알고리즘</h2>
                        <div className='s2_mainpage_content'>
                          <p>
                            뉴로이어즈(주)는 신경이과 전문의료진과 연구개발
                            <br />
                            전문가들이 모여 설립한 기업으로, 의학과 뇌공학계
                            <br />
                            와의 공동연구를 통해 어지럼과 이명을 쉽고 간단하
                            <br />게 진단하고 치료하는 방법을 찾기 위해
                            설립되었습
                            <br />
                            니다.
                          </p>
                          <div className='s2_mainpage_btn'>
                            <button>View More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 네번쨰 화면: 보도자료 페이지 */}
                <div className='section s3'>
                  <div className='s3_main_container'>
                    <div className='s3_main_container_content'>
                      <div className='s3_mainpage_title'>
                        <h1>보도자료</h1>
                      </div>
                      <div className='s3_mainpage_news'>
                        <div className='s3_mainpage_news_A'>
                          <img src={report1} />
                          <div className='s3_mainpage_news_content_A'>
                            <h1>
                              뉴로이어즈, BIO KOREA 2022서
                              <br /> 어지럼증 진단 소프트웨어 소개 나선다
                            </h1>
                            <p>
                              기존 상용화된 VR 장비를 활용하여 더 저렴하게
                              이용할 수 있는 의료 소프트웨어를 개발해 진단이
                              가능...
                            </p>
                          </div>
                        </div>
                        <div className='s3_mainpage_news_B'>
                          <img src={report1} />
                          <div className='s3_mainpage_news_content_B'>
                            <h1>
                              뉴로이어즈, BIO KOREA 2022서
                              <br /> 어지럼증 진단 소프트웨어 소개 나선다
                            </h1>
                            <p>
                              기존 상용화된 VR 장비를 활용하여 더 저렴하게
                              이용할 수 있는 의료 소프트웨어를 개발해 진단이
                              가능...
                            </p>
                          </div>
                        </div>
                        <div className='s3_mainpage_news_C'>
                          <img src={report1} />
                          <div className='s3_mainpage_news_content_C'>
                            <h1>
                              뉴로이어즈, BIO KOREA 2022서
                              <br /> 어지럼증 진단 소프트웨어 소개 나선다
                            </h1>
                            <p>
                              기존 상용화된 VR 장비를 활용하여 더 저렴하게
                              이용할 수 있는 의료 소프트웨어를 개발해 진단이
                              가능...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='s3_mainpage_btn'>
                        <button>View More</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 마지막 화면: 특허 및 기술페이지 & Footer */}
                <div className='section s4'>
                  <div className='s4_main_container'>
                    <div className='s4_main_container_content'>
                      <div className='s4_mainpage_title1'>
                        <div className='patent'>보유기술 및 특허</div>
                      </div>
                      <div className='s4_mainpage_title2'>
                        <div className='studies'>연구 및 논문자료</div>
                      </div>
                    </div>
                  </div>
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      ></ReactFullpage>
    </>
  );
}

export default MainPage;
