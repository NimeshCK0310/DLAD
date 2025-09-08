"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import FooterSocial from "./FooterSocial";

const MotionLi = motion.li;

const linkHover = { x: 5, color: "#10b981", transition: { duration: 0.2 } };

export default function FooterContact() {
  return (
    <motion.div className="pt-6 sm:pt-8">
      <h5 className="font-bold text-lg text-gray-900 mb-4">Contact Us</h5>
      <ul className="space-y-3 text-sm mb-6 list-none p-0 m-0">
        <MotionLi
          whileHover={linkHover}
          className="flex items-center gap-2 text-gray-600 cursor-pointer"
        >
          <Phone size={16} />
          <a href="tel:1800765543" className="hover:text-emerald-500">
            1800 ROLLIE
          </a>
        </MotionLi>
        <MotionLi
          whileHover={linkHover}
          className="flex items-center gap-2 text-gray-600 cursor-pointer"
        >
          <MessageCircle size={16} />
          <a
            href="https://wa.me/1800765543"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500"
          >
            WhatsApp
          </a>
        </MotionLi>
        <MotionLi
          whileHover={linkHover}
          className="flex items-center gap-2 text-gray-600 cursor-pointer"
        >
          <Mail size={16} />
          <a
            href="mailto:hello@rollienation.com"
            className="hover:text-emerald-500"
          >
            hello@rollienation.com
          </a>
        </MotionLi>
      </ul>
      <FooterSocial />
    </motion.div>
  );
}
