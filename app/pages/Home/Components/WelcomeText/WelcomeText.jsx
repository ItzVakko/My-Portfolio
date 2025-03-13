"use client";

import { useState, useEffect } from "react";
import AnimatedText from "../../../../components/AnimatedText";
import Image from "next/image";

const WelcomeText = () => {
  const [isFirstTextFinished, setIsFirstTextFinished] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-[1000px] mt-56">
      <div className="text-darkWhite text-6xl text-center font-fredoka">
        <AnimatedText
          text="HELLO, I'M VAKO KOBULASHVILI"
          onComplete={() => setIsFirstTextFinished(true)}
        />
      </div>

      {isFirstTextFinished && (
        <div className="text-darkWhite text-6xl neon-text text-center mt-6">
          <AnimatedText text="Full-Stack Web Developer" />
        </div>
      )}

      <p
        className={`text-darkWhite transition-opacity duration-1000 ease-in-out text-center mt-6 text-2xl ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        Scroll down to get more information about me!
      </p>

      <Image
        className={`mt-10 mx-auto animate-up-down transition-opacity duration-1000 ease-in-out ${
          showText ? "opacity-100" : "opacity-0"
        }`}
        src="/Images/neonArrow.png"
        width={180}
        height={180}
        alt="arrow"
      />
    </div>
  );
};

export default WelcomeText;
