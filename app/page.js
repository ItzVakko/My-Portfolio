import React from "react";
import BackgroundImage from "./Components/BackgroundImage";
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import SkillsSection from "./Components/Main/SkillsSection";

export default function Home() {
  return (
    <>
      <BackgroundImage />

      <HeaderWrapper />

      <SkillsSection />

      <div className="h-[900px]"></div>
    </>
  );
}
