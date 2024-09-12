import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
const Main = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Outlet />
      <ScrollToTop/>
      <Footer />
    </div>
  );
};

export default Main;
