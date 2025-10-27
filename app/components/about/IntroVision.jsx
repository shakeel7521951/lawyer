// components/AboutUs.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
export default function AboutUs() {
  const { t } = useTranslation("about/introVision");

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
      className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 sm:py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("about.introVision.title")}
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-4 text-sm text-[#c0b688] font-medium tracking-widest">
            {t("about.introVision.tagline")}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Founder Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="/about/about.jpg" // replace with your founder image
              alt="Founder"
              className="w-full rounded-3xl border border-[#c0b688]/20 shadow-lg"
            />
          </div>

          {/* About Text */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <p
              className="text-white/90 text-lg mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("about.introVision.intro")}
            </p>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10">
                <h4
                  className="text-[#c0b688] font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {t("about.introVision.mission.title")}
                </h4>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("about.introVision.mission.text")}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10">
                <h4
                  className="text-[#c0b688] font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {t("about.introVision.vision.title")}
                </h4>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("about.introVision.vision.text")}
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[t("about.introVision.coreValues.0"), t("about.introVision.coreValues.1"),t("about.introVision.coreValues.2")].map((val) => (
                  <div
                    key={val}
                    className="text-center p-4 bg-white/5 rounded-xl border border-[#c0b688]/10"
                  >
                    <p className="text-[#c0b688] font-semibold text-sm">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
