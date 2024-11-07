"use client";

import { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { SiSass, SiMui } from "react-icons/si";

const icons = [
  <FaHtml5 size={40} />,
  <FaCss3 size={40} />,
  <FaJs size={40} />,
  <FaReact size={40} />,
  <RiNextjsFill size={47} />,
  <BiLogoRedux size={45} />,
  <RiTailwindCssFill size={40} />,
  <SiSass size={40} />,
  <SiMui size={40} />,
  <FaBootstrap size={40} />,
];

const SkillsCircle = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  const totalIcons = icons.length;
  const angleStep = 360 / totalIcons;
  const radius = "300%";

  const handleMouseEnter = () => setIsIconHovered(true);
  const handleMouseLeave = () => setIsIconHovered(false);

  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="relative w-96 h-96 border border-darkWhite rounded-full">
        <div
          id="circle-container"
          className={`absolute inset-0 flex justify-center items-center ${
            isIconHovered ? "paused" : ""
          }`}
        >
          {/* Loop through icons and position them dynamically */}
          {icons.map((icon, index) => {
            const angle = index * angleStep;
            const transformStyle = {
              transform: `rotate(${angle}deg) translateX(${radius}) rotate(-${angle}deg)`,
            };
            return (
              <div
                key={index}
                className="icon w-16 h-16 rounded-full bg-darkWhite flex justify-center items-center cursor-pointer absolute hover:bg-black hover:border hover:border-darkWhite custom-svg-hover"
                style={transformStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsCircle;
