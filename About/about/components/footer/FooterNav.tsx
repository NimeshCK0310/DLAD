"use client";

import FooterHelp from "./FooterHelp";
import FooterShop from "./FooterShop";
import FooterContact from "./FooterContact";

export default function FooterNav() {
  return (
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <FooterHelp />
      <FooterShop />
      <FooterContact />
    </div>
  );
}
