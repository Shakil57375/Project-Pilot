/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import ActiveLink from "../ActiveLink/ActiveLink.tsx";
import Button from "../../components/Button/Button.tsx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 flex justify-between w-full  items-center lg:px-28 px-4 lg:py-6  py-4 bg-black z-40">
      <div className="text-2xl lg:text-3xl text-white font-serif order-2 lg:order-1 font-bold cursor-pointer">
        <Link to="/" className="sm:m-0 sm:p-0  ">
          <img src="https://i.ibb.co/qmhLHRj/vite.png" className="h-12 w-16" alt="" />
        </Link>
      </div>
      <div className="flex justify-between order-1 lg:order-2 items-center flex-row-reverse lg:flex-row">
        <div>
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <span>
              {open === true ? (
                <AiOutlineClose className="h-6  w-6 text-white" />
              ) : (
                <FaBars className="h-6  w-6 text-white" />
              )}
            </span>
          </div>
          <div
            className={`links flex  text-white absolute lg:static duration-500 lg:flex-row flex-col justify-center text-lg ${
              open
                ? "block left-20 top-14 -ml-16 !z-50 lg:bg-inherit bg-gradient-to-r from-red-600 to-purple-900 w-fit transition-all duration-500  text-white shadow-2xl py-5 gap-2 pl-8 rounded-lg"
                : "hidden lg:block"
            }`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/aboutUs">About Us</ActiveLink>
            <ActiveLink to="/pricing">Pricing</ActiveLink>
            <ActiveLink to="/features">Features</ActiveLink>
          </div>
        </div>
        <div></div>
      </div>
      <div className="order-3 lg:order-3">
        <div className="cursor-pointer ">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
