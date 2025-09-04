"use client";

import React, { FC } from "react";
import Image from "next/image";

const CenteredHeroImage: FC = () => {
  const src: string = "/images/hero.jpg";
  const alt: string = "Hero image for the about page";

  return (
    <section className="relative w-screen h-[110vh] bg-[#e7e7e8] flex justify-center items-center overflow-hidden">
      {/* Image container stays full section size */}
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={900}   // smaller width
            height={450}  // maintain aspect ratio
            className="block max-w-none h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CenteredHeroImage;
