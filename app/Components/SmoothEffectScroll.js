// components/SmoothScroll.js
"use client";

import { motion } from "framer-motion";
import useScrollPosition from "./CustomHooks/UseScrollPosition";

const SmoothScroll = ({ children }) => {
  const scrollY = useScrollPosition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -scrollY * 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
