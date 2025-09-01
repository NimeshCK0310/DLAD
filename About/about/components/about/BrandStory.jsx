"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const textSegments = [
  "Armed with a simple sketch and a challenge, Rollie Nation was born. Prior to Rollie, it was believed that making a lightweight, comfortable, and durable shoe wasn’t possible. We proved them wrong.",
  "Our footwear is everything shoes should be. Comfy enough for all-day adventures, beautifully designed, and wholly unique. Through trial and error, a decade of learning and relearning we’ve perfected our craft and we’re ready to share it with you.",
];


const secondSectionImages = [
  {
    src: "process-6.jpg",
    alt: "Brand Journey 1",
    className: "w-62 h-62 rounded-2xl shadow-lg border-4 border-gray-300",
    position: "absolute top-0 right-12",
  },
  {
    src: "process-7.jpg",
    alt: "Brand Journey 2",
    className: "w-40 h-40 rounded-2xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[300px] left-16",
  },
  {
    src: "process-8.jpg",
    alt: "Brand Journey 3",
    className: "w-52 h-64 rounded-2xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[600px] right-10",
  },
  {
    src: "process-9.jpg",
    alt: "Brand Journey 4",
    className: "w-36 h-44 rounded-2xl shadow-lg border-4 border-gray-300",
    position: "absolute top-[900px] left-20",
  },
];


const textToImageMap = {
  0: 0,
  1: 1,
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
      let idx = Math.floor(v * (totalSteps - 0.8));
      idx = Math.max(0, Math.min(idx, totalSteps - 1));
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh]">
      <div className="bg-gray-50 backdrop-blur-sm p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left — Text */}
        <div className="order-1 lg:order-1 flex flex-col space-y-16">
          {textSegments.map((part, i) => (
            <motion.p
              key={i}
              className="text-2xl md:text-3xl lg:text-5xl leading-relaxed font-light"
              animate={{
                color: activeIndex === i ? "#111827" : "#9ca3af",
                opacity: activeIndex === i ? 1 : 0.5,
              }}
              transition={{ duration: 0.6 }}
            >
              {part}
            </motion.p>
          ))}
        </div>

        {/* Right — Images */}
        <div className="relative h-[1100px] order-2 lg:order-2">
          {secondSectionImages.map((img, i) => {
            const isLinked = textToImageMap[activeIndex] === i;
            const isActiveNoText = activeIndex === i && (i === 2 || i === 3);

            return (
              <motion.div
                key={img.src}
                className={`${img.position} ${img.className} overflow-hidden`}
                animate={{
                  borderColor:
                    isLinked || isActiveNoText ? "#000000" : "#d1d5db",
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
