import React from "react";
import "./Main.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

function Main() {
  return (
    <>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
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

                <div className='main'>페이지2</div>
                <div className='main'>페이지3</div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <h1>Screen 2</h1>
          </FullpageSection>
          <FullpageSection>
            <h1>Screen 3</h1>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default Main;
