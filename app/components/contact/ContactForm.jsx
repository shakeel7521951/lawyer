"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaGlobe } from "react-icons/fa";

export default function ContactForm() {
  const offices = [
    {
      country: "Qatar",
      flag: "🇶🇦",
      phone: "+974 123 456 789",
      email: "qatar@yourcompany.com",
      address: "Doha, West Bay Business Tower",
      lat: 25.2854,
      lng: 51.531,
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  // Form Fields Config
  const formFields = [
    { type: "text", placeholder: "Full Name", icon: <FaUser /> },
    { type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
    { type: "tel", placeholder: `Phone Number (${selectedOffice.phone.slice(0, 4)})`, icon: <FaPhoneAlt /> },
    { type: "select-country", placeholder: "Select Country", icon: <FaGlobe /> },
    { type: "select-service", placeholder: "Service You're Interested In" },
    { type: "textarea", placeholder: "Your Message", rows: 4 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } }
  };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const slideInFromLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const slideInFromRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const textPop = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

  return (
    <div className="bg-white text-gray-900 overflow-hidden top-20">
      <motion.section initial="hidden" animate="visible" variants={containerVariants} className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Contact Form */}
        <motion.div variants={slideInFromLeft} whileHover={{ scale: 1.02 }} className="md:col-span-8 bg-gray-50 rounded-xl shadow-2xl p-8 border-t-4 border-yellow-500 relative overflow-hidden group">
          
          <motion.h2 variants={textPop} className="text-3xl font-bold mb-6 text-gray-800 relative z-10">
            <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              Book Your Free Consultation
            </motion.span>
          </motion.h2>

          <motion.form variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {formFields.map((field, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={field.type === "textarea" || field.type === "select-service" ? "md:col-span-2 relative" : "relative"}
              >
                {field.type === "text" || field.type === "email" || field.type === "tel" ? (
                  <>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="border border-gray-300 p-3 pl-10 rounded-lg w-full outline-none focus:ring-1 focus:ring-yellow-500 transition-all duration-300 hover:shadow-md"
                    />
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="absolute left-3 top-3.5 text-gray-400">
                      {field.icon}
                    </motion.div>
                  </>
                ) : field.type === "select-country" ? (
                  <>
                    <select
                      onChange={(e) => setSelectedOffice(offices.find(o => o.country === e.target.value))}
                      className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-1 focus:ring-yellow-500 w-full appearance-none pl-10 pr-3 transition-all duration-300 hover:shadow-md"
                    >
                      {offices.map((o) => <option key={o.country}>{o.country}</option>)}
                    </select>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="absolute left-3 top-3.5 text-gray-400">
                      {field.icon}
                    </motion.div>
                  </>
                ) : field.type === "select-service" ? (
                  <select className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 w-full transition-all duration-300 hover:shadow-md">
                    <option>{field.placeholder}</option>
                    <option>Company Formation</option>
                    <option>Business Consultancy</option>
                    <option>Market Entry Strategy</option>
                  </select>
                ) : (
                  <textarea placeholder={field.placeholder} rows={field.rows} className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-1 focus:ring-yellow-500 w-full transition-all duration-300 hover:shadow-md"></textarea>
                )}
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(234, 179, 8, 0.4)",
                  background: "linear-gradient(45deg, #eab308, #f59e0b)"
                }}
                whileTap={{ scale: 0.95 }}
                className="text-white bg-[#D4AF37] hover:bg-amber-500 font-semibold py-3 rounded-lg w-full relative overflow-hidden"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={slideInFromRight} className="md:col-span-4 space-y-6">
          {offices.map((office, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
              }}
              whileHover={{ scale: 1.03 }}
              className="border border-yellow-200 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:border-yellow-500 transition relative bg-gradient-to-br from-gray-50 to-white overflow-hidden group"
            >
              <div className="relative z-10">
                <motion.h2
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(234, 179, 8, 0)",
                      "0 0 8px rgba(234, 179, 8, 0.5)",
                      "0 0 0px rgba(234, 179, 8, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-2xl font-semibold text-yellow-600 mb-3"
                >
                  {office.country}
                </motion.h2>

                {[ 
                  { icon: <FaPhoneAlt className="text-yellow-600 text-lg" />, text: office.phone },
                  { icon: <FaEnvelope className="text-yellow-600 text-lg" />, text: office.email },
                  { icon: <FaMapMarkerAlt className="text-yellow-600 text-lg" />, text: office.address }
                ].map((item, idx) => (
                  <motion.p key={idx} whileHover={{ x: 5 }} className="flex items-center gap-3 mb-3">
                    <motion.span whileHover={{ scale: 1.1 }} className="bg-yellow-100 rounded-full p-2 shadow-md transition-transform duration-300">
                      {item.icon}
                    </motion.span>
                    {item.text}
                  </motion.p>
                ))}

                <motion.button
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(45deg, #25D366, #128C7E)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  <motion.span whileHover={{ scale: 1.1 }} className="bg-white/20 rounded-full p-1">
                    <FaWhatsapp />
                  </motion.span>
                  <motion.span animate={{ x: [0, 2, -2, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                    WhatsApp
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
