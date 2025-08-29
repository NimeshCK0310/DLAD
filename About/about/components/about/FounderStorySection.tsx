"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderStorySection() {
  return (
    <section className="relative z-10 px-6 py-16 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Founder Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Founder’s Story</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Rollie was born from a simple idea: creating tech-infused lifestyle products
            that spark joy. Our founder, inspired by the blend of design and innovation,
            set out on a journey to transform everyday essentials into something magical.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            What started as a small vision quickly grew into a brand driven by creativity,
            innovation, and a passion for quality.
          </p>
        </motion.div>

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-80 w-full"
        >
          <Image
            src="/images/founder.jpg"
            alt="Founder"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
