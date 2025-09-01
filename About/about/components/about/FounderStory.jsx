"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textSegments = [
  "Founder Vince Lebon has been doing shoes for a long time. ",
  "After a decade of designing for some of the biggest names in Aussie shoe brands, Vince felt like something was missing. ",
  "He wanted to create a comfortable, on-the-go shoe that felt just as good as it looked. ",
];

const firstSectionImages = [
  { src: "process-1.jpg", alt: "Founder Story 1", className: "w-52 h-70 rounded-2xl shadow-lg border-4 border-gray-300", position: "absolute top-0 left-12" },
  { src: "process-2.jpg", alt: "Founder Story 2", className: "w-34 h-48 rounded-4xl shadow-lg border-4 border-gray-300", position: "absolute top-90 left-2" },
  { src: "process-3.jpg", alt: "Founder Story 3", className: "w-65 h-65 rounded-3xl shadow-xl border-4 border-gray-300", position: "absolute top-[600px] left-60" },
  { src: "process-4.jpg", alt: "Founder Story 4", className: "w-40 h-40 rounded-4xl shadow-lg border-4 border-gray-300", position: "absolute top-[780px] left-23" },
  { src: "process-5.jpg", alt: "Founder Story 5", className: "w-34 h-48 rounded-4xl shadow-md border-4 border-gray-300", position: "absolute top-[1000px] left-80" },
];

const textToImageMap = {
  0: 0,
  1: 1,
  2: 2,
};

export default function FounderStory() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section ref={sectionRef} className="relative min-h-[200vh]">
      <div className="bg-ash-100 backdrop-blur-sm p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
       
        <div className="relative h-[1100px] order-2 xl:order-1">
          {firstSectionImages.map((img, i) => {
            const isLinked = textToImageMap[activeIndex] === i;
            const isActiveNoText = activeIndex === i && (i === 3 || i === 4);

            return (
              <motion.div
                key={img.src}
                className={`${img.position} ${img.className} overflow-hidden`}
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
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        
        <div className="order-1 lg:order-2 flex flex-col space-y-16">
         
          <motion.p
            className="text-2xl md:text-3xl lg:text-5xl leading-relaxed font-light"
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                color: activeIndex === 0 ? "#111827" : "#9ca3af",
                opacity: activeIndex === 0 ? 1 : 0.5,
                transition: "all 0.6s",
              }}
            >
              {textSegments[0]}
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
            animate={{
              color: activeIndex === 2 ? "#111827" : "#9ca3af",
              opacity: activeIndex === 2 ? 1 : 0.5,
            }}
            transition={{ duration: 0.6 }}
          >
            {textSegments[2]}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
