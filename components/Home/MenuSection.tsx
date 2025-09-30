"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function MenuSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="menu" className="bg-section text-primary py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center font-playfair text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Menu
        </motion.h2>

        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card border border-theme p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 font-playfair">
              Discover Our Complete Menu
            </h3>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Explore our carefully curated selection of signature cocktails, premium wines, 
              and specialty coffee. Each drink is crafted with precision and served with 
              the elegance that defines Bar National.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium"
              >
                View Menu PDF
              </button>
              
              <a
                href="/menu.pdf"
                download="Bar-National-Menu.pdf"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition font-medium"
              >
                Download Menu
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card border border-theme rounded-xl">
              <div className="text-4xl mb-4">🍸</div>
              <h4 className="text-xl font-semibold text-primary mb-2">Signature Cocktails</h4>
              <p className="text-secondary">Crafted with premium spirits and unique ingredients</p>
            </div>
            
            <div className="p-6 bg-card border border-theme rounded-xl">
              <div className="text-4xl mb-4">🍷</div>
              <h4 className="text-xl font-semibold text-primary mb-2">Premium Wines</h4>
              <p className="text-secondary">Carefully selected local and international wines</p>
            </div>
            
            <div className="p-6 bg-card border border-theme rounded-xl">
              <div className="text-4xl mb-4">☕</div>
              <h4 className="text-xl font-semibold text-primary mb-2">Specialty Coffee</h4>
              <p className="text-secondary">Sourced from the finest coffee blends</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">Bar National Menu</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <iframe
                src="/menu.pdf"
                width="100%"
                height="600"
                className="border-0"
                title="Bar National Menu"
              />
            </div>
            <div className="p-4 border-t text-center">
              <a
                href="/menu.pdf"
                download="Bar-National-Menu.pdf"
                className="px-6 py-2 bg-primary text-white rounded-full hover:opacity-90 transition font-medium"
              >
                Download Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}