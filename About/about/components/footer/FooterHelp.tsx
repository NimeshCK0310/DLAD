"use client";

import { motion } from "framer-motion";

const linkHover = { x: 4, color: "rgb(21, 21, 31)", transition: { duration: 0.2 } };

export default function FooterHelp() {
  const items = [
    "My Account",
    "Student Offer",
    "Educator Offer",
    "Healthcare Offer",
    "Shipping",
    "Returns",
    "FAQs",
    "Ethics",
    "Rollie Rewards",
    "Find a Store",
    "International",
    "Terms & Conditions",
  ];

  return (
    <motion.div
      variants={{ hidden: {}, show: {} }}
      className="pt-10 sm:pt-12" // Increased top padding
    >
      <h5 className="text-[18px] text-[rgb(21,21,31)] mb-4 tracking-wide font-bold">
        Help
      </h5>

      <ul className="space-y-2 text-[16px] leading-[22px]">
        {items.map((item) => (
          <motion.li
            key={item}
            whileHover={linkHover}
            className="text-gray-700 cursor-pointer transition-colors duration-200"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
