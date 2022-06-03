import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <p>MyPage</p>
      마이페이지
      <Outlet></Outlet>
    </>
  );
};
export default MyPage;
