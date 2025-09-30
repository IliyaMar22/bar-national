"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[90vh] flex items-center justify-center text-white bg-black mb-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url('/landing.jpg')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />


      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bar National
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Dancing, vibing and sipping drinks in the shadow of NDK
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black rounded-full shadow hover:bg-neutral-200 transition font-medium cursor-pointer text-lg"
          >
            View Menu PDF
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center text-white/80 text-sm space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-bar-gold rounded-full"></div>
              <span>1, Bulgaria Square, National Palace of Culture, Sofia</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-bar-gold rounded-full"></div>
              <span>+359 896 823 923</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-bar-gold rounded-full"></div>
              <span>Mon - Sunday: 10:00 to 02:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
