import Texts from "../Texts/Texts";
import Lottie from "lottie-react";
import aboutUs from "../../Assests/Lottie_Animation_file/about-us.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutUsBanner = () => {
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
            headerText=""
            styledTitle="About Us"
            peragraphText="Welcome to project pilot, where we transform project management into a seamless and efficient process. Learn more about our journey, mission, and the team behind our platform."
          />
        </div>
        <div className="basis-1/2 lg:basis-full">
          <div data-aos="fade-left" className="w-full h-56  sm:h-96">
            <Lottie className="h-[450px]" animationData={aboutUs} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
