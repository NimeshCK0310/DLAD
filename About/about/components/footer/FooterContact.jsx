"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import FooterSocial from "./FooterSocial";

const linkHover = { x: 5, color: "#10b981", transition: { duration: 0.2 } };

export default function FooterContact() {
  return (
    <motion.div variants={{ hidden: {}, show: {} }}>
      <h5 className="font-bold text-lg text-gray-900 mb-4">Contact Us</h5>
      <ul className="space-y-3 text-sm">
        <motion.li whileHover={linkHover} className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <Phone size={16} /> 1800 ROLLIE
        </motion.li>
        <motion.li whileHover={linkHover} className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <MessageCircle size={16} /> WhatsApp
        </motion.li>
        <motion.li whileHover={linkHover} className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <Mail size={16} /> hello@rollienation.com
        </motion.li>
      </ul>

      <FooterSocial />
    </motion.div>
  );
}
