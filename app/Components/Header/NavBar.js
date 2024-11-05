"use client";

import progressCircleImage from "../../Assets/Images/settingsCircle.png";
import UseScrollPosition from "../CustomHooks/UseScrollPosition";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {
  const scrollY = UseScrollPosition();
  const [rotateAngle, setRotateAngle] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollDiff = scrollY - prevScrollY;
    setRotateAngle((prevAngle) => prevAngle + scrollDiff * 0.07);
    setPrevScrollY(scrollY);

    // Navbar will appear when user scroll down
    if (scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY, prevScrollY]);

  return (
    <motion.div
      className="w-full h-24 bg-customGray px-[140px] fixed top-0 left-0 z-50 border-b border-white border-solid"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 40 }}
    >
      <div className="w-full h-full flex justify-between items-center">
        <div className="max-w-[380px]">
          <ul
            id="nav-links"
            className="text-white flex gap-10 font-teko text-2xl"
          >
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Education</a>
            </li>
          </ul>
        </div>

        <div className="w-28 h-28 transform -translate-y-12">
          <motion.div
            animate={{ rotate: rotateAngle }}
            transition={{ type: "tween", duration: 0.5 }}
            className="w-full h-full origin-center"
          >
            <Image
              src={progressCircleImage}
              alt="ProgressCircle"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <div className="max-w-[380px]">
          <ul
            id="nav-links"
            className="text-white flex gap-10 font-teko text-2xl"
          >
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Github</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
