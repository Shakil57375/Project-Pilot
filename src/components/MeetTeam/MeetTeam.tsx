import ProfileCard from "../ProfileCard/ProfileCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MeetTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center gap-40">
      <div data-aos="fade-right">
        <ProfileCard
          facebookLink="https://www.facebook.com/profile.php?id=100056182026221&_rdc=1&_rdr"
          githubLink="https://github.com/Shakil57375"
          linkedInLink="https://www.linkedin.com/in/shakil-hossian-757817263/"
          portfolioLink="https://64a01a5550d4bf24857df74a--lucky-cucurucho-81c61e.netlify.app/?fbclid=IwAR2klP83RE9tqHl1xEktuuP300nwLifq4X4meq_CoMzdP6hVQjyIQEZfqAk"
          imageSrc="https://i.ibb.co/YyYmj91/shakil-img.jpg"
          styledTitle=" Shakil Hossain"
          headerTitle=" Front end developer "
        />
      </div>
      <div data-aos="fade-left">
        <ProfileCard
          facebookLink="https://www.facebook.com/suhanurrohoman.sumon"
          githubLink="https://github.com/Suhanur-Rohoman-Sumon-github"
          linkedInLink="https://www.linkedin.com/in/suhanur-rohoman-sumon-5b5266237/"
          portfolioLink="https://celebrated-puffpuff-96980d.netlify.app/?fbclid=IwAR2BTcl43fU39Ld85Z6kIFnAs99ggxU95McuFCNRssyU75vlU6kDuHjWUDg"
          imageSrc="https://i.ibb.co/NTVvZqB/sumon-img.png"
          styledTitle="Suhanur Rohoman"
          headerTitle=" Backend developer"
        />
      </div>
    </div>
  );
};

export default MeetTeam;
