"use client";

import React, { FC } from "react";
import Image from "next/image";

const CenteredHeroImage: FC = () => {
  const src: string = "/images/hero.jpg";
  const alt: string = "Hero image for the about page";

  return (
    <section className="relative w-screen h-[110vh] bg-gray-200 flex justify-center items-center overflow-hidden">
      {/* Hero Image */}
      <div className="relative w-full max-w-8xl h-[95vh] -mt-20">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
        />
      </div>
    </section>
  );
};

export default CenteredHeroImage;
