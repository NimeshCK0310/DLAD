"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import TopBar from "./TopBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | "none">("none");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsAtTop(currentScroll === 0);

      if (currentScroll > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScroll < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
     
      {isAtTop && <TopBar isScrolled={!isAtTop} />}

      
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" ? -120 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between"
      >
        <Logo isScrolled={!isAtTop} />

      
        <div className="hidden md:flex items-center gap-6">
          <NavMenu isScrolled={!isAtTop} />
        </div>

    
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-800 relative z-50"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      
      <AnimatePresence>
        {open && (
          <>
           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

      
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
    </header>
  );
}
