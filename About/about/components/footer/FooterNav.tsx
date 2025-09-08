"use client";

import React from "react";
import { motion } from "framer-motion";
import FooterShop from "./FooterShop";
import FooterHelp from "./FooterHelp";
import FooterContact from "./FooterContact";

const FooterNav: React.FC = () => {
  return (
    <motion.div
      variants={{ hidden: {}, show: {} }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 row-start-2" // start from row 2
    >
      {/* Help on the left */}
      <FooterHelp />

      {/* Shop + Contact stacked on the right */}
      <div className="space-y-6">
        <FooterShop />
        <FooterContact />
      </div>
    </motion.div>
  );
};

export default FooterNav;
