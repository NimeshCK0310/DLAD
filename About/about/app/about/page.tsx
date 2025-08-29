"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion, cubicBezier } from "framer-motion"; 
import Image from "next/image";


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
                {["process-1.jpg", "process-2.jpg", "process-3.jpg", "process-4.jpg", "process-5.jpg"].map((img, i) => (
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
                {["process-6.jpg", "process-7.jpg", "process-8.jpg", "process-9.jpg"].map((img, i) => (
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
            src="/images/hero.jpg"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </section>

        <section id="process" className="py-12 md:py-20 bg-white section-divider">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide">
                Designed to Precision
              </motion.h2>
              <motion.p variants={fadeInLeft} className="mt-6 text-xl text-gray-600 leading-relaxed">
                It starts with a sketch and ends with rigorous comfort testing —
                we combine design, materials, and tech.
              </motion.p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Sketch & concept", "Prototyping & Materials", "Comfort testing"].map((t) => (
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
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">Let’s stay in touch</h4>
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
