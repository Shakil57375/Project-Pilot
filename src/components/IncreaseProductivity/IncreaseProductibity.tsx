import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import myVideo from "../../Videos/stay-prodactive_ZMldEScR.mp4";
import Video from "../Video/Video";
import Scribfolio from "../Scribfolio/Scribfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const IncreaseProductivity = () => {
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
      <div className="flex items-center justify-center">
        <Texts
          headerText="Increase  "
          styledTitle="Productivity"
          peragraphText=""
        />
      </div>
      <div className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse gap-10 h-[700px] lg:h-[500px]">
        <div data-aos="fade-left" className="lg:basis-1/2 basis-full">
          <Texts
            styledTitle="Productivity"
            headerText=""
            peragraphText="Unleash your full potential and boost your productivity. Explore tools, tips, and strategies to maximize your efficiency, accomplish more, and achieve your goals."
          />
        </div>
        <div data-aos="fade-right" className="lg:basis-1/2 basis-full">
          <Video VideoSource={myVideo} />
        </div>
      </div>
    </div>
  );
};

export default IncreaseProductivity;
