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
    <section className="py-14 md:py-5 bg-gray-200 relative">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h1
          className="mt-4 text-6xl md:text-8xl lg:text-9xl text-gray-900 text-left tracking-tight pl-6 pt-60"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The Spark of <br />
          <motion.span
            className="mt-4 text-6xl md:text-8xl lg:text-9xl text-gray-900 text-left tracking-tight pl-6 pt-60"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Inspiration
          </motion.span>
        </motion.h1>
      </motion.div>


      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};