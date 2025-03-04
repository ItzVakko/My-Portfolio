"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import UseScrollPosition from "../../../../hooks/UseScrollPosition";
import SkillsCircle from "./SkillsCircle";

const Skills = () => {
  const [isBgFinished, setIsBgFinished] = useState(false);
  const [skillsCategory, setSkillsCategory] = useState("frontend");

  const scrollYHook = UseScrollPosition();

  // When scrollY reaches 700, background should change to black
  useEffect(() => {
    if (scrollYHook >= 700 && scrollYHook <= 1200) {
      setIsBgFinished(true);
    } else {
      setIsBgFinished(false);
    }
  }, [scrollYHook]);

  return (
    <motion.div
      className="w-full h-[100vh] bg-black fixed inset-0 z-0 px-44 flex items-center justify-between gap-48"
      initial={{ y: 1500 }}
      animate={{ y: isBgFinished ? 0 : 1500 }}
      transition={{
        type: "spring",
        stiffness: isBgFinished ? 40 : 80,
      }}
    >
      <div>
        <h1 className="text-darkWhite text-6xl font-fredoka">
          SKILLS THAT <span className="neon-text">SHOW</span>
        </h1>

        <div className="w-48 h-1 bg-blue-300 rounded-sm"></div>

        <h1 className="text-white text-6xl mt-4 font-fredoka">MY ABILITIES!</h1>

        <p className="text-gray-300 mt-6 text-xl">
          These skills highlight my strengths, demonstrating my ability to
          handle challenges,
          <br /> succeed in various tasks, and contribute effectively to
          different projects or teams.
        </p>

        <button className="text-darkWhite text-xl font-semibold px-8 py-4 mt-6 rounded-md bg-gradient-to-r from-blue-500 to-teal-400 border border-white shadow-lg hover:shadow-xl hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-black">
          DOWNLOAD CV
        </button>
      </div>

      <div className="flex items-center flex-col">
        <div className="flex gap-6">
          <button
            onClick={() => setSkillsCategory("frontend")}
            className={`font-teko text-3xl border border-darkWhite pb-3 pt-4 px-12 rounded-md transition-bg duration-500 ${
              skillsCategory === "frontend"
                ? "text-black bg-darkWhite"
                : "text-darkWhite hover:bg-darkWhite hover:opacity-50 hover:text-black"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSkillsCategory("backend")}
            className={`font-teko text-3xl border border-darkWhite pb-3 pt-4 px-12 rounded-md transition-bg duration-500 ${
              skillsCategory === "backend"
                ? "text-black bg-darkWhite"
                : "text-darkWhite hover:bg-darkWhite hover:opacity-50 hover:text-black"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setSkillsCategory("database")}
            className={`font-teko text-3xl border border-darkWhite pb-3 pt-4 px-12 rounded-md transition-bg duration-500 ${
              skillsCategory === "database"
                ? "text-black bg-darkWhite"
                : "text-darkWhite hover:bg-darkWhite hover:opacity-50 hover:text-black"
            }`}
          >
            Databases
          </button>
        </div>

        <SkillsCircle skillsCategory={skillsCategory} />
      </div>
    </motion.div>
  );
};

export default Skills;
