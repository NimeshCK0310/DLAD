"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.div>
      <Link href="/">
        <motion.div
          className={` text-black absolute top-15 left-8 font-bold
            flex items-start justify-start
            ${
              isScrolled
                ? "text-6xl leading-none tracking-tight -rotate-10"
                : "text-6xl leading-none tracking-tight -rotate-10"
            }`}
        >
          rollie
        </motion.div>
      </Link>
    </motion.div>
  );
}
