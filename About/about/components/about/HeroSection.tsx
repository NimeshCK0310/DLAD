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
    <section className="bg-[#e7e7e8] relative pb-0 mb-0">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-0"
      >
        <motion.h1
          className="mt-0 text-6xl md:text-[6rem] lg:text-[8rem] text-gray-900 text-left tracking-tight"
          style={{ paddingLeft: "62px", paddingTop: "300px" }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The spark of <br />
          <motion.span
            className="text-6xl md:text-[6rem] lg:text-[8rem] text-gray-900 tracking-tight"
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
