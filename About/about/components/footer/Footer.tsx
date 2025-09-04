"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 rounded-t-3xl pt-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          <div className="lg:col-span-8">
            <FooterNav />
          </div>
        </div>

        <div className="mt-12">
          <FooterBottom />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
