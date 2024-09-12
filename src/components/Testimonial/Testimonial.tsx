import React, { useState } from "react";
import "./Testimonial.css";
import Texts from "../Texts/Texts";
import Scribfolio from "../Scribfolio/Scribfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const imageLinks = [
  {
    name: "Mohammad",
    feedback: "Great app, very useful!",
    profession: "Web Developer",
    image: "https://i.ibb.co/YyPvkzZ/user-1.jpg",
  },
  {
    name: "Ahmed",
    feedback: "Saves me time daily.",
    profession: "Developer",
    image: "https://i.ibb.co/Y239YyZ/user-2.jpg",
  },
  {
    name: "Rahman",
    feedback: "Love the design!",
    profession: "Web Developer",
    image: "https://i.ibb.co/q7LDHHP/user-3.jpg",
  },
  {
    name: "Hossain",
    feedback: "User-friendly and efficient.",
    profession: "Graphics Designer",
    image: "https://i.ibb.co/54Mz9YK/user-4.jpg",
  },
  {
    name: "Rahim",
    feedback: "Organizes my tasks well.",
    profession: "App Developer",
    image: "https://i.ibb.co/bNszv0C/user-5.jpg",
  },
  {
    name: "Ali",
    feedback: "Helps me stay on track.",
    profession: "Data Analytics",
    image: "https://i.ibb.co/rtNXXrP/user-6.jpg",
  },
  {
    name: "Ibrahim",
    feedback: "Easy to use and customize.",
    profession: "Web Designer",
    image: "https://i.ibb.co/Cm4R2rK/user-7.jpg",
  },
  {
    name: "Salah",
    feedback: "Boosts my productivity.",
    profession: "Web Developer",
    image: "https://i.ibb.co/ZTmBHyD/user-8.jpg",
  },
];

const Testimonial: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>("content1");

  const handleMouseOver = (contentId: string) => {
    setActiveContent(contentId);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="lg:flex hidden items-center justify-center flex-col mt-10 relative "
    >
      <Texts headerText="What They " styledTitle="Say?" peragraphText="" />
      <div className="rounded_gradient_bg_left rounded-br-full bg-pink-500 absolute top-20 left-0 w-96 h-96 hidden lg:block "></div>
      <div className="container-1 h-[600px] lg:w-[600px] w-[350px]  relative mt-20">
        <div data-aos="fade-right" className="absolute top-0 left-[600px] lg:block hidden">
          <Scribfolio />
        </div>
        <div data-aos="fade-left" className="absolute top-60 right-[600px] lg:block hidden">
          <Scribfolio />
        </div>
        <div className="icon">
          {imageLinks.map((imageUrl, index) => (
            <div
              className={`imgBx ${
                activeContent === `content${index + 1}` ? "active" : ""
              }`}
              style={{ "--i": index + 1 } as React.CSSProperties} // Type assertion here
              data-id={`content${index + 1}`}
              onMouseOver={() => handleMouseOver(`content${index + 1}`)}
              key={`imgBx${index}`}
            >
              <img src={imageUrl.image} alt="" />
            </div>
          ))}
        </div>
        <div className="content ">
          {imageLinks.map((imageUrl, index) => (
            <div
              className={`contentBx !no-underline !border-none  ${
                activeContent === `content${index + 1}` ? "active" : ""
              }`}
              id={`content${index + 1}`}
              key={`contentBx${index}`}
            >
              <div className="card-1">
                <div>
                  <img
                    src={imageUrl.image}
                    className="w-24 h-24 rounded-full img"
                    alt=""
                  />
                </div>
                <div className=" mt-5">
                  <div className="bg-gray-950  p-5 rounded-lg mt-5 flex items-center justify-center flex-col">
                    <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#fcff2f] to-[#FF56F6] font-bold text-2xl hover:from-[#FF56F6] hover:to-[#f9ff40] !border-none text_title ">
                      {imageUrl.name}
                    </span>
                    <p>{imageUrl.profession}</p>
                    <p className="text-white text-base font-normal no-underline">
                      {imageUrl.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
