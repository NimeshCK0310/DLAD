"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textSegments: string[] = [
  "Founder Vince Lebon has been doing shoes for a long time. ",
  "After a decade of designing for some of the biggest names in Aussie shoe brands, Vince felt like something was missing. ",
  "He wanted to create a comfortable, on-the-go shoe that felt just as good as it looked. ",
];

interface FounderImage {
  src: string;
  alt: string;
  className: string;
  position: string;
}

const firstSectionImages: FounderImage[] = [
  {
    src: "process-1.jpg",
    alt: "Founder Story 1",
    className: "w-72 h-96 md:w-52 md:h-72 sm:w-40 sm:h-56 rounded-4xl shadow-lg border-4 border-gray-300",
    position: "absolute top-0 left-12",
  },
  {
    src: "process-2.jpg",
    alt: "Founder Story 2",
    className: "w-52 h-72 md:w-36 md:h-52 sm:w-28 sm:h-40 rounded-4xl shadow-lg border-4 border-gray-300",
    position: "absolute top-10 left-2",
  },
  {
    src: "process-3.jpg",
    alt: "Founder Story 3",
    className: "w-72 h-72 md:w-60 md:h-60 sm:w-48 sm:h-48 rounded-3xl shadow-xl border-4 border-gray-300",
    position: "absolute top-[50px] left-60",
  },
  {
    src: "process-4.jpg",
    alt: "Founder Story 4",
    className: "w-48 h-48 md:w-36 md:h-36 sm:w-32 sm:h-32 rounded-4xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[39px] left-30",
  },
  {
    src: "process-5.jpg",
    alt: "Founder Story 5",
    className: "w-44 h-60 md:w-36 md:h-52 sm:w-28 sm:h-40 rounded-4xl shadow-md border-4 border-gray-300",
    position: "absolute top-[110px] left-70",
  },
];


const textToImageMap: Record<number, number> = {
  0: 0,
  1: 1,
  2: 2,
};

export default function FounderStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const totalSteps = firstSectionImages.length;
      let idx = Math.floor(v * (totalSteps - 0.8));
      idx = Math.max(0, Math.min(idx, totalSteps - 1));
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh]">
      <div className=" bg-gray-200 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Images Section */}
        <div className="relative h-[1250px] md:h-[1050px] sm:h-[850px] order-2 xl:order-1">
          {firstSectionImages.map((img, i) => {
            const isLinked = textToImageMap[activeIndex] === i;
            const isActiveNoText = activeIndex === i && (i === 3 || i === 4);

            return (
              <motion.div
                key={img.src}
                className={`${img.position} ${img.className} overflow-hidden relative`}
                animate={{
                  borderColor: isLinked || isActiveNoText ? "#000000" : "#d1d5db",
                  opacity: isLinked || isActiveNoText ? 1 : 0.5,
                  scale: isLinked || isActiveNoText ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 10 - i }}
              >
                <Image
                  src={`/images/${img.src}`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2 flex flex-col space-y-8 md:space-y-12 lg:space-y-16">
          <motion.p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-relaxed font-light">
            <span
              className={`transition-all duration-500 ${
                activeIndex === 0 ? "text-gray-900 opacity-100" : "text-gray-400 opacity-50"
              }`}
            >
              {textSegments[0]}
            </span>
            <span
              className={`transition-all duration-500 ${
                activeIndex === 1 ? "text-gray-900 opacity-100" : "text-gray-400 opacity-50"
              }`}
            >
              {textSegments[1]}
            </span>
          </motion.p>

          <motion.p
            className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-relaxed font-light transition-all duration-500 ${
              activeIndex === 2 ? "text-gray-900 opacity-100" : "text-gray-400 opacity-50"
            }`}
          >
            {textSegments[2]}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
