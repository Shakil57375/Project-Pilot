import Video from "../Video/Video";
import featureVideo from "../../Videos/PROJECT MANAGEMENT Animation.mp4";
import Texts from "../Texts/Texts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FeaturedVideo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-center items-center">
            <Texts headerText="What is " styledTitle="Project Management?" peragraphText=""/>
        </div>
      <Video VideoSource={featureVideo} />
    </div>
  );
};

export default FeaturedVideo;
