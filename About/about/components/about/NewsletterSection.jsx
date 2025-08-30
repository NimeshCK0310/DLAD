"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg text-gray-300 mb-8">
          Be the first to know about new releases, stories, and events from Rollie Nation.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-xl text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
