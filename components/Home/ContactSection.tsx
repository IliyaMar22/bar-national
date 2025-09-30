"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-bar-dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Visit Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-bar-gold mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">
                  1, Bulgaria Square<br />
                  National Palace of Culture<br />
                  Sofia 1000, Bulgaria
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-bar-gold mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">
                  <a href="tel:+359896823923" className="hover:text-white transition">
                    +359 896 823 923
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-bar-gold mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">
                  <a href="mailto:info@barnational.bg" className="hover:text-white transition">
                    info@barnational.bg
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-bar-gold mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Mon-Thu: 6:00 PM - 2:00 AM</p>
                  <p>Fri-Sat: 6:00 PM - 3:00 AM</p>
                  <p>Sunday: 7:00 PM - 1:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5!2d23.3202484!3d42.6841335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8587b4aaaced%3A0x4a679c0453d57072!2sNDK!5e0!3m2!1sen!2sbg!4v1700000000000!5m2!1sen!2sbg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bar National Location - NDK, Sofia"
                className="w-full h-80"
              />
            </div>
            
            <div className="text-center">
              <a
                href="https://www.google.com/maps/dir//NDK,+1+Bulgaria+Square,+1000+Sofia/@42.684104,23.2378477,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40aa8587b4aaaced:0x4a679c0453d57072!2m2!1d23.3202484!2d42.6841335?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-bar-gold text-black rounded-full hover:bg-yellow-500 transition font-medium"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
