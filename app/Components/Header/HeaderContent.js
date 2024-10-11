"use client"; // Ensure this component runs on the client side

import Image from "next/image";
import React, { useState } from "react";
import MyPhoto from "../../Assets/Images/myself.png";
import { motion } from "framer-motion";

const HeaderContent = () => {
  const [hovered, setHovered] = useState(false); // Track hover state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Store cursor position

  const handleMouseEnter = (e) => {
    setHovered(true); // Set hover to true on mouse enter
    setCursorPosition({ x: e.clientX, y: e.clientY }); // Update cursor position
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY }); // Update cursor position on mouse move
  };

  const handleMouseLeave = () => {
    setHovered(false); // Set hover to false on mouse leave
  };

  return (
    <div className="relative flex justify-center">
      {/* Lightening effect */}
      {hovered && (
        <motion.div
          className="absolute rounded-full bg-white opacity-70 pointer-events-none"
          style={{
            width: 150, // Adjust width for the radius effect
            height: 150, // Adjust height for the radius effect
            left: cursorPosition.x - 75, // Center the overlay over the cursor
            top: cursorPosition.y - 75, // Center the overlay over the cursor
          }}
          initial={{ scale: 0 }} // Initial scale for animation
          animate={{ scale: 1 }} // Scale to full size on hover
          exit={{ scale: 0 }} // Scale down on mouse leave
          transition={{ duration: 0.3 }} // Animation duration
        />
      )}

      <div
        className="w-[330px] px-2 pt-2 bg-customGray border border-customWhite border-solid rounded-[5px] shadow-[0_4px_10px_rgba(255,255,255,0.2)]"
        onMouseEnter={handleMouseEnter} // Mouse enter event
        onMouseMove={handleMouseMove} // Mouse move event
        onMouseLeave={handleMouseLeave} // Mouse leave event
      >
        <Image
          src={MyPhoto}
          alt="My Photo"
          className="w-[330px] h-auto opacity-70 contrast-125 saturate-150"
        />
      </div>
    </div>
  );
};

export default HeaderContent;
