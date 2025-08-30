"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FooterNewsletter from "./FooterNewsletter";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FooterBrand() {
  return (
    <motion.div variants={itemVariants} className="lg:col-span-5">
      <div className="flex items-center mb-6">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="text-black text-5xl font-bold tracking-wide transform -rotate-2 hover:shadow-lg transition-all duration-300"
          >
            rollie
          </motion.div>
        </Link>
      </div>

      <motion.p
        variants={itemVariants}
        className="text-gray-700 text-base leading-relaxed mb-8"
      >
        We are innovators of comfort. Looking good and feeling good shouldn't
        be mutually exclusive. Community, culture, comfort or you - no
        hesitations. We're all in.
      </motion.p>

      {/* Newsletter */}
      <FooterNewsletter />
    </motion.div>
  );
}
