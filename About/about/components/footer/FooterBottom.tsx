"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function FooterBottom() {
  return (
    <motion.div
      className="mt-12 pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-6"
    >
      <div className="text-center lg:text-left">
        <p className="text-sm text-gray-500 mb-2">
          © {new Date().getFullYear()} Rollie Nation — Proudly Australian owned and operated.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-gray-500">
          {["Terms & Conditions", "Privacy Policy", "Student Discount", "Educator Offer"].map(
            (item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: "#10b981", y: -2 }}
                className="hover:text-green-500 transition-colors duration-200"
              >
                {item}
              </motion.a>
            )
          )}
        </div>
      </div>

      <motion.div className="text-center lg:text-right text-xs text-gray-500 space-y-1">
        <div className="flex items-center justify-center lg:justify-end gap-2">
          <MapPin size={14} />
          <span>Proudly Australian</span>
        </div>
        <div>Free shipping & returns Australia wide</div>
      </motion.div>
    </motion.div>
  );
}
