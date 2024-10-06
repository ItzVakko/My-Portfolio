import React from "react";
import WelcomeText from "./Components/Header/WelcomeText";
import BackgroundImage from "./Components/BackgroundImage";
import SmoothEffectScroll from "./Components/SmoothEffectScroll";

export default function Home() {
  return (
    <>
      <BackgroundImage />

      <SmoothEffectScroll>
        <WelcomeText />
      </SmoothEffectScroll>

      <div className="height"></div>
    </>
  );
}
