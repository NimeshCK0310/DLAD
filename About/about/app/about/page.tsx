"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeInUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 max-w-7xl mx-auto px-6 sm:px-8">
        {/* HERO */}
        <section className="py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-sm uppercase text-orange-500 font-semibold">The spark of inspiration</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">The Spark of Inspiration</h1>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Founder Vince had been designing shoes for years. He wanted to make footwear that felt as good as it looks —
                light, flexible, and easy to wear every day.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="/" className="inline-flex items-center px-5 py-3 rounded-md bg-orange-500 text-white font-medium">
                  Shop now
                </a>
                <a href="#process" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-200">
                  Learn more
                </a>
              </div>
            </motion.div>
            <motion.div className="flex justify-center md:justify-end" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="hero-image-frame w-full max-w-md">
                <Image src="/images/hero.jpg" alt="Hero Image" width={720} height={520} style={{ width: '100%', height: 'auto' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-12 md:py-20 section-divider">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold">Designed to Precision</motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 text-gray-600">
                It starts with a sketch and ends with rigorous comfort testing — we combine design, materials, and tech.
              </motion.p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Sketch & concept', 'Prototyping & Materials', 'Comfort testing'].map((t) => (
                <motion.div key={t} variants={fadeInUp} className="card p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg">{t}</h3>
                  <p className="mt-3 text-gray-600">
                    Short description about {t.toLowerCase()} describing our steps and care.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* MISSION / CTA */}
        <section className="py-12 md:py-16">
          <div className="bg-gradient-to-r from-gray-100 to-white p-8 md:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold">We are innovators of comfort</h3>
              <p className="mt-4 text-gray-700">
                Looking good and feeling good shouldn't be mutually exclusive. Community, culture, comfort — no hesitations.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {/* Existing Images */}
              <Image src="/images/process-1.jpg" alt="Process Image 1" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-2.jpg" alt="Process Image 2" width={540} height={360} className="rounded-lg" />

              {/* Newly Added Images */}
              <Image src="/images/process-3.jpg" alt="Process Image 3" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-4.jpg" alt="Process Image 4" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-5.jpg" alt="Process Image 5" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-6.jpg" alt="Process Image 5" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-7.jpg" alt="Process Image 5" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-8.jpg" alt="Process Image 5" width={540} height={360} className="rounded-lg" />
              <Image src="/images/process-9.jpg" alt="Process Image 5" width={540} height={360} className="rounded-lg" />
            </motion.div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-12">
          <div className="bg-white p-8 md:p-12 rounded-xl text-center shadow-sm">
            <h4 className="text-xl font-semibold">Let’s stay in touch</h4>
            <p className="mt-2 text-gray-600">Stay in the loop, with exclusive offers and product previews.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
              <input className="px-4 py-3 rounded-md border border-gray-200 w-full sm:w-auto" placeholder="Enter email..." />
              <button className="px-6 py-3 rounded-md bg-black text-white">Join</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
