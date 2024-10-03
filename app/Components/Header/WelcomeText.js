"use client";

import { useState } from "react";
import AnimatedText from "../AnimatedText";

const WelcomeText = () => {
  const [isFirstTextFinished, setIsFirstTextFinished] = useState(false);

  return (
    <div className="mx-auto max-w-[700px] mt-24">
      <div className="text-white text-5xl text-center font-fredoka">
        <AnimatedText
          text="HELLO, I'm Vako Kobulashvili!"
          onComplete={() => setIsFirstTextFinished(true)}
        />
      </div>

      {isFirstTextFinished && (
        <div className="text-white text-5xl neon-text text-center mt-6">
          <AnimatedText text="Full-Stack Web Developer" />
        </div>
      )}

      <p className="text-white">
        Scroll down to get more information about me!
      </p>
    </div>
  );
};

export default WelcomeText;
