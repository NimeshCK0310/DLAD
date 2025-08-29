"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function InteractiveScrollSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 1"] });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative z-10 px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-4xl text-center space-y-6"
      >
        <h2 className="text-4xl font-bold text-gray-900">A Journey of Innovation</h2>
        <p className="text-lg text-gray-600">
          From sketching the first concept to launching our products globally,
          every step was fueled by relentless passion for innovation.
        </p>
      </motion.div>
    </section>
  );
}
