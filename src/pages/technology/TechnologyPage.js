import Footer from "../../components/Footer";
import "./TechnologyPage.css";
import MiddleNav from "../../components/MiddleNav";

function TechnologyPage() {
  return (
    <>
      <div className="bg-box">
        <div className="bg-contents">
          <h4>기술</h4>
          <div className="middle-nav-box">
            <MiddleNav />
          </div>
        </div>
      </div>
      <div className="technologypage-box">
        <div className="s1-sb-algo">
          <h4>소프트웨어 기반 안구추적 알고리즘</h4>
          <p>
            뉴로이어즈는 귀의 평형기관 혹은 중추평형신경계의 이상은 안구움직임의
            이상을 유발하며 임상에서는 안구움직임의 관찰을 통해 어지럼의 원인을
            추정할 수 있습니다. 저희는 이 기술을 평형기능의 진단과 측정에
            사용하고자 하였습니다.
            <div></div>
            <div></div>
            <div></div>
            <h5>어지럼의 원인</h5>
            <p>
              우리는 안구추적 알고리즘을 평형기능의 진단과 측정에 사용하고자
              하였습니다.어지럼은 양쪽 귀의 평형기관이나 혹은중추신경계의 이상에
              의해 발생합니다. 어지럼은 전 세계 인구의 20-50% 가 경험하는 가장
              흔한 병적 증상 중 하나이며 특히 고령화 사회가 가속되고 있는 현재
              시점에서 노인의 낙상 위험률을 증가시키는 가장 흔한 원인 증상 중
              하나입니다.
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TechnologyPage;
