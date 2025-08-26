// components/FounderProfile.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
export default function FounderProfile() {
    const { t }= useTranslation("about/founderProfile");
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setIsVisible(true),
        { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
      <section
          ref={sectionRef}
          className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-24 overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Founder Image */}
          <div
              className={`flex-shrink-0 w-64 h-64 rounded-full overflow-hidden shadow-2xl transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <img
                src="/home/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
            />
          </div>

          {/* Founder Info */}
          <div
              className={`text-center md:text-left transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } space-y-4`}
          >
            <h2
                className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#494c52] via-[#9f8660] to-[#c0b688]"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("about.founderProfile.heading")}
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#494c52]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t("about.founderProfile.subheading")}
            </h3>
            <p className="text-[#c0b688] text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                           {t("about.founderProfile.firmName")}

            </p>
            <p className="text-[#494c52]/80 leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {t("about.founderProfile.description")}

            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-3">
              <span className="w-6 h-0.5 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-full"></span>
              <span className="w-6 h-0.5 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
  );
}
