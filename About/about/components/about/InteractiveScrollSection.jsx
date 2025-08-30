"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InteractiveScrollSection() {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Designed to Inspire
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our watches are more than accessories. They are reflections of your 
              unique journey, crafted with precision and care. Every curve, every 
              color, every finish is designed to inspire confidence and creativity.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full h-[28rem] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/process-2.jpg"
              alt="Design Inspiration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
