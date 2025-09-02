"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import FooterNewsletter from "./FooterNewsletter";

// Framer Motion variants with type-safe easing
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // easeOut equivalent
  },
};

const FooterBrand: React.FC = () => {
  return (
    <motion.div variants={itemVariants} className="lg:col-span-5">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="text-black text-4xl sm:text-5xl font-bold tracking-wide transform -rotate-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            rollie
          </motion.div>
        </Link>
      </div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8"
      >
        We are innovators of comfort. Looking good and feeling good shouldn&apos;t
        be mutually exclusive. Community, culture, comfort or you - no
        hesitations. We&apos;re all in.
      </motion.p>

      {/* Newsletter */}
      <FooterNewsletter />
    </motion.div>
  );
};

export default FooterBrand;
