import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';
import './Mainpage.css';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 10,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  // hideScrollBars: true,
  // enableArrowKeys: true
};

function MainPage() {
  return (
    <>
      <Fullpage {...fullPageOptions}>
        <FullpageNavigation />
        <FullPageSections>
          <Header />
          <FullpageSection>
            <div className="main_container">
              <div className="main_container_content">
                <div className="mainpage_page1_title">
                  <h1>NeuroEars</h1>
                  <h4>평형기능</h4>
                  <h4>소프트웨어 개발</h4>
                  <h4>전문기업</h4>
                  <div className="mainpage_page1_subtitle">
                    <h5>Software as Medical Device for</h5>
                    <h5>Vestibular function tests and rehabilitation</h5>
                    <div className="mainpage_page1_btn">
                      <button>문의하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className="main_container">
              <div className="main_container_content">
                <div className="mainpage_page1_title">
                  <h1>Screen2</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className="main_container">
              <div className="main_container_content">
                <div className="mainpage_page1_title">
                  <h1>Screen3</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className="main_container">
              <div className="main_container_content">
                <div className="mainpage_page1_title">
                  <h1>Screen4</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className="main_container">
              <div className="main_container_content">
                <div className="mainpage_page1_title">
                  <h1>Screen5</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
      <Footer />
    </>
  );
}

export default MainPage;
