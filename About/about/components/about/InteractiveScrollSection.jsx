"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// INTERACTIVE SCROLL DATA
const steps = [
  {
    image: "hero-2.jpg",
    title: "It starts with a sketch",
    subtitle: "beautifully designed and wholly unique that reimagines the idea of what a shoe can be.",
    progress: 0.33,
  },
  {
    image: "hero-3.png",
    title: "We then take the latest technology and marry it with technical design",
    subtitle: "to create a wearing experience like no other.",
    progress: 0.66,
  },
  {
    image: "hero-4.png",
    title: "We then take the latest technology and marry it with technical design",
    subtitle: "to create a wearing experience like no other.",
    progress: 1,
  },
];

export default function InteractiveScrollSection() {
  // SCROLL INTERACTION LOGIC
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stepProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0, 1, 2, 2]
  );

  useEffect(() => {
    const unsubscribe = stepProgress.on("change", (latest) => {
      setCurrentStep(Math.floor(latest));
    });
    return unsubscribe;
  }, [stepProgress]);

  const currentStepData = steps[Math.min(currentStep, steps.length - 1)];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Text Content - Changes with scroll */}
            <motion.div className="space-y-8 order-2 lg:order-1">
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight"
                key={`title-${currentStep}`}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Designed to{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  Precision
                </motion.span>
              </motion.h2>

              <motion.div
                key={`content-${currentStep}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.p
                  className={`text-xl md:text-2xl lg:text-3xl leading-relaxed transition-all duration-500 ${
                    currentStep === 0
                      ? "font-bold text-gray-800"
                      : "font-normal text-gray-600"
                  }`}
                >
                  {currentStepData.title}
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  animate={{
                    opacity: currentStep === 0 ? 0.7 : 1,
                    fontWeight: currentStep > 0 ? 600 : 400,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {currentStepData.subtitle}
                </motion.p>
              </motion.div>

              {/* Progress Circle */}
              <motion.div className="flex items-center gap-4 pt-8">
                <div className="relative">
                  <svg width="80" height="80" className="transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="rgb(229, 231, 235)"
                      strokeWidth="3"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="rgb(37, 99, 235)"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={220}
                      strokeDashoffset={220 - 220 * currentStepData.progress}
                      strokeLinecap="round"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: currentStep > 0 ? 1.1 : 1,
                      color: currentStep > 0 ? "rgb(37, 99, 235)" : "rgb(107, 114, 128)",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-sm font-semibold">
                      {Math.round(currentStepData.progress * 100)}%
                    </span>
                  </motion.div>
                </div>

                <motion.button
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-500 ${
                    currentStep > 0
                      ? "border-blue-500 text-blue-600 bg-blue-50"
                      : "border-gray-300 text-gray-500 hover:border-gray-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image that changes with scroll */}
            <motion.div className="relative h-96 md:h-[600px] order-1 lg:order-2">
              <motion.div
                key={`image-${currentStep}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={`/images/${currentStepData.image}`}
                  alt={`Design Step ${currentStep + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Floating elements around the shoe */}
                <motion.div
                  className="absolute top-1/4 right-8 w-4 h-4 bg-blue-500 rounded-full opacity-60"
                  animate={{
                    y: [-10, 10, -10],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-12 w-3 h-3 bg-purple-500 rounded-full opacity-70"
                  animate={{
                    x: [-8, 8, -8],
                    y: [5, -5, 5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-8 w-2 h-2 bg-teal-500 rounded-full opacity-50"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Step Indicators */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index <= currentStep ? "bg-blue-500" : "bg-gray-300"
              }`}
              animate={{
                scale: index === currentStep ? 1.3 : 1,
                opacity: index <= currentStep ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 w-32 h-32 bg-gradient-to-br from-teal-200/10 to-green-200/10 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}