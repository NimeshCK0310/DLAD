"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Split the text into 4 segments, one per image
const textSegments = [
  "Armed with a simple sketch and a challenge, Rollie Nation was born.",           // segment 0
  "Prior to Rollie, it was believed that making a lightweight, comfortable, and durable shoe wasn’t possible.", // segment 1
  "Our footwear is everything shoes should be. Comfy enough for all-day adventures.", // segment 2
  "Beautifully designed, and wholly unique. Through trial and error, a decade of learning and relearning we’ve perfected our craft." // segment 3
];

// Images
const secondSectionImages = [
  { src: "process-6.jpg", alt: "Brand Journey 1", className: "w-62 h-62 rounded-2xl shadow-lg border-4 border-gray-300", position: "absolute top-0 right-12" },
  { src: "process-7.jpg", alt: "Brand Journey 2", className: "w-40 h-40 rounded-2xl shadow-lg border-4 border-gray-300", position: "absolute top-[300px] left-16" },
  { src: "process-8.jpg", alt: "Brand Journey 3", className: "w-52 h-64 rounded-2xl shadow-lg border-4 border-gray-300", position: "absolute top-[600px] right-10" },
  { src: "process-9.jpg", alt: "Brand Journey 4", className: "w-36 h-44 rounded-2xl shadow-lg border-4 border-gray-300", position: "absolute top-[900px] left-20" },
];

// Map each text segment to its image
const textToImageMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
};

export default function BrandStory() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const totalSteps = secondSectionImages.length;
      const idx = Math.min(Math.floor(v * totalSteps), totalSteps - 1);
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh]">
      <div className="bg-gray-50 backdrop-blur-sm p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left — Text (2 paragraphs, each combining 2 segments) */}
        <div className="order-1 lg:order-1 flex flex-col space-y-16">
          <motion.p
            className="text-2xl md:text-3xl lg:text-5xl leading-relaxed font-light"
          >
            <span
              style={{
                color: activeIndex === 0 ? "#111827" : "#9ca3af",
                opacity: activeIndex === 0 ? 1 : 0.5,
                transition: "all 0.6s",
              }}
            >
              {textSegments[0]}{" "}
            </span>
            <span
              style={{
                color: activeIndex === 1 ? "#111827" : "#9ca3af",
                opacity: activeIndex === 1 ? 1 : 0.5,
                transition: "all 0.6s",
              }}
            >
              {textSegments[1]}
            </span>
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl lg:text-5xl leading-relaxed font-light"
          >
            <span
              style={{
                color: activeIndex === 2 ? "#111827" : "#9ca3af",
                opacity: activeIndex === 2 ? 1 : 0.5,
                transition: "all 0.6s",
              }}
            >
              {textSegments[2]}{" "}
            </span>
            <span
              style={{
                color: activeIndex === 3 ? "#111827" : "#9ca3af",
                opacity: activeIndex === 3 ? 1 : 0.5,
                transition: "all 0.6s",
              }}
            >
              {textSegments[3]}
            </span>
          </motion.p>
        </div>

        {/* Right — Images */}
        <div className="relative h-[1100px] order-2 lg:order-2">
          {secondSectionImages.map((img, i) => {
            const isLinked = textToImageMap[activeIndex] === i;

            return (
              <motion.div
                key={img.src}
                className={`${img.position} ${img.className} overflow-hidden`}
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
