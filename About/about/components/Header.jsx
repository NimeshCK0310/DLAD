"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const scaleUp = {
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change background after 10px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white shadow-md sticky top-0 z-50">
      {/* Promo Bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="bg-gradient-to-r from-blue-50 to-white text-black py-2 px-4 flex items-center justify-between text-sm rounded-full max-w-5xl mx-auto mt-3 shadow-sm"
      >
        <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">&larr;</span>
        <p className="flex items-center">
          Further{" "}
          <span className="font-semibold text-black-700 mx-1">30% off all Archive Sale</span>{" "}
          <Link href="/archive-sale">
            <motion.button
              variants={scaleUp}
              whileHover="hover"
              className="ml-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Shop Now
            </motion.button>
          </Link>
        </p>
        <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">&rarr;</span>
      </motion.div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="flex items-center"
        >
          <Link href="/">
            <motion.button
              variants={scaleUp}
              whileHover="hover"
              className="ml-2 px-6 py-3 text-black text-6xl font-bold tracking-wide transform -rotate-12 "
            >
              rollie
            </motion.button>
          </Link>
        </motion.div>

        {/* Navigation and Icons */}
        <div className="flex items-center gap-6">
          <motion.nav
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            className={`flex gap-10 items-center text-1xl font-medium text-gray-800  px-6 py-3 rounded-3xl transition-all duration-300 ${
              isScrolled ? "bg-white bg-opacity-90 shadow-md" : "bg-transparent"
            }`}
          >
            <Link
              href="/shop"
              className="hover:text-gray-600 hover:border-b-2 hover:border-gray-600 transition-colors duration-200 py-1"
            >
              Shop
            </Link>
            <Link
              href="/behind-rollie"
              className="hover:text-gray-600 hover:border-b-2 hover:border-gray-600 transition-colors duration-200 py-1"
            >
              Behind Rollie
            </Link>
            <Link
              href="/archive-sale"
              className="flex items-center gap-1 hover:text-gray-600 hover:border-b-2 hover:border-gray-600 transition-colors duration-200 py-1"
            >
              <LockClosedIcon className="w-5 h-5 text-gray-600" /> Archive Sale
            </Link>
            <Link
              href="/rewards"
              className="flex items-center gap-1 hover:text-gray-600 hover:border-b-2 hover:border-gray-600 transition-colors duration-200 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3v18h18V3H3zm5 14l3-4 2 3 4-6 4 7H8z"
                />
              </svg>
              Rewards
            </Link>
          </motion.nav>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            className="flex items-center gap-6 text-gray-700"
          >
            <motion.div variants={scaleUp} whileHover="hover">
              <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-200" />
            </motion.div>
            <motion.div variants={scaleUp} whileHover="hover">
              <HeartIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-500 transition-colors duration-200" />
            </motion.div>
            <motion.div variants={scaleUp} whileHover="hover">
              <UserIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-200" />
            </motion.div>
            <motion.div variants={scaleUp} whileHover="hover" className="relative">
              <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-200" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}