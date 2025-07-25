// Topic: Framer Motion – Fade In Animation
// Description: Animates a div to fade in and slide up on mount.
// Very useful for smooth UI polish and section reveals.
// Output: Box fades in and moves up when component loads.

import React from "react";
import { motion } from "framer-motion";

const FramerMotionFadeIn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "20px",
        backgroundColor: "#fafafa",
        borderRadius: "8px",
      }}
    >
      <h2>✨ Fade In Animation</h2>
      <p>This box fades in using Framer Motion.</p>
    </motion.div>
  );
};

export default FramerMotionFadeIn;
