"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import NavIcons from "./NavIcons";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function NavMenu({ isScrolled }: { isScrolled: boolean }) {
  const items = [
    { name: "Shop", href: "/shop" },
    { name: "Behind Rollie", href: "/behind-rollie" },
    {
      name: "Archive Sale",
      href: "/archive-sale",
      icon: <LockClosedIcon className="w-4 h-4" />,
      special: true,
    },
    { name: "Rewards", href: "/rewards", icon: <span>🏆</span> },
  ];

  return (
    <motion.nav
      className={`hidden md:flex items-center font-medium text-gray-800 border border-white rounded-full overflow-hidden 
        ${
          isScrolled
            ? "bg-transparent pl-0 pr-1 py-0 shadow-lg" // remove left padding; keep slight right padding
            : "bg-gray-200 pl-0 pr-1 py-0"
        }
      `}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Nav text links */}
      {items.map((item, index) => (
        <motion.div key={item.name} variants={navItemVariants} className="flex">
          <Link
            href={item.href}
            className={`flex items-center px-6 py-3 transition-colors duration-200 hover:bg-white hover:text-black  ${
              index === 0 ? "rounded-l-full -ml-px" : "" // snug to left edge, fix 1px seam
            }`}
          >
            {item.icon && <div className="mr-1">{item.icon}</div>}
            <span>{item.name}</span>
          </Link>
        </motion.div>
      ))}

      {/* Divider between text links and icons */}
      <div className="w-px h-8 bg-gray-300" />

      {/* Icons wrapper – keep icons inside the pill and aligned */}
      <div className="flex items-center justify-center h-full overflow-hidden rounded-r-full shrink-0 pl-1 pr-4 pt-3">
        <NavIcons />
      </div>
    </motion.nav>
  );
}
