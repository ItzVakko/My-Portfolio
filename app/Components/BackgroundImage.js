"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import UseScrollPosition from "./CustomHooks/UseScrollPosition";

const BackgroundImage = () => {
  const { scrollY } = useScroll();
  const scrollYHook = UseScrollPosition();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isBgFinished, setIsBgFinished] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latestScrollY) => {
      if (latestScrollY > 50 && !hasScrolled) {
        window.scrollTo({
          top: 500,
          behavior: "smooth",
        });
        setHasScrolled(true);
      }

      if (latestScrollY < 50 && hasScrolled) {
        setHasScrolled(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, hasScrolled]);

  // When scrollY reaches 900, background should change to black
  useEffect(() => {
    if (scrollYHook >= 900) {
      setIsBgFinished(true);
    } else {
      setIsBgFinished(false);
    }
  }, [scrollYHook]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-0 background-image"
        style={{
          scale,
        }}
      />

      <motion.div
        className="w-full h-[100vh] bg-black fixed inset-0 z-0"
        initial={{ y: 1500 }}
        animate={{ y: isBgFinished ? 0 : 1500 }}
        transition={{ type: "spring", stiffness: 20 }}
      ></motion.div>
    </>
  );
};

export default BackgroundImage;
