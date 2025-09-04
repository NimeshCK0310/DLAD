"use client";

import { motion, useScroll, cubicBezier } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ---------------- HERO SECTION ---------------- */
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
  },
};

export function HeroSection() {
  return (
    <section className="bg-[#e7e7e8] relative pb-0 mb-0">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h1
          className="mt-4 text-8xl md:text-[8rem] lg:text-[8rem] text-gray-900 text-left tracking-tight pl-15 pt-40"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The spark of <br />
          <motion.span
            className="mt-4 text-8xl md:text-[8rem] lg:text-[8rem] text-gray-900 text-left tracking-tight pl-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            inspiration
          </motion.span>
        </motion.h1>
      </motion.div>
    </section>
  );
}