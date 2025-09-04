"use client";

import { motion, cubicBezier } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
  },
};

export default function HeroSection() {
  return (
    <section className="py-24 md:py-16 bg-[#e7e7e8] relative">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h1
          className="mt-4 text-8xl md:text-[8rem] lg:text-[8rem] text-gray-900 text-left tracking-tight pl-15 pt-60"
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

      {/* Background animation (optional) */}
      {/* <motion.div
        className="absolute top-20 right-20 w-48 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
    </section>
  );
}
