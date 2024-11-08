"use client";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import {
  SiSass,
  SiMui,
  SiExpress,
  SiNestjs,
  SiJsonwebtokens,
  SiGraphql,
  SiTypescript,
  SiNodemon,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiMariadb,
  SiSqlite,
} from "react-icons/si";

const frontIcons = [
  { logo: <FaHtml5 size={40} />, name: "HTML" },
  { logo: <FaCss3 size={40} />, name: "CSS" },
  { logo: <FaJs size={40} />, name: "Javascript" },
  { logo: <FaReact size={40} />, name: "React" },
  { logo: <RiNextjsFill size={47} />, name: "Next.js" },
  { logo: <BiLogoRedux size={45} />, name: "Redux" },
  { logo: <RiTailwindCssFill size={40} />, name: "TailwindCSS" },
  { logo: <SiSass size={40} />, name: "Sass" },
  { logo: <SiMui size={40} />, name: "MaterialUI" },
  { logo: <FaBootstrap size={40} />, name: "Bootstrap" },
];

const backIcons = [
  { logo: <FaNodeJs size={40} />, name: "Node.js" },
  { logo: <SiExpress size={40} />, name: "Express.js" },
  { logo: <SiNestjs size={40} />, name: "NestJS" },
  { logo: <SiJsonwebtokens size={40} />, name: "JWT" },
  { logo: <SiGraphql size={40} />, name: "GraphQL" },
  { logo: <FaJs size={40} />, name: "JavaScript" },
  { logo: <SiTypescript size={35} />, name: "Typescript" },
  { logo: <SiNodemon size={35} />, name: "Nodemon" },
];

const databaseIcons = [
  { logo: <SiMongodb size={40} />, name: "MongoDB" },
  { logo: <GrMysql size={40} />, name: "MySQL" },
  { logo: <SiRedis size={40} />, name: "Redis" },
  { logo: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { logo: <SiMariadb size={40} />, name: "MariaDB" },
  { logo: <SiSqlite size={40} />, name: "SQLite" },
];

const SkillsCircle = ({ skillsCategory }) => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [skillName, setSkillName] = useState("");

  const totalIcons =
    (skillsCategory === "frontend" && frontIcons.length) ||
    (skillsCategory === "backend" && backIcons.length) ||
    (skillsCategory === "database" && databaseIcons.length);

  const angleStep = 360 / totalIcons;
  const radius = "300%";

  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="relative w-96 h-96 border border-darkWhite rounded-full flex justify-center items-center">
        <div
          id="circle-container"
          className={`absolute inset-0 flex justify-center items-center ${
            isIconHovered ? "paused" : ""
          }`}
        >
          {/* Loop through icons and position them dynamically */}

          {(
            (skillsCategory === "frontend" && frontIcons) ||
            (skillsCategory === "backend" && backIcons) ||
            (skillsCategory === "database" && databaseIcons)
          ).map((icon, index) => {
            const angle = index * angleStep;
            const transformStyle = {
              transform: `rotate(${angle}deg) translateX(${radius}) rotate(-${angle}deg)`,
            };

            return (
              <div
                key={index}
                className="icon w-16 h-16 rounded-full bg-darkWhite flex justify-center items-center cursor-pointer absolute hover:bg-black hover:border hover:border-darkWhite custom-svg-hover"
                style={transformStyle}
                onMouseEnter={() => {
                  setIsIconHovered(true);
                  setSkillName(icon.name);
                }}
                onMouseLeave={() => {
                  setIsIconHovered(false);
                  setSkillName("");
                }}
              >
                {icon.logo}
              </div>
            );
          })}
        </div>

        {/* Skill name is shown when person hovers any icon */}
        <div className="text-darkWhite font-fredoka text-3xl">{skillName}</div>
      </div>
    </div>
  );
};

export default SkillsCircle;
