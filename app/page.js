import React from "react";
import WelcomeText from "./Components/Header/WelcomeText";
import BackgroundImage from "./Components/BackgroundImage";
import SmoothEffectScroll from "./Components/SmoothEffectScroll";
import NavBar from "./Components/Header/NavBar";

export default function Home() {
  return (
    <>
      <BackgroundImage />

      <NavBar />

      <SmoothEffectScroll>
        <WelcomeText />
      </SmoothEffectScroll>

      <div className="h-[900px]"></div>
    </>
  );
}
