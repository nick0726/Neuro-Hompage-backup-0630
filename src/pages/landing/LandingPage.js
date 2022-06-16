/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import ReactFullpage from "@fullpage/react-fullpage";
import mouse from "../../images/mouse.png";
import s1_background from "../../images/Mainpage_background_2.png";
import landing_bg_3 from "../../images/landing-Main-3.jpg";
import report1 from "../../images/Mainpage_background_4.jpg";
import Footer from "../../components/Footer";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";
import news from "../../data/news";
import Barcode from "../../components/Barcode";

const LandingPage = ({ landingOn, setLandingOn }) => {
  const navigate = useNavigate();

  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"F9KG8-XM0I7-7I1LI-VUO8J-TYTKM"}
        scrollingSpeed={800} /* Options here */
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              {/* FullPage 작동 구현을 위한 ReactFullpage.Wrapper */}
              <ReactFullpage.Wrapper>
                {/* 첫번쨰 화면: NeuroEars */}
                <div className='section s0'>
                  <div className='s0_main_container'>
                    <div className='s0_main_container_content'>
                      <div className='s0_mainpage_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>측정 진단 치료</h4>
                        <h4>소프트웨어 개발 전문기업</h4>
                        <div className='s0_mainpage_btn'>
                          <button
                            onClick={() => {
                              navigate("/productquery");
                              setLandingOn(false);
                            }}
                          >
                            문의하기
                          </button>
                        </div>
                        <div className='s0_mainpage_mouse'>
                          <img src={mouse} alt={mouse} />
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
                            <button
                              onClick={() => {
                                navigate("/CompanyPage");
                              }}
                            >
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='s1_mainpage_img'></div> */}
                    <img
                      className='s1_mainpage_img'
                      src={s1_background}
                      alt={s1_background}
                    />
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
                            <button
                              onClick={() => {
                                navigate("/technology");
                              }}
                            >
                              View More
                            </button>
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
                          <img src={report1} alt={report1} />
                          <div className='s3_mainpage_news_content_A'>
                            <h1>{news[0].title}</h1>
                            <p>{news[0].content}</p>
                          </div>
                        </div>
                        <div className='s3_mainpage_news_B'>
                          <img src={report1} />
                          <div className='s3_mainpage_news_content_B'>
                            <h1>{news[1].title}</h1>
                            <p>{news[1].content}</p>
                          </div>
                        </div>
                        <div className='s3_mainpage_news_C'>
                          <img src={report1} />
                          <div className='s3_mainpage_news_content_C'>
                            <h1>{news[2].title}</h1>
                            <p>{news[2].content}</p>
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
                      <div className='s4_mainpage_patent'>
                        <h1>
                          보유기술 및 특허
                          <span>
                            <img src={leftArrow} />
                            <img src={rightArrow} />
                          </span>
                        </h1>
                        <div className='s4_mainpage_patent_container'>
                          <div className='s4_mainpage_patent_container_box1'>
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                          <div className='s4_mainpage_patent_container_box2'>
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                        </div>
                      </div>
                      <div className='s4_mainpage_patent'>
                        <h1>
                          연구 및 논문자료
                          <span>
                            <img src={leftArrow} />
                            <img src={rightArrow} />
                          </span>
                        </h1>
                        <div className='s4_mainpage_patent_container'>
                          <div className='s4_mainpage_patent_container_box1'>
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                          <div className='s4_mainpage_patent_container_box2'>
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='s4_mainpage_contactus'>
                      <h1>Contact Us</h1>
                      <div className='s4_mainpage_btn'>
                        <button
                          onClick={() => {
                            navigate("/productquery");
                            setLandingOn(false);
                          }}
                        >
                          문의하기
                        </button>
                      </div>
                    </div>
                  </div>
                  <Footer landingOn={landingOn} />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      ></ReactFullpage>
    </>
  );
};

export default LandingPage;
