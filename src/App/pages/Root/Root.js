import { Outlet } from "react-router";
import { MainHeader } from "../../components";
const Root = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};
export default Root;
