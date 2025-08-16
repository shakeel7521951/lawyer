"use client";
import React, { useEffect } from "react";
import { Calendar, User, MapPin, Scale } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full min-h-screen overflow-hidden pt-25">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/hero.jpg"
            alt="Legal Victory - Al Khaldi Law Firm"
            className="w-full h-full object-cover"
          />
          {/* Elegant Overlay matching your theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/60 via-[#494c52]/50 to-[#9f8660]/55"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Focused overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/70 via-transparent to-[#494c52]/50"></div>
        </div>

        {/* Noise Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-300"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-20 delay-800"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">

            {/* Main Content */}
            <div className="space-y-8">

              {/* Badge */}
              <div className="mb-8 sm:mb-12" data-aos="fade-up">
                <div className="inline-flex items-center space-x-2 bg-[#c0b688]/20 backdrop-blur-sm border border-[#c0b688]/30 rounded-full px-6 py-2 mb-6">
                  <Scale className="w-4 h-4 text-[#c0b688]" />
                  <span className="text-[#c0b688] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                    LEGAL VICTORY
                  </span>
                </div>
              </div>

              {/* Arabic/English Logo Reference */}
              <div className="mb-8 sm:mb-12">
                {/* Arabic Name - Main Brand */}
                <div className="relative mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                      style={{
                        fontFamily: "'Amiri', 'Times New Roman', serif",
                        textShadow: '0 0 30px rgba(192, 182, 136, 0.3)',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                      }}>
                    أخبار الخالـــــدي
                  </h1>
                  {/* Glowing effect behind Arabic text */}
                  <div className="absolute inset-0 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#c0b688] opacity-20 blur-sm tracking-wide"
                       style={{ fontFamily: "'Amiri', 'Times New Roman', serif" }}>
                    أخبار الخالـــــدي
                  </div>
                </div>

                {/* English Name - Elegant Subtitle */}
                <div className="relative" data-aos="fade-up" data-aos-delay="300">
                  <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
                     style={{
                       fontFamily: "'Playfair Display', 'Georgia', serif",
                       letterSpacing: '0.15em',
                       textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                     }}>
                    Legal News & Updates
                  </p>

                  {/* Decorative underline */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                    <div className="text-[#c0b688] text-sm sm:text-base font-light tracking-[0.3em] sm:tracking-[0.4em]" style={{ fontFamily: "'Cinzel', serif" }}>
                      AL KHALDI LAW FIRM
                    </div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                    <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
                  </div>
                </div>

                {/* Elegant ornamental design */}
                <div className="mt-8 sm:mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="400">
                  <div className="relative">
                    <svg width="80" height="20" viewBox="0 0 80 20" className="text-[#c0b688] opacity-60 sm:w-24 sm:h-6">
                      <path d="M5 10 Q 20 2, 40 10 Q 60 18, 75 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <circle cx="40" cy="10" r="2" fill="currentColor" className="animate-pulse" />
                      <circle cx="20" cy="7" r="1" fill="currentColor" opacity="0.7" />
                      <circle cx="60" cy="13" r="1" fill="currentColor" opacity="0.7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Featured Article Preview */}
              {/*<div className="mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="500">*/}
              {/*  <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-8 max-w-4xl mx-auto">*/}
              {/*    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"*/}
              {/*        style={{ fontFamily: "'Playfair Display', serif" }}>*/}
              {/*      Acquittal of a Public Employee and 10 Others in Bribery Case*/}
              {/*    </h2>*/}
              {/*    <p className="text-lg text-white/90 leading-relaxed mb-6"*/}
              {/*       style={{ fontFamily: "'Cormorant Garamond', serif" }}>*/}
              {/*      A significant legal victory as the Court of Appeal acquitted 11 defendants of charges related to bribery and money laundering, with Lawyer Saleh Ali Al-Khaldi successfully defending their innocence.*/}
              {/*    </p>*/}

              {/*    /!* Article Meta *!/*/}
              {/*    <div className="flex flex-wrap items-center justify-center gap-6 text-[#c0b688] text-sm">*/}
              {/*      <div className="flex items-center space-x-2">*/}
              {/*        <Calendar className="w-4 h-4" />*/}
              {/*        <span style={{ fontFamily: "'Inter', sans-serif" }}>February 16, 2025</span>*/}
              {/*      </div>*/}
              {/*      <div className="flex items-center space-x-2">*/}
              {/*        <User className="w-4 h-4" />*/}
              {/*        <span style={{ fontFamily: "'Inter', sans-serif" }}>Lawyer Saleh Ali Al-Khaldi</span>*/}
              {/*      </div>*/}
              {/*      <div className="flex items-center space-x-2">*/}
              {/*        <MapPin className="w-4 h-4" />*/}
              {/*        <span style={{ fontFamily: "'Inter', sans-serif" }}>Al Sharq News</span>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
