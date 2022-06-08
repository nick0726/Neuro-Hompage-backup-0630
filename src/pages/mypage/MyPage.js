// import { Outlet } from "react-router-dom";
import AccountPage from "./AccountPage";
import SideNav from "../../components/SideNav";
import "./MyPage.css";
import Hospital from "./HospitalInfoPage";

const MyPage = () => {
  return (
    <>
      <div className='box'>
        <SideNav />
        <AccountPage />
        <Hospital />
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
};
export default MyPage;
