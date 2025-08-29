"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Image data with custom positioning and sizes
  const imageData = [
    { 
      src: "process-1.jpg", 
      alt: "Shoe Design Process 1",
      className: "w-32 h-40 rounded-xl shadow-lg",
      position: "absolute top-0 left-8",
      delay: 0
    },
    { 
      src: "process-2.jpg", 
      alt: "Shoe Design Process 2", 
      className: "w-28 h-36 rounded-lg shadow-md",
      position: "absolute top-16 right-4",
      delay: 0.2
    },
    { 
      src: "process-3.jpg", 
      alt: "Shoe Design Process 3",
      className: "w-40 h-32 rounded-2xl shadow-xl",
      position: "absolute top-52 left-0",
      delay: 0.4
    },
    { 
      src: "process-4.jpg", 
      alt: "Shoe Design Process 4",
      className: "w-36 h-44 rounded-lg shadow-lg",
      position: "absolute top-72 right-8",
      delay: 0.6
    },
    { 
      src: "process-5.jpg", 
      alt: "Shoe Design Process 5",
      className: "w-32 h-32 rounded-full shadow-md",
      position: "absolute bottom-8 left-16",
      delay: 0.8
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-8 md:p-16 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Staggered Images Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] order-2 lg:order-1"
          >
            {imageData.map((img, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: index % 2 === 0 ? 2 : -2,
                  zIndex: 10
                }}
                animate={index % 2 === 0 ? floatAnimation : {
                  y: [5, -5, 5],
                  transition: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className={`${img.position} ${img.className} cursor-pointer group`}
                style={{ zIndex: 5 - index }}
              >
                <Image
                  src={`/images/${img.src}`}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />
              </motion.div>
            ))}
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-25"
              animate={{
                rotate: [360, 0],
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div 
                  className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
                <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light">
                  Founder Vince Lebon has been doing shoes for a long time.
                </p>
              </div>
              
              <motion.p 
                className="text-xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                After a decade of designing for some of the biggest names in
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                >
                  {" "}Aussie shoe brands
                </motion.span>
                , Vince felt like something was missing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="relative"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  He wanted to create a comfortable, on-the-go shoe that felt just
                  as good as it looked.
                </p>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 1 }}
                />
              </motion.div>

              {/* Call-to-action or additional info */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="pt-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700">
                    Crafting comfort since 2014
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: cubicBezier(0.42, 0, 0.58, 1) },
  },
};

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-white max-w-full mx-auto px-0 pt-4">
        <section className="py-14 md:py-5 bg-white">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="mt-4 text-10xl md:text-8xl text-gray-900 text-left tracking-tight pl-6">
              The Spark of <br /> Inspiration
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"></div>
        </section>

        {/* body Section-1 */}
        <section className="py-12 md:py-1 bg-white">
          <div className="bg-white p-8 md:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start shadow-xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-3 items-start"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
                {[
                  "process-1.jpg",
                  "process-2.jpg",
                  "process-3.jpg",
                  "process-4.jpg",
                  "process-5.jpg",
                ].map((img, i) => (
                  <motion.div key={i} variants={scaleUp}>
                    <Image
                      src={`/images/${img}`}
                      alt={`Process Image ${i + 1}`}
                      width={540}
                      height={360}
                      className="rounded-lg w-full hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-5xl text-gray-600 leading-relaxed text-left max-w-3xl font-medium">
                Founder Vince Lebon has been doing shoes for a long time. After
                a decade of designing for some of the biggest names in Aussie
                shoe brands, Vince felt like something was missing.
                <br />
                He wanted to create a comfortable, on-the-go shoe that felt just
                as good as it looked.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
          <Image
            src="/images/hero.jpg"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="bg-white p-8 md:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start shadow-xl">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="mt-4 text-gray-700 text-4xl md:text-5xl leading-tight text-shadow-sm">
                Armed with a simple sketch and a challenge, Rollie Nation was
                born. Prior to Rollie, it was believed that making a
                lightweight, comfortable, and durable shoe wasn’t possible. We
                proved them wrong. Our footwear is everything shoes should be.
                Comfy enough for all-day adventures, beautifully designed, and
                wholly unique. Through trial and error, a decade of learning and
                relearning we’ve perfected our craft and we’re ready to share it
                with you.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
                {[
                  "process-6.jpg",
                  "process-7.jpg",
                  "process-8.jpg",
                  "process-9.jpg",
                ].map((img, i) => (
                  <motion.div key={i} variants={scaleUp}>
                    <Image
                      src={`/images/${img}`}
                      alt={`Process Image ${i + 6}`}
                      width={540}
                      height={360}
                      className="rounded-lg w-full hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
          <Image
            src="/images/hero-2.jpg"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </section>

        <section
          id="process"
          className="py-12 md:py-20 bg-white section-divider"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide"
              >
                Designed to Precision
              </motion.h2>

              <motion.p
                variants={fadeInLeft}
                className="mt-6 text-xl text-gray-600 leading-relaxed"
              >
                It starts with a sketch and ends with rigorous comfort testing —
                we combine design, materials, and tech.
              </motion.p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Sketch & concept",
                "Prototyping & Materials",
                "Comfort testing",
              ].map((t) => (
                <motion.div
                  key={t}
                  variants={scaleUp}
                  className="card p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-xl text-gray-900">{t}</h3>
                  <p className="mt-4 text-gray-600">
                    Short description about {t.toLowerCase()} describing our
                    steps and care.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-12 bg-white">
          <div className="bg-white p-8 md:p-12 rounded-xl text-center shadow-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
              Let’s stay in touch
            </h4>

            <p className="mt-4 text-lg text-gray-600">
              Stay in the loop, with exclusive offers and product previews.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
              <input
                className="px-6 py-3 rounded-md border border-gray-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email..."
              />
              <button className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
