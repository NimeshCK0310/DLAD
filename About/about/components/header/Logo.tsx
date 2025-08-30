"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.div>
      <Link href="/">
        <motion.div
          className={`text-black font-bold tracking-wide transition-all duration-500 cursor-pointer ${
            isScrolled ? "text-4xl -rotate-6" : "text-5xl -rotate-8"
          }`}
          whileHover={{ scale: 1.05, rotate: -12 }}
          whileTap={{ scale: 0.95 }}
        >
          rollie
        </motion.div>
      </Link>
    </motion.div>
  );
}
