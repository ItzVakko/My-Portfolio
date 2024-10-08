"use client";

import progressCircleImage from "../../Assets/Images/settingsCircle.png";
import UseScrollPosition from "../CustomHooks/UseScrollPosition";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {
  const scrollY = UseScrollPosition(); // Get the scroll position from the custom hook
  const [rotateAngle, setRotateAngle] = useState(0); // State to keep track of the rotation angle

  useEffect(() => {
    // Update the rotation angle based on the scroll position
    setRotateAngle((prevAngle) => {
      // Determine the new angle based on scroll direction
      // If scrolling down, increase the angle; if scrolling up, decrease it
      return prevAngle + (scrollY > 0 ? 0.5 : -0.5); // Adjust multiplier for speed
    });
  }, [scrollY]); // Update on scroll position change

  return (
    <div className="w-full h-20 bg-customGray fixed top-0 left-0 z-50 border-b border-white border-solid">
      <div className="w-full h-full flex justify-between items-center">
        {/* Left Circle - Spins counter-clockwise on scroll down */}
        <motion.div
          animate={{ rotate: rotateAngle }} // Use the state variable for rotation
          transition={{ type: "tween", duration: 0.5 }} // Smooth transition
          className="w-28 h-28 transform -translate-x-1/3 -translate-y-1/3" // Keep your transform styles
        >
          <Image
            src={progressCircleImage}
            alt="ProgressCircle"
            className="w-28 h-28"
          />
        </motion.div>

        <div></div>

        {/* Right Circle - Spins clockwise on scroll down */}
        <motion.div
          animate={{ rotate: -rotateAngle }} // Rotate in the opposite direction
          transition={{ type: "tween", duration: 0.5 }} // Smooth transition
          className="w-28 h-28 transform translate-x-1/3 -translate-y-1/3" // Keep your transform styles
        >
          <Image
            src={progressCircleImage}
            alt="ProgressCircle"
            className="w-28 h-28"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
