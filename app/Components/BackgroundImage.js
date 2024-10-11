"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundImage = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <motion.div
      className="fixed inset-0 z-0 background-image"
      style={{
        scale,
      }}
    />
  );
};

export default BackgroundImage;
