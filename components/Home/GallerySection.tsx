"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const images = [
    {
      src: "/gallery1.jpg",
      alt: "Espresso Martinis",
      category: "Signature Drinks"
    },
    {
      src: "/gallery3.jpg", 
      alt: "Yellow Cocktail",
      category: "Signature Drinks"
    },
    {
      src: "/gallery4.jpg",
      alt: "Creative Cocktail", 
      category: "Signature Drinks"
    },
    {
      src: "/gallery2.jpg",
      alt: "Espresso Machine",
      category: "Specialty Coffee"
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-theme text-primary py-20 px-6 border-t border-theme">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        
        <motion.p 
          className="text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Immerse yourself in the baroque elegance and theatrical atmosphere that makes 
          Bar National Sofia's most enchanting destination.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedImage(image.src)}
              className="focus:outline-none group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={500}
                  width={500}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="max-w-3xl w-full rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
