import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Sponsors: React.FC = () => {
  const sponsors = [
    "https://i.ibb.co/JRqyHMB/draftbit-removebg-preview.png",
    "https://i.ibb.co/qmBqFhT/Feedly-removebg-preview.png",
    "https://i.ibb.co/db4MYjN/gramerly-removebg-preview.png",
    "https://i.ibb.co/HBvs6PR/mapbox.png",
    "https://i.ibb.co/2yL7TYG/rppxycqxhpxv1hin3q78-removebg-preview.png",
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="space-y-10">
      <div className="text-5xl z-50 text-center space-y-2 bg-gradient-to-r text-transparent bg-clip-text from-[#fcff2f] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#f9ff40] mb-2">
        They Trust Us
      </div>
      <div
        data-aos="zoom-in-up"
        className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 "
      >
        {sponsors.map((sponsor) => (
          <div
            key={sponsor}
            className="bg-gray-900 z-30 shadow-lg p-5 rounded-full mt-5 hover:-translate-y-3 transition-all"
          >
            <img src={sponsor} alt="Sponsor" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
