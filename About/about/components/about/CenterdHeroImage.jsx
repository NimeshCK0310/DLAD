"use client";

import React from "react";
import Image from "next/image";

const CenteredHeroImage = () => {
  // Hardcoded image path and alt text
  const src = "/images/hero.jpg";
  const alt = "Hero image for the about page";

  return (
    <div className="flex justify-center items-center w-full py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
      <div className="relative w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredHeroImage;
