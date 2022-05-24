import './TechnologyPage.css';

function TechnologyPage() {
  return (
    <>
      <div className='body'>
        <div className='sub_header'>
          <div className='sub_title'>
            <h2>기술</h2>
            <h6>Technology</h6>
          </div>
          <div className='sub_menu'>
            <ul className='menu_list'>
              <li>소프트웨어 기반 안구추적 알고리즘</li>
              <li>가상현실(VR)</li>
              <li>인공지능(AI)</li>
              <li>개별 주파수 동조 뇌자극 알고리즘</li>
            </ul>
          </div>
        </div>

        <div className='content'>
          <div className='eye_tracking'>
            <div className='title'>
              <h2>소프트웨어 기반 안구추적 알고리즘</h2>
            </div>
            <div className='summary'>
              뉴로이어즈는 귀의 평형기관 혹은 중추평형신경계의 이상은 안구움직임의 이상을 유발하며, 임상에서는 안구움직임의 관찰을 통해 어지럼의 원인을 추정할 수 있습니다. 
              저희는 이 기술을 평형기능의 진단과 측정에 사용하고자 하였습니다.
            </div>
            <div>
              우리는 안구추적 알고리즘을 평형기능의 진단과 측정에 사용하고자 하였습니다. 
              어지럼은 양쪽 귀의 평형기관이나 혹은 중추신경계의 이상에 의해 발생합니다. 
              어지럼은 전 세계 인구의 20-50% 가 경험하는 가장 흔한 병적 증상 중 하나이며, 특히 고령화 사회가 가속되고 있는 현재 시점에서 노인의 낙상 위험률을 증가시키는 가장 흔한 원인 증상 중 하나입니다.
            </div>
            <div>
              귀의 평형기관 혹은 중추평형신경계의 이상은 안구 움직임의 이상을 유발하며, 임상에서는 안구 움직임의 관찰을 통해 어지럼의 원인을 추정할 수 있습니다. 
              특히 소뇌 경색 등 중추신경계의 이상에서 오는 어지럼은 귀의 이상에서 오는 어지럼의 증상과 유사하기 때문에 초기에 더욱 정확한 진단이 필요하며 안구 움직임의 검사는 응급으로 촬영하는 확산 강조 자기공명영상검사 (Diffusion MRI)보다 더 예민한 진단 능력으로 소뇌경색 등을 진단할 수 있습니다. 
              기존의 평형기능을 보는 안구운동 검사는 대부분이 수입품이며, 국내에서도 극히 제한된 몇 개의 기업만이 안구운동 검사장치를 제조하고 있습니다. 
              그러나 모두 하드웨어 기반으로 구성되어 고가의 가격에 전문적인 해석 능력이 필요하여 일반적인 사용이 어렵습니다.
            </div>
            <div>
              뉴로이어즈는 실제 임상에서의 이러한 문제를 해결하기 위해 기존의 상용화된 가상현실 디바이스(HMD)의 안구추적 기능을 활용하여 검사할 수 있는 평형기능 측정 소프트웨어를 세계 최초로 개발하여 평형기능 분석 소프트웨어 GMP와 식약처 2등급 소프트웨어 의료기기로 인증 받았습니다. 
              우리의 이런 노력은 더욱 많은 전문 의사들이 안구 운동검사기를 활용하여 어지럼 진단을 하게 하고 다른 불필요한 검사에 의해 발생할 수 있는 진단의 지연에 의한 환자들의 삶의 질 저하뿐만 아니라 이로 인한 사회적 비용 지출의 최소화라는 공익적 목표도 달성하고자 하였습니다. 
              우리의 이런 노력은 가장 흔하지만 간과되고 있는 어지럼과 이명을 진단하고 치료하기 위한 가상현실과 인공지능 그리고 뇌 자극 알고리즘의 개발로 이어집니다.
            </div>
          </div>
          
          <div className='vr'>
            <div className='title'>
              <h2>가상현실(VR)</h2>
            </div>
            <div className='summary'>
              가상현실은 일반적으로 알려진대로 컴퓨터 기술을 통해 현실과 유사하게 시뮬레이션 된 가상의 공간을 구축하여 사용자에게 실제와 같은 경험을 제공하는 기술입니다. 
              사용자는 HMD(Head Mount Display)와 같은 디바이스를 통해 가상의 공간에서 주변의 상황 및 환경과 상호작용하며, 마치 실제 공간에 놓여져 있다는 체험을 하게 됩니다.
            </div>
            <div>
              기존의 어지럼 검사실은 안구의 움직임을 확인하기 위해 암실이라는 공간과 시각 변화를 유발하게 하기 위해 사용되는 표적을 보여주기 위한 별도의 영사기 같은 기기들이 필요하였습니다. 
              따라서 어지럼 검사실을 구축하기 위해서 암실과 부속품이 설치되는 공간이 추가적으로 필요하게 됩니다.
            </div>
            <div>
              그러나 가상현실은 헤드셋의 착용만으로 암실의 구현이 가능하고 가상현실 안에서 시각 움직임 유발을 위해 가상의 표적을 표현할 수 있어서 기존에 안구운동 검사를 위해 필요했던 물리적, 공간적 제약을 최소화할 수 있습니다. 
              또한 가상현실 안에서 안구 및 두위추적을 이용한 어지럼 재활운동은 특히 우리 회사만의 기술을 사용해 기존의 단순한 운동을 게임화 하였으며, 이는 환자의 적극적인 참여를 유도하고 이를 통해 재활 효과의 증진을 기대할 수 있습니다.
            </div>
          </div>

          <div className='ai'>
            <div className='title'>
              <h2>인공지능(AI)</h2>
            </div>
            <div className='summary'>
              인공지능은 사람의 지능을 기계가 대신할 수 있도록 데이터를 이용하여 기계를 학습시키는 기술 분야 중 하나입니다. 
              과거의 데이터에 존재하는 패턴을 학습하고 새로운 입력 내용에 대해 식별, 예측을 수행하거나 기존의 데이터에 존재하는 잠재적 공간 인식을 통해 입력과 유사한 실제 같은 가짜 데이터를 창조하여 주어진 과제를 수행합니다.
            </div>
            <div>
              우리는 5년 전부터 한림의대에 구축된 9만 개의 안구운동데이터 세트로부터 학습된 딥러닝 알고리즘의 사용권을 이전 받아 안구운동을 분류하여 자동으로 진단적 정보를 제공하는 프로그램을 개발 완료한 바 있습니다. 
              9만개의 안구운동 데이터베이스는 국내 최초로 만들어진 데이터 세트이며 국내 독보적인 데이터베이스입니다. 
            </div>
            <div className='bottom'>
              또한 한국지능정보사회연구원에서 주관하는 인공지능학습데이터 구축사업에 선정되어 국내 최고의 상급병원으로 구성된 10개의 의료기관과 컨소시엄을 구성하여 어지럼검사의 데이터구축사업을 진행합니다. 
              뉴로이어즈는 이러한 사업의 중심 기업으로서 비디오 기반의 안구분류를 하는 인공지능 모델을 개발 완료하여 스마트폰을 포함하는 모든 기기에서 안진의 식별, 어지럼의 진단 판독이 가능하도록 노력하고 있습니다.
            </div>
          </div>

          <div className='brain_stimulation'>
            <div className='title'>
              <h2>개별주파수 동조 뇌자극 알고리즘</h2>
            </div>
            <div className='summary'>
              우리는 기존에 연구중인 일반적 뇌자극 기술과 달리 원하는 영역에 환자의 개인별 뇌기능의 차이에 따른 뇌주파수와 연동되는 전류자극 알고리즘을 만들어 이를 현재 한림대학교 고려대학교 한국과학기술대학교와 공동으로 임상연구를 수행하고 있습니다.
            </div>
            <div>
              이명을 호소하는 환자들 대부분은 그러한 고주파수대의 청각저하가 대부분의 경우에 발견됩니다. 
              이러한 고주파수의 청각저하는 이명을 일으키는 근본원인이 되며 스트레스등의 주변 환경변화가 방아쇠역할을 하게되어 이명을 악화시키게 됩니다. 
              따라서 이명은 청각신경계와 이를 받아들이는 뇌의 고위 감각기능의 복합적인 문제로 발생하게 됩니다. 
              흥미로운 뇌과학적 연구는 우울증과 이명을 호소하는 환자들의 기능적 뇌영역의 일부분이 비슷하게 겹친다는사실을 발견하였고 이른바 뇌자극 기술이라고 하는 디지털 전자약을 개발하기 시작하였습니다.
            </div>
            <div className='bottom'>
              우리는 기존에 연구중인 일반적 뇌자극 기술과 달리 원하는 영역에 환자의 개인별 뇌기능의 차이에 따른 뇌주파수와 연동되는 전류자극 알고리즘을 만들어 이를 현재 한림대학교 고려대학교 한국과학기술대학교와 공동으로 임상연구를 수행하고 있습니다. 
              이러한 뇌자극 기술은 최초의 개별 맞춤형 뇌자극 기술로 현재 전임상 시험에서 유효한 결과를 얻었고 대한 이비인후과 학회와 대한 이과학회 학술대회에 저희의 결과를 발표한 바 있습니다. 
              또한 관련 특허를 기반으로 이를 실용화하는 연구를 같이 수행하고 있습니다.
              이명 또한 난청과 연관되고 난청은 인지기능의 저하나 알츠하이머 같은 인지기능 장애를 가속화할 수 있는 질환이기 때문에 저희는 저희의 기술로 이명 뿐만 아니라 인지기능의 회복을 위한 개인별 뇌주파수 동조 자극 알고리즘을 개발할 수 있다고 생각하며 열심히 개발에 힘쓰고 있습니다. 
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default TechnologyPage;
