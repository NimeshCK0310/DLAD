"use client";

import { motion } from "framer-motion";

interface LogoProps {
  isScrolled: boolean;
  scrollDirection: "up" | "down" | "none";
}

export default function Logo({ isScrolled, scrollDirection }: LogoProps) {
  return (
    <motion.div
      className="fixed top-25 left-10 w-[250px] h-[90px] z-50" // corrected top-25 -> top-10
      initial={{ opacity: 1 }}
      animate={{ opacity: scrollDirection === "down" ? 0 : 1 }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className={`font-bold text-black text-[4rem] leading-[4.5rem] tracking-tight 
          w-full h-full flex items-start justify-start transform -rotate-8
        `}
      >
        rollie
      </motion.div>
    </motion.div>
  );
}
