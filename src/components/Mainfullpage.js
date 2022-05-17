import Header from "./Header";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./Mainfullpage.css";

function Mainfullpage() {
  return (
    <>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <Header />
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
          </FullpageSection>
          <FullpageSection>
            <div className='main_container'>
              <div className='main_container_content'>
                <div className='mainpage_page1_title'>
                  <h1>Screen2</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className='main_container'>
              <div className='main_container_content'>
                <div className='mainpage_page1_title'>
                  <h1>Screen3</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className='main_container'>
              <div className='main_container_content'>
                <div className='mainpage_page1_title'>
                  <h1>Screen4</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className='main_container'>
              <div className='main_container_content'>
                <div className='mainpage_page1_title'>
                  <h1>Screen5</h1>
                </div>
              </div>
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default Mainfullpage;
