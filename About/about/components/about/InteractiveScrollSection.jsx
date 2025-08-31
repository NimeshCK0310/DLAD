"use client";

import { useRef, useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    image: "hero-2.jpg",
    title: "It starts with a sketch",
    subtitle:
      "Beautifully designed and wholly unique that reimagines the idea of what a shoe can be.",
  },
  {
    image: "hero-3.png",
    title: "We combine the latest technology with technical design",
    subtitle: "Creating a wearing experience like no other.",
  },
  {
    image: "hero-4.png",
    title: "Precision in every detail",
    subtitle: "From concept to final product, every step is crafted with care.",
  },
];

export default function RollieScrollAligned() {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [virtualScroll, setVirtualScroll] = useState(0);
  const scrollsPerImage = 2;
  const totalScrollSteps = steps.length * scrollsPerImage;
  const isAnimatingRef = useRef(false);

  // Wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      const delta = Math.sign(e.deltaY);
      if (delta === 0) return;
      if (
        (delta > 0 && virtualScroll < totalScrollSteps - 1) ||
        (delta < 0 && virtualScroll > 0)
      ) {
        e.preventDefault();
      } else return;
      if (isAnimatingRef.current) return;

      const nextScroll = Math.max(
        0,
        Math.min(virtualScroll + delta, totalScrollSteps - 1)
      );
      if (nextScroll === virtualScroll) return;

      isAnimatingRef.current = true;
      animate(virtualScroll, nextScroll, {
        type: "spring",
        stiffness: 300,
        damping: 35,
        onUpdate: (latest) => setVirtualScroll(Math.round(latest)),
        onComplete: () => {
          setCurrentStep(Math.floor(nextScroll / scrollsPerImage));
          isAnimatingRef.current = false;
        },
      });
    };

    const section = sectionRef.current;
    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [virtualScroll]);

  // Touch scroll
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      const delta = Math.sign(touchStartY - e.touches[0].clientY);
      if (delta === 0) return;
      if (
        (delta > 0 && virtualScroll < totalScrollSteps - 1) ||
        (delta < 0 && virtualScroll > 0)
      ) {
        e.preventDefault();
      } else return;
      if (isAnimatingRef.current) return;

      const nextScroll = Math.max(
        0,
        Math.min(virtualScroll + delta, totalScrollSteps - 1)
      );
      if (nextScroll === virtualScroll) return;

      isAnimatingRef.current = true;
      animate(virtualScroll, nextScroll, {
        type: "spring",
        stiffness: 300,
        damping: 35,
        onUpdate: (latest) => setVirtualScroll(Math.round(latest)),
        onComplete: () => {
          setCurrentStep(Math.floor(nextScroll / scrollsPerImage));
          isAnimatingRef.current = false;
        },
      });

      touchStartY = e.touches[0].clientY;
    };

    const section = sectionRef.current;
    section.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const currentData = steps[currentStep];
  const circleProgress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row justify-between items-start px-8 lg:px-24 pt-8 lg:pt-16">
        {/* Left side: topic + image */}
        <div className="flex flex-col items-start gap-2 lg:w-1/2">
          <div>
            <p className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase">
              DESIGN PROCESS
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mt-0.5">
              Designed to <span className="block">Precision</span>
            </h2>
          </div>

          <div className="relative w-full max-w-full h-[800px] md:h-[850px] lg:h-[1000px] gap-40 pb-120">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              <Image
                src={`/images/${currentData.image}`}
                alt={`Step ${currentStep + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Right side: step info + progress */}
        <div className="flex flex-col items-start lg:w-1/2 gap-4 lg:gap-6 mt-4 lg:mt-0 pt-50 pl-20">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              {currentData.title}
            </p>
            <p className="text-lg text-gray-600 mt-1">{currentData.subtitle}</p>
          </motion.div>

          {/* Circular progress */}
          <div className="relative w-40 h-40 mt-4">
            <svg width="160" height="160" className="transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="72"
                stroke="#e5e7eb"
                strokeWidth="2"
                fill="transparent"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="72"
                stroke="#000"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={452} // 2 * π * 72
                strokeDashoffset={452 - (452 * circleProgress) / 100}
                strokeLinecap="round"
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg md:text-sm  text-gray-700">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scrolling */}
      {/* <div style={{ height: "20vh" }} /> */}
    </section>
  );
}
