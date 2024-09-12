import Texts from "../Texts/Texts";
import React, { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface CardProps {
  icon: ReactNode;
  styledTitle: string;
  headerTitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  headerTitle,
  styledTitle,
  description,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div
      data-aos="flip-left"
      className="flex lg:flex-row transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-start gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl hover:bg-gradient-to-r from-red-600 to-purple-900"
    >
      <div className="bg-pink-950 p-5 text-4xl rounded-full">{icon}</div>
      <div>
        <Texts
          styledTitle={styledTitle}
          peragraphText={description}
          headerText={headerTitle}
        />
      </div>
    </div>
  );
};

export default Card;
