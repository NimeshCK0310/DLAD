"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import TopBar from "./TopBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled
          ? `rgba(255, 255, 255, ${Math.min(scrollY / 200, 0.9)})`
          : "transparent",
      }}
    >
      {/* Top bar */}
      <TopBar isScrolled={isScrolled} />

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo isScrolled={isScrolled} />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavMenu isScrolled={isScrolled} />
          <NavIcons />
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-800 relative z-50"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide-out menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl flex flex-col items-center justify-center gap-8 z-50"
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
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
