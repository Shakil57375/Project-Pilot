import Texts from "../Texts/Texts";
import Lottie from "lottie-react";
import features from "../../Assests/Lottie_Animation_file/HDtxYEF3cl.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FeatureBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:gap-10 gap-40">
        <div data-aos="fade-right" className="basis-1/2 lg:basis-full">
          <Texts
            headerText="Give work a"
            styledTitle="new look"
            peragraphText="See your projects from every angle with Board, Timeline, Table, Calendar, Dashboard, Map and Workspace views that will bring a fresh perspective to the task at hand.
            Boards are available to all users. Additional views require a Premium or Enterprise account."
          />
        </div>
        <div  className="basis-1/2 lg:basis-full">
          <div data-aos="fade-left" className="w-full h-56  sm:h-96">
            <Lottie className="h-[450px]" animationData={features} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
