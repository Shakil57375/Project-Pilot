import Arrow from "../Arrow/Arrow";
import Scribfolio from "../Scribfolio/Scribfolio";
import Texts from "../Texts/Texts";
import Video from "../Video/Video";
import makeDocuments from "../../Videos/watermarked_preview.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MakeDocuments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className="lg:flex lg:flex-row-reverse flex-col  hidden justify-between animate-pulse">
        <div data-aos="fade-right">
          <Scribfolio />
        </div>
        <div data-aos="fade-left" className="transform rotate-180">
          <Arrow />
        </div>
      </div>

      <div className="flex justify-between items-center lg:flex-row flex-col gap-10 h-[700px] lg:h-[500px]">
        <div data-aos="fade-right" className="lg:basis-1/2 basis-full">
          <Texts
            styledTitle="Documents"
            headerText="Make your"
            peragraphText="Keep records of important project documents, decisions, and communications. This can be done using a shared drive, project management software, or even a physical folder."
          />
        </div>
        <div data-aos="fade-left" className="lg:basis-1/2 basis-full">
          <Video VideoSource={makeDocuments} />
        </div>
      </div>
    </div>
  );
};

export default MakeDocuments;
