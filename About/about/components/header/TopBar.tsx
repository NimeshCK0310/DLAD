"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TopBar({ isScrolled }: { isScrolled: boolean }) {
  // SVG Arrow component
  const Arrow = ({ direction }: { direction: "left" | "right" }) => (
    <svg
      width="10" // decreased width
      height="14"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === "left" ? "rotate(180deg)" : "none",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.17157 0.464562L10.3536 3.64654C10.5488 3.8418 10.5488 4.15839 10.3536 4.35365L7.17157 7.53563C6.97631 7.73089 6.65973 7.73089 6.46447 7.53563C6.2692 7.34037 6.2692 7.02378 6.46447 6.82852L8.79289 4.5001H0V3.5001H8.79289L6.46447 1.17167C6.2692 0.976407 6.2692 0.659824 6.46447 0.464562C6.65973 0.2693 6.97631 0.2693 7.17157 0.464562Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <motion.div
      className={`bg-white border border-white transition-all rounded-full mx-auto max-w-[1425px] mt-6
        flex items-center justify-between px-4
        ${isScrolled ? " text-sm" : "py-3.5 text-sm"}
      `}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0, delay: 0 }}
    >
      {/* Left Arrow */}
      <motion.button
        type="button"
        className="cursor-pointer text-black pl-1 flex items-center justify-center"
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Arrow direction="left" />
      </motion.button>

      {/* Middle Content */}
      <div className="flex items-center gap-2 text-black text-xs  text-center font-semibold">
        <span>
          Add to cart to unlock your free gift 🔓 Limited time only.{" "}
          <Link href="/shop">
            <motion.span
              className=" font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now!
            </motion.span>
          </Link>
        </span>
      </div>

      {/* Right Arrow */}
      <motion.button
        type="button"
        className="cursor-pointer text-black pr-1 flex items-center justify-center"
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Arrow direction="right" />
      </motion.button>
    </motion.div>
  );
}
