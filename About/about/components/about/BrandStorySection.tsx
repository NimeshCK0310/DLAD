"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStorySection() {
  return (
    <section className="relative z-10 px-6 py-20 bg-white">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">The Brand Story</h2>
          <p className="text-lg text-gray-600">
            Rollie is more than a brand—it’s a movement. We believe technology should
            blend seamlessly with everyday life, making moments more meaningful.
          </p>
          <p className="text-lg text-gray-600">
            Our journey is a testament to the power of curiosity, design, and human
            connection.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-80 w-full"
        >
          <Image
            src="/images/brand-story.jpg"
            alt="Brand Story"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
