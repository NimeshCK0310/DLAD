"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative w-full h-[28rem] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story, Our Promise
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe in authenticity and passion. From our first design to our 
              latest innovation, Rollie Nation stands for creativity, individuality, 
              and timeless craftsmanship.
            </p>
            <p className="text-lg text-gray-600">
              When you wear a Rollie, you wear more than a watch. You wear a story, 
              a vision, a spark of inspiration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
