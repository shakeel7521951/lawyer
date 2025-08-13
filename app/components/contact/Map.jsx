"use client";

import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto py-12 px-6"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="rounded-xl border border-[#9f8660] overflow-hidden relative"
      >
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 border-2 border-[#9f8660] rounded-xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps?q=25.2854,51.531&z=14&output=embed"
            width="100%"
            height="350"
            className="rounded-xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MapSection;
