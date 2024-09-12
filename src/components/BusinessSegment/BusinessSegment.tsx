import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import { MdCastForEducation, MdEmojiEvents } from "react-icons/md";
import { FcSportsMode } from "react-icons/fc";
import { BiPlusMedical } from "react-icons/bi";
import Card from "../Cards/Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BusinessSegment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="">
      <div  data-aos="fade-left" className="lg:flex justify-end hidden">
        <Arrow />
      </div>
      <div className="flex items-center justify-center">
        <Texts
          headerText="project pilot has the ability to serve "
          styledTitle="any Business"
          peragraphText=""
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <Card
          icon={<FcSportsMode />}
          headerTitle=""
          description="Dive into the exhilarating world of sports, where passion, competition, and teamwork thrive. Explore a diverse range of sporting activities, from thrilling matches to the latest news, and get inspired to play, support, and celebrate the world of athletics."
          styledTitle="World Sports"
        />
        <Card
          icon={<MdCastForEducation />}
          headerTitle=""
          description="Open the door to endless possibilities through education. Access a world of knowledge, expand your horizons, and sharpen your skills to shape your future."
          styledTitle="Unlock Knowledge"
        />
        <Card
          icon={<BiPlusMedical />}
          headerTitle=""
          description="Prioritize your well-being with our comprehensive medical resources. Explore expert guidance, stay informed about your health, and make informed decisions for a healthier life."
          styledTitle="Medical Resources"
        />
        <Card
          icon={<MdEmojiEvents />}
          headerTitle=""
          description="Join us in recognizing and celebrating accomplishments of all sizes. From personal milestones to grand achievements, let's celebrate the journey of success together."
          styledTitle="Celebrating Achievements"
        />
      </div>
    </div>
  );
};

export default BusinessSegment;
