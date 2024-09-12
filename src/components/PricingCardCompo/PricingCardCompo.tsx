import React, { ReactNode } from "react";
import Texts from "../Texts/Texts";
import { Tilt } from "react-tilt";
import "./PricingCardCompo.css";
interface PricingProps {
  icon: ReactNode;
  checkIcon: ReactNode;
  styledTitle: string;
  headerTitle: string;
  description: string;
  price: number;
  buttonText: string;
  facilitiesText1: string;
  facilitiesText2: string;
  facilitiesText3: string;
  facilitiesText4: string;
  facilitiesText5: string;
  facilitiesText6: string;
}
const PricingCardCompo: React.FC<PricingProps> = ({
  icon,
  checkIcon,
  price,
  headerTitle,
  styledTitle,
  description,
  facilitiesText1,
  facilitiesText2,
  facilitiesText3,
  facilitiesText4,
  facilitiesText5,
  facilitiesText6,
  buttonText,
}) => {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <Tilt options={defaultOptions}>
      <div className="flex  transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-center gap-5 px-10 py-6 shadow-2xl group rounded-2xl bg-gradient-to-r from-red-500 to-purple-700">
        <div className="bg-gradient-to-r from-red-600 to-purple-900 p-5 text-5xl rounded-full shadow-2xl">
          {icon}
        </div>
        <div>
          <Texts
            styledTitle={styledTitle}
            peragraphText={description}
            headerText={headerTitle}
          />
        </div>
        <div>
          <button className="priceButton">{buttonText}</button>
        </div>
        <p className="text-5xl font-bold">{price} $</p>
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center gap-2">
            <div className=" text-white text-xl ">{checkIcon}</div>
            <div>{facilitiesText1}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" text-white text-xl ">{checkIcon}</div>
            <div>{facilitiesText2}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" text-white text-xl ">{checkIcon}</div>
            <div>{facilitiesText3}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" text-white text-xl ">{checkIcon}</div>
            <div>{facilitiesText4}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" text-white text-xl ">{checkIcon}</div>
            <div>{facilitiesText5}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" text-white text-xl ">{checkIcon}</div>
            <div>{facilitiesText6}</div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default PricingCardCompo;
