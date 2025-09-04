"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textSegments: string[] = [
  "Armed with a simple sketch and a challenge, Rollie Nation was born.",
  "Prior to Rollie, it was believed that making a lightweight, comfortable, and durable shoe wasn’t possible.",
  "Our footwear is everything shoes should be.",
  " Comfy enough for all-day adventures.",
  "Beautifully designed, and wholly unique. Through trial and error, a decade of learning and relearning we’ve perfected our craft.",
];

interface BrandImage {
  src: string;
  alt: string;
  className: string;
  position: string;
}

const secondSectionImages: BrandImage[] = [
  {
    src: "process-6.jpg",
    alt: "Brand Journey 1",
    className:
      "w-64 h-64 md:w-52 md:h-52 sm:w-40 sm:h-40 rounded-3xl shadow-lg border-4 border-gray-300",
    position: "absolute top-0 right-2 left-[200px]",
  },
  {
    src: "process-7.jpg",
    alt: "Brand Journey 2",
    className:
      "w-44 h-44 md:w-32 md:h-32 sm:w-28 sm:h-28 rounded-3xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[50px] left-20",
  },
  {
    src: "process-8.jpg",
    alt: "Brand Journey 3",
    className:
      "w-60 h-72 md:w-44 md:h-56 sm:w-36 sm:h-48 rounded-3xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[100px] right-0 left-[400px]",
  },
  {
    src: "process-9.jpg",
    alt: "Brand Journey 4",
    className:
      "w-65 h-77 md:w-24 md:h-32 sm:w-20 sm:h-28 rounded-3xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[150px] left-60",
  },
];

// Map scroll steps to image indices
const textToImageMap: Record<number, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 3,
  5: 4,
};

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const totalSteps = 6; // total scroll steps
      const idx = Math.min(Math.floor(v * totalSteps), totalSteps - 1);
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] pb-0 bg-[#e7e7e8]"
    >
      <div className="bg-gray-200 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Text Column */}
        <div className="order-1 flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
          {/* Changed line gap (space-y) from larger to smaller values */}

          {/* First paragraph: segments 0–1 */}
          <motion.p
            className="font-light leading-relaxed"
            
            style={{
              paddingLeft: "3rem", // 🔹 increased padding-left
              lineHeight: "1.4em", // 🔹 decreased line gap
              fontSize: "2.8rem",
            }}
          >
            {textSegments.slice(0, 2).map((seg, i) => (
              <span
                key={i}
                className={`transition-all duration-500 ${
                  activeIndex === i
                    ? "text-gray-900 opacity-100"
                    : "text-gray-400 opacity-50"
                }`}
              >
                {seg}{" "}
              </span>
            ))}
          </motion.p>

          {/* Second paragraph: segments 2–4 */}
          <motion.p
            className="font-light leading-relaxed"
            style={{
              paddingLeft: "3rem", // 🔹 increased padding-left
              lineHeight: "1.4em", // 🔹 decreased line gap
              fontSize: "2.8rem",
            }}
          >
            {textSegments.slice(2, 5).map((seg, i) => (
              <span
                key={i}
                className={`transition-all duration-500 ${
                  activeIndex === i + 2
                    ? "text-gray-900 opacity-100"
                    : "text-gray-400 opacity-50"
                }`}
              >
                {seg}{" "}
              </span>
            ))}
          </motion.p>
        </div>

        {/* Images Column */}
        <div className="relative h-[1200px] md:h-[1000px] sm:h-[800px] order-2">
          {secondSectionImages.map((img, i) => {
            const isLinked = textToImageMap[activeIndex] === i;

            return (
              <motion.div
                key={img.src}
                className={`${img.position} ${img.className} overflow-hidden relative`}
                animate={{
                  borderColor: isLinked ? "#000000" : "#d1d5db",
                  opacity: isLinked ? 1 : 0.5,
                  scale: isLinked ? 1.05 : 1,
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
      </div>
    </section>
  );
}
