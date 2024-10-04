"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundImage = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

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
