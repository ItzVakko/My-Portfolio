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

  useEffect(() => {
    const scrollDiff = scrollY - prevScrollY;
    setRotateAngle((prevAngle) => prevAngle + scrollDiff * 0.07);
    setPrevScrollY(scrollY);
  }, [scrollY, prevScrollY]);

  return (
    <div className="w-full h-20 bg-customGray fixed top-0 left-0 z-50 border-b border-white border-solid">
      <div className="w-full h-full flex justify-between items-center">
        <div></div>

        <div className="w-28 h-28 transform -translate-y-10">
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

        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
