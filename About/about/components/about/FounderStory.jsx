"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From a Spark to a Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Rollie Nation was born from a simple idea: create watches that combine 
              timeless design with modern artistry. Our founder envisioned a brand 
              that reflects individuality, creativity, and quality.
            </p>
            <p className="text-lg text-gray-600">
              Every collection tells a story. Every detail carries meaning. This is 
              more than a brand — it’s a movement of dreamers, doers, and creators.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/process-1.jpg"
              alt="Founder Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
