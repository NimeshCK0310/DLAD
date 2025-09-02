"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";

type Step = {
  image: string;
  title: string;
  subtitle: string;
};

const steps: Step[] = [
  {
    image: "hero-5.jpg",
    title: "It starts with a sketch",
    subtitle:
      "Beautifully designed and wholly unique that reimagines the idea of what a shoe can be.",
  },
  {
    image: "hero-4.png",
    title: "We combine the latest technology with technical design",
    subtitle: "Creating a wearing experience like no other.",
  },
  {
    image: "hero-3.png",
    title: "Precision in every detail",
    subtitle: "From concept to final product, every step is crafted with care.",
  },
];

export default function RollieScrollAligned() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [virtualScroll, setVirtualScroll] = useState(0);
  const isAnimatingRef = useRef(false);

  const scrollsPerImage = 1.5;
  const totalScrollSteps = steps.length * scrollsPerImage;

  // Stable function with useCallback to fix hook warnings
  const triggerScroll = useCallback(
    (nextScroll: number) => {
      isAnimatingRef.current = true;
      animate(virtualScroll, nextScroll, {
        type: "tween",
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // easeInOut cubic bezier
        onUpdate: (latest) => setVirtualScroll(Math.round(latest)),
        onComplete: () => {
          setCurrentStep(Math.floor(nextScroll / scrollsPerImage));
          isAnimatingRef.current = false;
        },
      });
    },
    [virtualScroll]
  );

  // Wheel scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
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

      triggerScroll(nextScroll);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (section) {
        section.removeEventListener("wheel", handleWheel);
      }
    };
  }, [virtualScroll, totalScrollSteps, triggerScroll]);

  // Touch scrolling
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
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

      triggerScroll(nextScroll);
      touchStartY = e.touches[0].clientY;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      section.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener("touchstart", handleTouchStart);
        section.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [virtualScroll, totalScrollSteps, triggerScroll]);

  const currentData = steps[currentStep];
  const circleProgress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] bg-white rounded-4xl"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row justify-between items-start px-6 sm:px-8 lg:px-24 pt-6 lg:pt-16">
        {/* Left side (title + image) */}
        <div className="flex flex-col items-start gap-4 lg:w-1/2">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase">
              DESIGN PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mt-1">
              Designed to <span className="block">Precision</span>
            </h2>
          </div>

          {/* Image container */}
          <div className="relative w-full h-[420px] sm:h-[540px] md:h-[700px] lg:h-[850px] mt-4 flex items-start justify-center">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={`/images/${currentData.image}`}
                alt={`Step ${currentStep + 1}`}
                fill
                className={`object-contain ${
                  currentData.image === "hero-2.png" ? "object-center" : "object-top"
                }`}
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Right side (text + progress) */}
        <div className="flex flex-col items-start lg:w-1/2 gap-4 lg:gap-6 mt-6 lg:mt-0 lg:pl-12 lg:pt-0">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 pt-40">
              {currentData.title}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mt-2">
              {currentData.subtitle}
            </p>
          </motion.div>

          {/* Progress Circle */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mt-6">
            <svg width="100%" height="100%" className="transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="transparent"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#000"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={565}
                strokeDashoffset={565 - (565 * circleProgress) / 100}
                strokeLinecap="round"
                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-base sm:text-lg md:text-xl font-medium text-gray-700">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
