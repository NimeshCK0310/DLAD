"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function NavIcons() {
  return (
    <motion.div className="flex items-center gap-7">
      {" "}
      <MagnifyingGlassIcon className="w-7 h-7 cursor-pointer text-gray-600" />
      <HeartIcon className="w-7 h-7 cursor-pointer text-gray-600" />
      <UserIcon className="w-7 h-7 cursor-pointer text-gray-600" />
      <motion.div
        className="relative w-8 h-8 flex items-center justify-center bg-[#3f3f3f] text-white text-xs rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0, repeat: Infinity }}
      >
        0
      </motion.div>
    </motion.div>
  );
}
