import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="main-layout">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
