"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

// Type-safe variants for Framer Motion
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
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      {/* Decorative Background Blurs */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          {/* Navigation Section */}
          <div className="lg:col-span-8">
            <FooterNav />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <FooterBottom />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
