"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 py-16 px-6 text-white">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Stay Connected with Rollie
        </motion.h2>
        <p className="text-lg opacity-90">
          Join our community and get updates about new launches, behind-the-scenes,
          and exclusive offers.
        </p>
        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-xl text-gray-900 w-64"
          />
          <button className="px-6 py-3 bg-black rounded-r-xl hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
