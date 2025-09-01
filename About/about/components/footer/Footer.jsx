"use client";

import { motion } from "framer-motion";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

const containerVariants = {
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
    
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
          <FooterBrand />

       
          <FooterNav />
        </div>

      
        <FooterBottom />
      </motion.div>
    </footer>
  );
}
