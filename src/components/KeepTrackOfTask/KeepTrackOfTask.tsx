import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import myVideo from "../../Videos/user_Dashbaord.mp4";
import Video from "../Video/Video";
import Scribfolio from "../Scribfolio/Scribfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const KeepTrackOfTask = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col  hidden justify-between animate-pulse">
        <div data-aos="fade-right">
          <Scribfolio />
        </div>
        <div data-aos="fade-left">
          <Arrow />
        </div>
      </div>
      <div className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse gap-10 h-[700px] lg:h-[500px]">
        <div className="lg:basis-1/2 basis-full">
          <Texts
            data-aos="fade-left"
            styledTitle="Dashboard"
            headerText="User"
            peragraphText="Simplify your life with our user-friendly dashboard. Create, prioritize, and track your tasks hassle-free."
          />
        </div>
        <div data-aos="fade-right" className="lg:basis-1/2 basis-full">
          <Video VideoSource={myVideo} />
        </div>
      </div>
    </div>
  );
};

export default KeepTrackOfTask;
