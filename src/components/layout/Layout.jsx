import { Outlet } from "react-router-dom";
import Navbar from "../../routes/Navbar/Navbar";
import Footer from "../../routes/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
