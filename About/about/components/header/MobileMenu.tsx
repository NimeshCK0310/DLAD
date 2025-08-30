"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-800 z-50 relative"
        aria-label="Toggle Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Slide-out Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
