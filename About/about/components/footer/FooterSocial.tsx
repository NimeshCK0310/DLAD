"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Phone } from "lucide-react";

const socialHover = { scale: 1.2, rotate: 5, transition: { duration: 0.3 } };

export default function FooterSocial() {
  const socials = [
    { Icon: Instagram, label: "Instagram" },
    { Icon: MessageCircle, label: "TikTok" },
    { Icon: Phone, label: "Pinterest" },
  ];

  return (
    <motion.div className="mt-8 flex gap-4">
      {socials.map(({ Icon, label }) => (
        <motion.div
          key={label}
          whileHover={socialHover}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-300"
        >
          <Icon size={18} />
        </motion.div>
      ))}
    </motion.div>
  );
}
