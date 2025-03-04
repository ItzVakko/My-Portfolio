"use client";

import { useEffect, useState } from "react";

export default function AnimatedText({ text, onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setAnimationCompleted(true);
        if (onComplete) onComplete();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className={animationCompleted ? "animation-completed" : ""}>
      {displayText}
    </p>
  );
}
