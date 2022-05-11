import "./Header.css";

const Header = () => {
  return (
    <>
      <div className='header'>
        <h1>NeuroEars</h1>
        <div className='menu-nav'>
          <ul>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Solutions</p>
            </li>
            <li>
              <p>Download</p>
            </li>
            <li>
              <p>Contact us</p>
            </li>
            <li>
              <p>My Page</p>
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
