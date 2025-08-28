"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-gray-100">
      {/* Promo Bar */}
      <div className="bg-white  text-black py-2 px-4 flex items-center justify-between text-sm rounded-full max-w-4xl mx-auto mt-2">
        <span className="cursor-pointer">←</span>
        <p>
          Further{" "}
          <span className="font-semibold  ">30% off all Archive Sale</span>{" "}
          <Link href="/archive-sale">
            <button className="ml-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
              Shop Now
            </button>
          </Link>
        </p>
        <span className="cursor-pointer">→</span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <button className="ml-2 px-6 py-3 text-black text-6xl font-bold transform -rotate-15 rounded-full">
            rollie
          </button>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 items-center text-sm font-medium  text-black  bg-white px-6 py-3 rounded-2xl shadow-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/behind-rollie">Behind Rollie</Link>
          <Link href="/archive-sale" className="flex items-center gap-1">
            <LockClosedIcon className="w-5 h-5" /> Archive Sale
          </Link>
          <Link href="/rewards" className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer" />
          <HeartIcon className="w-5 h-5 cursor-pointer" />
          <UserIcon className="w-5 h-5 cursor-pointer" />
          <div className="relative flex items-center justify-center">
            <ShoppingCartIcon className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
