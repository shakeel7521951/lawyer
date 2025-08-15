"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MapSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // sirf ek baar chale
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div
        className="rounded-xl border border-[#9f8660] overflow-hidden relative"
        data-aos="flip-down"
      >
        <div className="absolute inset-0 border-2 border-[#9f8660] rounded-xl pointer-events-none" />
        <div>
          <iframe
            src="https://www.google.com/maps?q=25.2854,51.531&z=14&output=embed"
            width="100%"
            height="350"
            className="rounded-xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
