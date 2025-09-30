"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 text-center space-y-8 mb-24" id="about">
      <motion.div
        className="relative h-96 rounded-2xl overflow-hidden mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/gallery4.jpg"
          alt="Bar National Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-playfair text-white text-center">
            Our Story
          </h2>
        </div>
      </motion.div>

      <motion.p
        className="text-secondary text-lg leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bar National was born from a dream to create something extraordinary in the heart of Sofia. 
        Nestled in the shadow of the National Palace of Culture, our establishment draws inspiration 
        from the grandeur of baroque architecture and the intimate allure of cabaret culture.
      </motion.p>

      <motion.p
        className="text-secondary text-lg leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Every detail of our interior tells a story of opulence and drama. From the rich velvet textures 
        that adorn our seating to the ornate chandeliers that cast their golden glow across the room, 
        we've created an atmosphere that transports you to a bygone era of sophistication and revelry.
      </motion.p>

      <motion.div
        className="bg-card border border-theme p-8 rounded-2xl max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-primary mb-4 font-playfair">
          Our Philosophy
        </h3>
        <p className="text-secondary text-lg italic leading-relaxed">
          "We believe that every evening should be a performance, every drink a masterpiece, 
          and every guest the star of their own show. At Bar National, we don't just serve 
          drinks – we craft experiences that linger in memory long after the night ends."
        </p>
      </motion.div>
    </section>
  );
}
