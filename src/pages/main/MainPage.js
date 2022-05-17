import React from "react";
import "./Mainpage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReactFullpage from "@fullpage/react-fullpage";

function MainPage() {
  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"SCRET"}
        scrollingSpeed={1000} /* Options here */
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <Header />
              <ReactFullpage.Wrapper>
                <div className='section s0'>
                  <div className='main_container'>
                    <div className='main_container_content'>
                      <div className='mainpage_page1_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>소프트웨어 개발</h4>
                        <h4>전문기업</h4>
                        <div className='mainpage_page1_subtitle'>
                          <h5>Software as Medical Device for</h5>
                          <h5>Vestibular function tests and rehabilitation</h5>
                          <div className='mainpage_page1_btn'>
                            <button>문의하기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='section s1'>
                  <div className='main_container'>
                    <div className='main_container_content'>
                      <div className='mainpage_page1_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>소프트웨어 개발</h4>
                        <h4>전문기업</h4>
                        <div className='mainpage_page1_subtitle'>
                          <h5>Software as Medical Device for</h5>
                          <h5>Vestibular function tests and rehabilitation</h5>
                          <div className='mainpage_page1_btn'>
                            <button>문의하기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='section s3'>
                  <div className='main_container'>
                    <div className='main_container_content'>
                      <div className='mainpage_page1_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>소프트웨어 개발</h4>
                        <h4>전문기업</h4>
                        <div className='mainpage_page1_subtitle'>
                          <h5>Software as Medical Device for</h5>
                          <h5>Vestibular function tests and rehabilitation</h5>
                          <div className='mainpage_page1_btn'>
                            <button>문의하기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='section s4'>
                  <div className='main_container'>
                    <div className='main_container_content'>
                      <div className='mainpage_page1_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>소프트웨어 개발</h4>
                        <h4>전문기업</h4>
                        <div className='mainpage_page1_subtitle'>
                          <h5>Software as Medical Device for</h5>
                          <h5>Vestibular function tests and rehabilitation</h5>
                          <div className='mainpage_page1_btn'>
                            <button>문의하기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='section s5'>
                  <div className='main_container'>
                    <div className='main_container_content'>
                      <div className='mainpage_page1_title'>
                        <h1>NeuroEars</h1>
                        <h4>평형기능</h4>
                        <h4>소프트웨어 개발</h4>
                        <h4>전문기업</h4>
                        <div className='mainpage_page1_subtitle'>
                          <h5>Software as Medical Device for</h5>
                          <h5>Vestibular function tests and rehabilitation</h5>
                          <div className='mainpage_page1_btn'>
                            <button>문의하기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ReactFullpage.Wrapper>
              <Footer />
            </>
          );
        }}
      ></ReactFullpage>
    </>
  );
}

export default MainPage;
