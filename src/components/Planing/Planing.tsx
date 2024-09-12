import Arrow from "../Arrow/Arrow";
import Scribfolio from "../Scribfolio/Scribfolio";
import Texts from "../Texts/Texts";
import Video from "../Video/Video";
import makePlan from "../../Videos/89090522.webm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Planing = () => {
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

      <div className="flex justify-between items-center lg:flex-row-reverse flex-col gap-10 h-[700px] lg:h-[500px]">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="lg:basis-1/2 basis-full"
        >
          <Texts
            styledTitle="and scheduling"
            headerText="Make Plan"
            peragraphText="Plan and schedule tasks, milestones, and deadlines to keep projects on track and ensure timely completion."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="lg:basis-1/2 basis-full"
        >
          <Video VideoSource={makePlan} />
        </div>
      </div>
    </div>
  );
};

export default Planing;
