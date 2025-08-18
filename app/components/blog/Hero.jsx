"use client";
import React, { useEffect } from "react";
import { Scale } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Playfair+Display:wght@400;600;700&family=Cinzel:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full min-h-screen overflow-hidden pt-25">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/home/hero.jpg"
            alt="Legal Victory - Al Khaldi Law Firm"
            className="w-full h-full object-cover scale-105 transform"
            data-aos="zoom-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/60 via-[#494c52]/50 to-[#9f8660]/55"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Noise */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' ... %3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-ping opacity-50"></div>
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-40 delay-500"></div>
          <div className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-[#9f8660] rounded-full animate-ping opacity-35 delay-700"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">

            {/* Badge */}
            <div data-aos="zoom-in" data-aos-delay="100">
              <div className="inline-flex items-center space-x-2 bg-[#c0b688]/20 backdrop-blur-sm border border-[#c0b688]/30 rounded-full px-6 py-2">
                <Scale className="w-4 h-4 text-[#c0b688]" />
                <span className="text-[#c0b688] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                  LEGAL VICTORY
                </span>
              </div>
            </div>

            {/* Arabic Title */}
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] tracking-wide"
                  style={{
                    fontFamily: "'Amiri', serif",
                    textShadow: '0 0 30px rgba(192, 182, 136, 0.3)',
                  }}>
                أخبار الخالـــــدي
              </h1>
              <div className="absolute inset-0 text-[#c0b688] opacity-20 blur-sm font-black text-3xl sm:text-6xl lg:text-8xl"
                   style={{ fontFamily: "'Amiri', serif" }}>
                أخبار الخالـــــدي
              </div>
            </div>

            {/* English Subtitle */}
            <div data-aos="fade-down" data-aos-delay="400">
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light uppercase"
                 style={{
                   fontFamily: "'Playfair Display', serif",
                   letterSpacing: '0.15em',
                   textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                 }}>
                Legal News & Updates
              </p>
            </div>

            {/* Underline */}
            <div className="flex items-center justify-center space-x-3 mt-6" data-aos="zoom-in-up" data-aos-delay="600">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
              <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-bounce"></div>
              <div className="text-[#c0b688] text-sm sm:text-base tracking-[0.4em]" style={{ fontFamily: "'Cinzel', serif" }}>
                AL KHALDI LAW FIRM
              </div>
              <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-bounce"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
            </div>

            {/* Ornament */}
            <div className="flex justify-center mt-10" data-aos="flip-up" data-aos-delay="800">
              <svg width="100" height="30" viewBox="0 0 100 30" className="text-[#c0b688] opacity-70">
                <path d="M10 15 Q 30 5, 50 15 Q 70 25, 90 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="15" r="3" fill="currentColor" className="animate-pulse" />
              </svg>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
