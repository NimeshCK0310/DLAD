"use client";

import { motion } from "framer-motion";

const linkHover = { x: 5, color: "#10b981", transition: { duration: 0.2 } };

export default function FooterShop() {
  const items = ["Womens", "Mens", "Gift Card"];

  return (
    <motion.div
      variants={{ hidden: {}, show: {} }}
      className="pt-6 sm:pt-8"
    >
      <h5 className="font-bold text-lg text-gray-900 mb-4">Shop</h5>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <motion.li
            key={item}
            whileHover={linkHover}
            className="text-gray-600 cursor-pointer transition-colors duration-200"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
