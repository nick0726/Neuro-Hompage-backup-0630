import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <h1>NeuroEars</h1>
        </Link>
        <div className='menu-nav'>
          <ul>
            <li>
              <Link to='/about'>
                <p>회사소개</p>
              </Link>
            </li>
            <li>
              <Link to='/technology'>
                <p>기술</p>
              </Link>
            </li>
            <li>
              <Link to='products'>
                <p>제품</p>
              </Link>
            </li>
            <li>
              <Link to='development'>
                <p>연구개발</p>
              </Link>
            </li>
            <li>
              <Link to='support'>
                <p>지원 및 서비스</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='right-top-menu'>
          <div className='language'>Language</div>
          <div className='login-Btn'>
            <button>Login Btn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
