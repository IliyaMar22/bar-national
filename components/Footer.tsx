"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-playfair mb-4 text-white">Bar National</h3>
            <p className="text-gray-400 leading-relaxed">
              Where every night is a performance, every drink is a masterpiece, 
              and every moment is pure theatrical magic.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-bar-gold" />
              Location
            </h4>
            <p className="text-gray-400">
              1, Bulgaria Square<br />
              National Palace of Culture<br />
              Sofia 1000, Bulgaria
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-bar-gold" />
              Contact
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="tel:+359896823923" className="hover:text-white transition">
                  +359 896 823 923
                </a>
              </p>
              <p>
                <a href="mailto:info@barnational.bg" className="hover:text-white transition">
                  info@barnational.bg
                </a>
              </p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Instagram className="w-5 h-5 mr-2 text-bar-gold" />
              Follow Us
            </h4>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/bar.national?igsh=MXR0aGdsZDEzNGI1Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @bar.national
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bar National. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
