"use client";

import { motion } from "framer-motion";

const glowButton = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(16, 185, 129, 0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function FooterNewsletter() {
  return (
    <motion.div variants={{ hidden: {}, show: {} }} className="space-y-4">
      <h5 className="font-bold text-lg text-gray-900">Let's stay in touch</h5>
      <p className="text-gray-600 text-sm">
        Stay in the loop, with exclusive offers and product previews.
      </p>
      <motion.form className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter email..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
        />
        <motion.button
          type="submit"
          variants={glowButton}
          initial="rest"
          whileHover="hover"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          Join Rollie Nation
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
