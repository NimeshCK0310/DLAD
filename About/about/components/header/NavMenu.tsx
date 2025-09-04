"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Menu, X } from "lucide-react";
import logo from "../../public/images/Images1/logo.svg";

interface NavMenuProps {
  isScrolled: boolean;
  scrollDirection: "up" | "down" | "none";
}

export default function NavMenu({ isScrolled, scrollDirection }: NavMenuProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "Behind Rollie", href: "/behind-rollie" },
    {
      name: "Archive Sale",
      href: "/archive-sale",
      icon: <LockClosedIcon className="w-5 h-7" />,
    },
    {
      name: "Rewards",
      href: "/rewards",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
        </svg>
      ),
    },
  ];

  const navIcons = (
    <motion.div className="flex items-center gap-5">
      <svg
        className="w-7 h-7 cursor-pointer text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M11 4a7 7 0 1 1-7 7 7 7 0 0 1 7-7z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <svg
        className="w-7 h-7 cursor-pointer text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <svg
        className="w-7 h-7 cursor-pointer text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M6 20v-2c0-2.21 3.58-4 6-4s6 1.79 6 4v2H6z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <motion.div
        className="relative w-8 h-8 flex items-center justify-center bg-[#3f3f3f] text-white text-xs rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0, repeat: Infinity }}
      >
        0
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <div className="fixed top-25 left-12 right-12 z-50 hidden md:flex items-center justify-start">
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: scrollDirection === "down" ? -80 : 0,
            opacity: scrollDirection === "down" ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={105}
              height={42}
              className="object-contain c-navigation__logo-svg"
            />
          </Link>
        </motion.div>

        <motion.nav
          className={`flex items-center font-normal text-gray-800 border border-white/40
            ${
              scrollDirection === "up"
                ? "backdrop-blur-md bg-white/10"
                : isScrolled
                ? "bg-[#e7e7e8]"
                : "bg-[#e7e7e8]"
            }
            rounded-l-3xl min-w-[580px] h-[68px] transition-all duration-300 ml-auto
          `}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          style={{
            y: scrollDirection === "down" ? -80 : 0,
            transition: "all 0.3s ease-in-out",
          }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="flex"
              variants={{
                hidden: { opacity: 0, y: -10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
              }}
            >
              <Link
                href={item.href}
                className={`
                  flex items-center px-6 h-full min-h-[68px] transition-all duration-200 hover:bg-white hover:text-black
                  ${item.name === "Shop" ? "hover:rounded-l-3xl" : ""}
                `}
              >
                {item.icon && <div className="mr-2">{item.icon}</div>}
                <span className="whitespace-nowrap text-lg">{item.name}</span>
              </Link>
            </motion.div>
          ))}

          <div className="w-px h-10 bg-gray-300 mx-2" />

          <div className="flex items-center justify-center h-full overflow-hidden rounded-r-2xl shrink-0 pl-2 pr-6">
            {navIcons}
          </div>
        </motion.nav>
      </div>

      <div className="md:hidden fixed top-5 right-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-gray-800 relative z-50"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl flex flex-col items-center justify-center gap-6 z-40"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
