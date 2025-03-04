import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import HomePage from "./pages/Home/Home";

export default function Home() {
  return (
    <>
      <BackgroundImage />

      <HomePage />
      <div className="h-[900px]"></div>
    </>
  );
}
