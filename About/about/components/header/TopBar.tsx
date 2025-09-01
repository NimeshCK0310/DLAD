"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TopBar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.div
      className={`bg-white transition-all duration-500 border rounded-full mx-auto max-w-7xl mt-3 shadow-sm
        flex items-center justify-between px-4
        ${isScrolled ? "py-2 text-sm" : "py-3 text-base"}
      `}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <motion.span
        className="cursor-pointer text-lg text-black"
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        ←
      </motion.span>

      <motion.div className="flex items-center gap-3 text-black">
        <span>Further</span>
        <motion.span
          className="font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          30% off all Archive Sale
        </motion.span>
        <Link href="/archive-sale">
          <motion.button
            className="ml-3 px-4 py-1.5 bg-white-600 text-black text-xs font-semibold rounded-full shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.div>

      <motion.span
        className="cursor-pointer text-lg text-black"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        →
      </motion.span>
    </motion.div>
  );
}
