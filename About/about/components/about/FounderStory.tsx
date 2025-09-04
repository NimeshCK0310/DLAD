"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  position?: string;
}

const firstSectionImages: FounderImage[] = [
  {
    src: "process-1.jpg",
    alt: "Founder Story 1",
    className:
      "w-68 h-96 md:w-52 md:h-72 sm:w-40 sm:h-56 rounded-4xl shadow-lg border-4 border-gray-300",
  },
  {
    src: "process-2.jpg",
    alt: "Founder Story 2",
    className:
      "w-28 h-53 md:w-30 md:h-43 sm:w-22 sm:h-43 rounded-4xl shadow-lg border-4 border-gray-300",
    position:
      "absolute top-[250px] left-18 md:top-[370px] md:left-14 sm:top-[300px] sm:left-9",
  },
  {
    src: "process-3.jpg",
    alt: "Founder Story 3",
    className:
      "w-58 h-58 max-w-[400px] md:max-w-[300px] sm:max-w-[220px] rounded-3xl shadow-xl border-4 border-gray-300",
    position:
      "absolute top-[320px] left-[75%] transform -translate-x-1/2 md:top-[400px] md:left-[75%] sm:top-[230px] sm:left-[75%]",
  },
  {
    src: "process-4.jpg",
    alt: "Founder Story 4",
    className:
      "w-55 h-55 md:w-36 md:h-36 sm:w-32 sm:h-32 rounded-4xl shadow-lg border-4 border-gray-300",
    position:
      "absolute top-[380px] left-65 md:top-[370px] md:left-[160px] sm:top-[380px] sm:left-[35px]",
  },
  {
    src: "process-5.jpg",
    alt: "Founder Story 5",
    className:
      "w-22 h-58 md:w-31 md:h-50 sm:w-26 sm:h-38 rounded-4xl shadow-md border-4 border-gray-300",
    position:
      "absolute top-[440px] left-[420px] md:top-[440px] md:left-[340px] sm:top-[410px] sm:left-[220px]",
  },
];

// 🔹 Updated mapping: Each scroll step corresponds to one image
const scrollStepToImageMap: Record<number, number> = {
  0: 0, // segment 1 → process-1
  1: 0, // segment 2 → process-1
  2: 1, // segment 3 → process-2
  3: 2, // segment 3 → process-3
  4: 3, // after text → process-4
  5: 4, // after text → process-5
};

export default function FounderStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yProcess1 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const totalSteps = 6; // total scroll steps
      let idx = Math.floor(v * totalSteps);
      idx = Math.max(0, Math.min(idx, totalSteps - 1));
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] bg-[#e7e7e8] pt-0 mt-0 pb-20"
    >
      <div className="backdrop-blur-sm grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
        {/* Images Column */}
        <div className="relative h-[1300px] md:h-[1070px] sm:h-[950px] order-2 xl:order-1 pt-0 lg:col-span-2">
          {firstSectionImages.map((img, i) => {
            const isLinked = scrollStepToImageMap[activeIndex] === i;

            // Individual spotlight for process-4 and process-5
            const isActiveNoText =
              !Object.keys(scrollStepToImageMap).includes(
                String(activeIndex)
              ) && i >= 3;

            if (i === 0) {
              return (
                <motion.div
                  key={img.src}
                  className={`${img.className} absolute top-[-17px] left-24 overflow-hidden z-10`}
                  style={{ y: yProcess1 }}
                  animate={{
                    borderColor:
                      isLinked || isActiveNoText ? "#15151f" : "#d1d5db",
                    opacity: isLinked || isActiveNoText ? 1 : 0.6,
                    scale: isLinked || isActiveNoText ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
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
            }

            return (
              <motion.div
                key={img.src}
                className={`${img.position} ${img.className} overflow-hidden relative`}
                animate={{
                  borderColor:
                    isLinked || isActiveNoText ? "#15151f" : "#d1d5db",
                  opacity: isLinked || isActiveNoText ? 1 : 0.6,
                  scale: isLinked || isActiveNoText ? 1.05 : 1,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
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

        {/* Text Column */}
        <div
          className="order-1 lg:order-2 flex flex-col space-y-2.3 md:space-y-3.8 lg:space-y-4.8
             pt-4 sm:pt-6 md:pt-8 lg:pt-10
             pl-4 sm:pl-6 md:pl-8 lg:pl-18
             pr-18 lg:pr-23
             lg:col-span-3"
        >
          <motion.p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug font-light">
            <span
              className={`transition-all duration-500 ${
                activeIndex === 0
                  ? "text-gray-900 opacity-100"
                  : "text-gray-400 opacity-50"
              }`}
            >
              {textSegments[0]}
            </span>
            <span
              className={`transition-all duration-500 ${
                activeIndex === 1
                  ? "text-gray-900 opacity-100"
                  : "text-gray-400 opacity-50"
              }`}
            >
              {textSegments[1]}
            </span>
          </motion.p>

          <motion.p
            className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug font-light transition-all duration-500 ${
              activeIndex === 2 || activeIndex === 3
                ? "text-gray-900 opacity-100"
                : "text-gray-400 opacity-50"
            }`}
          >
            {textSegments[2]}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
