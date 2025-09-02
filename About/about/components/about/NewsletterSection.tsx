"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-br from-white to-gray-50/50 p-12 md:p-16 rounded-3xl text-center shadow-2xl max-w-4xl mx-auto border border-gray-200 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.purple.500),_transparent_50%)]" />
          </div>

          <div className="relative z-10">
            <motion.h4
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let&apos;s stay in{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                touch
              </motion.span>
            </motion.h4>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Stay in the loop, with exclusive offers and product previews.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.input
                className="px-6 py-4 rounded-xl border-2 border-gray-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80"
                placeholder="Enter your email..."
                whileFocus={{ scale: 1.02 }}
                type="email"
              />
              <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Journey
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-300/20 to-blue-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
