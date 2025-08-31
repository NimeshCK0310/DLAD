"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";

// ANIMATION VARIANTS
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
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
const firstSectionImages = [
  {
    src: "process-1.jpg",
    alt: "Founder Story 1",
    className: "w-52 h-70 rounded-2xl shadow-lg border-4 border-gray-300",
    position: "absolute top-0 left-12",
  },
  {
    src: "process-2.jpg",
    alt: "Founder Story 2",
    className: "w-34 h-48 rounded-4xl shadow-lg border-4 border-gray-300",
    position: "absolute top-80 left-4",
  },
  {
    src: "process-4.jpg",
    alt: "Founder Story 4",
    className: "w-50 h-50 rounded-4xl shadow-lg border-4 border-gray-300",
    position: "absolute top-195 left-20",
  },
  {
    src: "process-3.jpg",
    alt: "Founder Story 3",
    className: "w-65 h-65 rounded-3xl shadow-xl border-4 border-gray-300",
    position: "absolute top-140 left-60",
  },
  {
    src: "process-5.jpg",
    alt: "Founder Story 5",
    className: "w-34 h-48 rounded-4xl shadow-md border-4 border-gray-300",
    position: "absolute bottom-0 left-80",
  },
];

export default function FounderStory() {
  return (
    <section>
      <motion.div
        className="bg-ash-100 backdrop-blur-sm p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Staggered Images - Left Side */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative h-100 md:h-[1200px] order-2 xl:order-1"
        >
          {firstSectionImages.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{
                scale: 1.08,
                rotate: index % 2 === 0 ? 3 : -3,
                zIndex: 20,
              }}
              animate={
                index % 2 === 0
                  ? floatAnimation
                  : {
                      y: [5, -8, 5],
                      rotate: [-1, 1, -1],
                      transition: {
                        duration: 3.5,
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />
            </motion.div>
          ))}

          {/* Decorative elements for first section */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-25"
            animate={{
              rotate: [360, 0],
              y: [-12, 12, -12],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text Content - Right Side */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6 order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="absolute -left-6 top-0 w-1.5 h-20 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 80, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1.2 }}
              />
              <motion.p
                className="text-base md:text-lg text-gray-500 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Founder Vince Lebon has been doing shoes for a long time.
              </motion.p>
            </div>

            <motion.p
              className="text-2xl md:text-4xl lg:text-5xl text-gray-800 leading-tight font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              After a decade of designing for some of the biggest names in{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Aussie shoe brands
              </motion.span>
              , Vince felt like something was missing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="relative"
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                He wanted to create a comfortable, on-the-go shoe that felt just as good as it looked.
              </p>
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 1.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 0.6 }}
              className="pt-6"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-blue-700">
                  Crafting comfort since 2014
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};