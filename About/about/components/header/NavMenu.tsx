"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";

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
    { name: "Archive Sale", href: "/archive-sale", icon: <LockClosedIcon className="w-4 h-4" />, special: true },
    { name: "Rewards", href: "/rewards", icon: <span>🏆</span> },
  ];

  return (
    <motion.nav
      className={`hidden md:flex gap-8 items-center font-medium text-gray-800 ${
        isScrolled ? "bg-white/70 px-6 py-3 rounded-full shadow-lg" : "px-4 py-2"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {items.map((item) => (
        <motion.div key={item.name} variants={navItemVariants} whileHover={{ y: -2 }}>
          <Link
            href={item.href}
            className={`flex items-center gap-2 hover:text-blue-600 transition-all relative group ${
              item.special ? "text-blue-600" : ""
            }`}
          >
            {item.icon && <motion.div whileHover={{ rotate: 360 }}>{item.icon}</motion.div>}
            <span className="relative">
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
