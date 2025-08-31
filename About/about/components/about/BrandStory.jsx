"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";

// ANIMATION VARIANTS
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    rotate: -10,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
    },
  },
};

const floatAnimation = {
  y: [-8, 8, -8],
  rotate: [-2, 2, -2],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// IMAGE DATA
const secondSectionImages = [
  {
    src: "process-6.jpg",
    alt: "Brand Journey 1",
    className: "w-62 h-62 rounded-4xl shadow-lg border-4 border-gray-300",
    position: "absolute top-1 right-45",
  },
  {
    src: "process-7.jpg",
    alt: "Brand Journey 2",
    className: "w-35 h-35 rounded-4xl shadow-md border-4 border-gray-300",
    position: "absolute top-75 left-35",
  },
  {
    src: "process-8.jpg",
    alt: "Brand Journey 3",
    className: "w-50 h-68 rounded-4xl shadow-xl border-4 border-gray-300",
    position: "absolute top-120 right-2",
  },
  {
    src: "process-9.jpg",
    alt: "Brand Journey 4",
    className: "w-30 h-38 rounded-2xl shadow-lg",
    position: "absolute bottom-16 left-12",
  },
];

export default function BrandStory() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl border border-gray-100 relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Content - Left Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8 order-1 lg:order-1"
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                <motion.p
                  className="text-base md:text-lg text-gray-500 leading-relaxed font-light"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Armed with a simple sketch and a challenge, Rollie Nation was born.
                </motion.p>
              </div>

              <motion.p
                className="text-xl md:text-3xl lg:text-4xl text-gray-800 leading-tight font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Prior to Rollie, it was believed that making a{" "}
                <motion.span
                  className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  lightweight, comfortable, and durable shoe
                </motion.span>{" "}
                wasn't possible.
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                We proved them wrong.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="relative"
              >
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Our footwear is everything shoes should be. Comfy enough for all-day adventures, 
                  beautifully designed, and wholly unique. Through trial and error, a decade of 
                  learning and relearning we've perfected our craft and we're ready to share it with you.
                </p>
                <motion.div
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 1.2 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Staggered Images - Right Side */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] order-2 lg:order-2"
          >
            {secondSectionImages.map((img, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: index % 2 === 0 ? -4 : 4,
                  zIndex: 20,
                }}
                animate={
                  index % 3 === 0
                    ? floatAnimation
                    : {
                        y: [8, -5, 8],
                        x: [-2, 2, -2],
                        transition: {
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
                className={`${img.position} ${img.className} cursor-pointer group overflow-hidden`}
                style={{ zIndex: 10 - index }}
              >
                <Image
                  src={`/images/${img.src}`}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-115 group-hover:brightness-110 transition-all duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}

            {/* Decorative elements for second section */}
            <motion.div
              className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-teal-300/30 to-blue-400/30 rounded-full opacity-40"
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};