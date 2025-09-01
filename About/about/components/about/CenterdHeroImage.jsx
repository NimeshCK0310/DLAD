"use client";

import React from "react";
import Image from "next/image";

const CenteredHeroImage = () => {
  const src = "/images/hero.jpg";
  const alt = "Hero image for the about page";

  return (
    <div className="flex justify-center items-start w-screen h-screen p-3 md:p-5 lg:p-10 pt-0">
      <div className="relative w-full max-w-8xl h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 90vw, 80vw"
        />
      </div>
    </div>
  );
};

export default CenteredHeroImage;
