"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaGlobe } from "react-icons/fa";

export default function ContactFor() {
  const offices = [
    {
      country: "Qatar",
      flag: "🇶🇦",
      phone: "+974 123 456 789",
      email: "qatar@yourcompany.com",
      address: "Doha, West Bay Business Tower",
      whatsapp: "974123456789",
      lat: 25.2854,
      lng: 51.531,
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Form - Left */}
        <motion.div 
          initial={{ opacity: 0, x: -80 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 rounded-xl shadow-2xl p-8 border-t-4 border-yellow-500 relative overflow-hidden group"
        >
          {/* Before-like glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.4 }}
            className="absolute -inset-2 rounded-xl bg-yellow-200 blur-2xl z-0"
          />
          {/* After-like border animation */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full border-2 border-yellow-400 rounded-xl pointer-events-none"
          />

          {/* Decorative elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 w-40 h-40 bg-yellow-100 rounded-full opacity-20"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -left-10 -bottom-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20"
          />
          
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-6 text-gray-800 relative z-10"
          >
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              Book Your Free Consultation
            </motion.span>
          </motion.h2>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-md"
              />
              <motion.div whileHover={{ scale: 1.2 }} className="absolute left-3 top-3.5 text-gray-400">
                <FaUser />
              </motion.div>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-md"
              />
              <motion.div whileHover={{ scale: 1.2 }} className="absolute left-3 top-3.5 text-gray-400">
                <FaEnvelope />
              </motion.div>
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder={`Phone Number (${selectedOffice.phone.slice(0, 4)})`}
                className="border border-gray-300 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-md"
              />
              <motion.div whileHover={{ scale: 1.2 }} className="absolute left-3 top-3.5 text-gray-400">
                <FaPhoneAlt />
              </motion.div>
            </div>
            <div className="relative">
              <select
                onChange={(e) =>
                  setSelectedOffice(
                    offices.find((o) => o.country === e.target.value)
                  )
                }
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 w-full appearance-none pl-10 pr-3 transition-all duration-300 hover:shadow-md"
              >
                {offices.map((o) => (
                  <option key={o.country}>{o.country}</option>
                ))}
              </select>
              <motion.div whileHover={{ scale: 1.2 }} className="absolute left-3 top-3.5 text-gray-400">
                <FaGlobe />
              </motion.div>
            </div>
            <select className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 md:col-span-2 transition-all duration-300 hover:shadow-md">
              <option>Service You're Interested In</option>
              <option>Company Formation</option>
              <option>Business Consultancy</option>
              <option>Market Entry Strategy</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 md:col-span-2 transition-all duration-300 hover:shadow-md"
            ></textarea>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 8px 20px rgba(234, 179, 8, 0.4)",
                background: "linear-gradient(45deg, #eab308, #f59e0b)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition md:col-span-2 relative overflow-hidden"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info - Right */}
        <motion.div 
          initial={{ opacity: 0, x: 80 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          {offices.map((office, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="border border-yellow-200 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:border-yellow-500 transition relative bg-gradient-to-br from-gray-50 to-white overflow-hidden group"
            >
              {/* Glow effect */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                className="absolute -inset-1 rounded-xl bg-yellow-200 blur-lg"
              />
              <div className="relative z-10">
                <div className="absolute top-4 right-4 text-3xl">{office.flag}</div>
                <h2 className="text-2xl font-semibold text-yellow-600 mb-3">{office.country}</h2>
                <p className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-600" /> {office.phone}</p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-yellow-600" /> {office.email}</p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-600" /> {office.address}</p>
                <button
                  onClick={() => window.open(`https://wa.me/${office.whatsapp}`, "_blank")}
                  className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Map */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-xl border-2 border-yellow-400 overflow-hidden relative"
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 border-4 border-yellow-500 rounded-xl pointer-events-none"
          />
          <iframe
            src={`https://www.google.com/maps?q=${selectedOffice.lat},${selectedOffice.lng}&z=14&output=embed`}
            width="100%"
            height="350"
            className="rounded-xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.section>
    </div>
  );
}
