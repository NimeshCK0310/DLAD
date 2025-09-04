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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
  </svg>
);

interface NavMenuProps {
  isScrolled: boolean;
  scrollDirection: "up" | "down" | "none";
}

export default function NavMenu({ isScrolled, scrollDirection }: NavMenuProps) {
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
      className={`fixed top-28 right-12 z-50 hidden md:flex items-center font-normal text-gray-800 border border-white/40
        ${
          scrollDirection === "up"
            ? "backdrop-blur-md bg-white/10" 
            : isScrolled
            ? "bg-[#e7e7e8]" 
            : "bg-[#e7e7e8]" 
        }
        rounded-3xl min-w-[650px] h-[78px] transition-all duration-300
      `}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        y: scrollDirection === "down" ? -100 : 0,
        transition: "all 0.3s ease-in-out",
      }}
    >
      {items.map((item, index) => {
        const roundedClasses = index === 0 ? "rounded-l-2xl" : "";
        return (
          <motion.div
            key={item.name}
            variants={navItemVariants}
            className="flex"
          >
            <Link
              href={item.href}
              className={`flex items-center px-8 h-full min-h-[78px] transition-all duration-200 hover:bg-white hover:text-black ${roundedClasses}`}
            >
              {item.icon && <div className="mr-2">{item.icon}</div>}
              <span className="whitespace-nowrap text-lg">{item.name}</span>
            </Link>
          </motion.div>
        );
      })}

      <div className="w-px h-10 bg-gray-300 mx-2" />

      <div className="flex items-center justify-center h-full overflow-hidden rounded-r-2xl shrink-0 pl-2 pr-6">
        <NavIcons />
      </div>
    </motion.nav>
  );
}
