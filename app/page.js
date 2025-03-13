import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import HomePage from "./pages/Home/Home";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function Home() {
  return (
    <>
      <BackgroundImage />

      <HomePage />
      <div className="h-[900px]"></div>

      <FacebookProvider appId="2126083514486740" chatSupport>
        <CustomChat pageId="576324402235215" minimized="true" />
      </FacebookProvider>
    </>
  );
}
