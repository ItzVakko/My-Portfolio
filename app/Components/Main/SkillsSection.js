"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillsPlanet from "../../Assets/Images/SkillsPlanet.png";
import HtmlLogo from "../../Assets/Images/HTML_Logo.png";

const SkillsSection = () => {
  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Planet */}
      <div className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image src={SkillsPlanet} alt="skills planet" />
      </div>

      {/* Orbiting Skill Logos */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Skill Logos */}
        <SkillLogo
          logoSrc={HtmlLogo}
          alt="Html Logo"
          rotation={0}
          zIndexFront={true}
        />
        <SkillLogo
          logoSrc={HtmlLogo}
          alt="Skill 2"
          rotation={120}
          zIndexFront={false}
        />
        <SkillLogo
          logoSrc={HtmlLogo}
          alt="Skill 3"
          rotation={240}
          zIndexFront={false}
        />
      </motion.div>
    </div>
  );
};

// SkillLogo Component to dynamically handle z-index
const SkillLogo = ({ logoSrc, alt, rotation, zIndexFront }) => {
  return (
    <motion.div
      className={`absolute w-12 h-12 top-1/2 left-1/2 transform origin-center ${
        zIndexFront ? "z-30" : "z-10"
      }`}
      style={{ transform: `rotate(${rotation}deg) translate(8rem)` }}
      animate={{ zIndex: [10, 30, 10] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Image src={logoSrc} alt={alt} className="w-full h-full" />
    </motion.div>
  );
};

export default SkillsSection;
