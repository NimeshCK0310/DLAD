"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import FooterNewsletter from "./FooterNewsletter";
import logo from "../../public/images/Images1/logo.svg";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const FooterBrand: React.FC = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="lg:col-span-2 row-start-1 mb-10" // spans both columns in row 1
    >
      <div className="flex items-center gap-6 mb-8">
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="cursor-pointer flex-shrink-0"
          >
            <Image
              src={logo}
              alt="Rollie Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </motion.div>
        </Link>

        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg"
        >
          We are innovators of comfort. Looking good and feeling good
          shouldn&apos;t be mutually exclusive. Community, culture, comfort or
          you – no hesitations. We&apos;re all in.
        </motion.p>
      </div>

      <FooterNewsletter />
    </motion.div>
  );
};

export default FooterBrand;
