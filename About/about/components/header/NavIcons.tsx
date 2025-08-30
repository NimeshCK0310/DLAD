"use client";

import { motion } from "framer-motion";
import { MagnifyingGlassIcon, HeartIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function NavIcons() {
  return (
    <motion.div className="flex items-center gap-6">
      <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600" />
      <HeartIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-500" />
      <UserIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600" />
      <div className="relative">
        <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600" />
        <motion.span
          className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          0
        </motion.span>
      </div>
    </motion.div>
  );
}
