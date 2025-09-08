"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
      className="grid grid-cols-[1042px]  h-[216px] text-[32px] text-[#15151F] font-['Franklin_Gothic'] font-normal"
    >
      <div>
        <div>
          {/* Logo flush to the very left edge */}
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1, rotate: 0 }}
              className=" w-full m-0 p-0  justify-between items-start grid-1 grid-cols-1"
            >
              <Image
                src={logo}
                alt="Rollie Logo"
                width={250}
                height={190}
                className="object-contain "
              />
            </motion.div>
          </Link>

          {/* Text flush to the very right edge */}
          <motion.p
            variants={itemVariants}
            className="font-normal leading-[2.5rem] text-left pr-0 grid-1 grid-cols-1"
          >
            We are innovators of comfort. Looking good and feeling good
            shouldn&apos;t <br />
            be mutually exclusive. Community, culture, comfort or you – no{" "}
            <br />
            hesitations. We&apos;re all in.
          </motion.p>
        </div>

       
      </div>
    </motion.div>
  );
};

export default FooterBrand;
