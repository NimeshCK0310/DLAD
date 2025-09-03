"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import NavIcons from "./NavIcons";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const RewardsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
  </svg>
);

export default function NavMenu({ isScrolled }: { isScrolled: boolean }) {
  const items = [
    { name: "Shop", href: "/shop" },
    { name: "Behind Rollie", href: "/behind-rollie" },
    {
      name: "Archive Sale",
      href: "/archive-sale",
      icon: <LockClosedIcon className="w-5 h-7" />,
      special: true,
    },
    { name: "Rewards", href: "/rewards", icon: <RewardsIcon /> },
  ];

  return (
    <motion.nav
      className={`fixed top-28 right-12 z-50 hidden md:flex items-center font-medium text-gray-800 border border-white/40 
        ${
          isScrolled
            ? "bg-transparent pl-2 pr-1 py-0"
            : "bg-[#e7e7e8] pl-0 pr-1 py-0"
        }
        rounded-2xl
      `}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {items.map((item, index) => {
        let roundedClasses = "";
        if (index === 0) roundedClasses = "rounded-l-2xl";
      
        return (
          <motion.div key={item.name} variants={navItemVariants} className="flex">
            <Link
              href={item.href}
              className={`flex items-center px-6 h-16 min-h-[60px] transition-all duration-200 hover:bg-white hover:text-black ${roundedClasses}`}
            >
              {item.icon && <div className="mr-2">{item.icon}</div>}
              <span className="whitespace-nowrap">{item.name}</span>
            </Link>
          </motion.div>
        );
      })}

      <div className="w-px h-8 bg-gray-300" />

      <div className="flex items-center justify-center h-full overflow-hidden rounded-r-2xl shrink-0 pl-2 pr-4">
        <NavIcons />
      </div>
    </motion.nav>
  );
}