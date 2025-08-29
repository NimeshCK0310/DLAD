"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const socialHover = {
  scale: 1.2,
  rotate: 5,
  transition: { duration: 0.3, ease: "easeOut" },
};

const linkHover = {
  x: 5,
  color: "#10b981",
  transition: { duration: 0.2, ease: "easeOut" },
};

const glowButton = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      {/* Background decoration */}
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
          
          {/* Brand Section */}
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
              We are innovators of comfort. Looking good and feeling good
              shouldn't be mutually exclusive. Community, culture, comfort or
              you - no hesitations. We're all in.
            </motion.p>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h5 className="font-bold text-lg text-gray-900">Let's stay in touch</h5>
              <p className="text-gray-600 text-sm">
                Stay in the loop, with exclusive offers and product previews.
              </p>
              <motion.form 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  variants={glowButton}
                  initial="rest"
                  whileHover="hover"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  Join Rollie Nation
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Navigation Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Help Section */}
            <motion.div variants={itemVariants}>
              <h5 className="font-bold text-lg text-gray-900 mb-4">Help</h5>
              <ul className="space-y-3 text-sm">
                {[
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
                  "Terms & Conditions"
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    whileHover={linkHover}
                    className="text-gray-600 cursor-pointer transition-colors duration-200"
                    style={{ cursor: 'pointer' }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Shop Section */}
            <motion.div variants={itemVariants}>
              <h5 className="font-bold text-lg text-gray-900 mb-4">Shop</h5>
              <ul className="space-y-3 text-sm">
                {["Womens", "Mens", "Gift Card"].map((item, index) => (
                  <motion.li 
                    key={item}
                    whileHover={linkHover}
                    className="text-gray-600 cursor-pointer transition-colors duration-200"
                    style={{ cursor: 'pointer' }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants}>
              <h5 className="font-bold text-lg text-gray-900 mb-4">Contact Us</h5>
              <ul className="space-y-3 text-sm">
                <motion.li 
                  whileHover={linkHover}
                  className="text-gray-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                >
                  <Phone size={16} />
                  1800 ROLLIE
                </motion.li>
                <motion.li 
                  whileHover={linkHover}
                  className="text-gray-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </motion.li>
                <motion.li 
                  whileHover={linkHover}
                  className="text-gray-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                >
                  <Mail size={16} />
                  hello@rollienation.com
                </motion.li>
              </ul>

              {/* Social Media Icons */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex gap-4"
              >
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: MessageCircle, label: "TikTok" },
                  { Icon: Phone, label: "Pinterest" }
                ].map(({ Icon, label }, index) => (
                  <motion.div
                    key={label}
                    whileHover={socialHover}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-6"
        >
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-500 mb-2">
              © {new Date().getFullYear()} Rollie Nation — Proudly Australian owned and operated.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-gray-500">
              {[
                "Terms & Conditions",
                "Privacy Policy", 
                "Student Discount",
                "Educator Offer"
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: "#10b981", y: -2 }}
                  className="hover:text-green-500 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-right text-xs text-gray-500 space-y-1"
          >
            <div className="flex items-center justify-center lg:justify-end gap-2">
              <MapPin size={14} />
              <span>Proudly Australian</span>
            </div>
            <div>Free shipping & returns Australia wide</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition-colors duration-300"
        >
          ↑
        </motion.div>
      </motion.div>
    </footer>
  );
}