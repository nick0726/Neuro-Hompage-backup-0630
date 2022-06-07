import { Outlet } from "react-router-dom";
import AccountPage from "./AccountPage";
import SideNav from "../../components/SideNav";

const MyPage = () => {
  return (
    <>
      <Outlet></Outlet>
      <SideNav />
      <AccountPage />
    </>
  );
};
export default MyPage;
