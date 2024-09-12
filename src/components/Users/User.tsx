import UserCompo from "../UserCompo/UserCompo"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const User = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="flip-left" className=" grid lg:grid-cols-4 grid-cols-2 justify-between gap-10 items-center p-10 rounded-xl bg-gray-950 shadow-2xl group transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 hover:bg-gradient-to-r from-red-600 to-purple-900 ">
      <UserCompo title="100+" paragraph="Countries"/>
      <UserCompo title="10M+" paragraph="User"/>
      <UserCompo title="99%" paragraph="Efficiency"/>
      <UserCompo title="4.7" paragraph="Rating"/>
    </div>
  )
}

export default User
