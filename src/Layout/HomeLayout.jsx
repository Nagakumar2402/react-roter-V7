import { Outlet } from "react-router";
import { TitleManager, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <TitleManager />
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
