"use client";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full min-h-screen overflow-hidden pt-25">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/hero.jpg"
            alt="Al Khaldi Law Firm"
            className="w-full h-full object-cover"
          />
          {/* Enhanced overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/45 via-[#494c52]/35 to-[#9f8660]/40"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Focused overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/55 via-transparent to-[#494c52]/35"></div>
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

        {/* Centered Introduction Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">

            {/* Main Introduction */}
            <div className="space-y-8">

              {/* Arabic/English Logo Reference */}
              <div className="mb-8 sm:mb-12">
                {/* Arabic Name - Main Brand */}
                <div className="relative mb-4 sm:mb-6">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                      style={{
                        fontFamily: "'Amiri', 'Times New Roman', serif",
                        textShadow: '0 0 30px rgba(192, 182, 136, 0.3)',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                      }}>
                    الخالـــــدي
                  </h1>
                  {/* Glowing effect behind Arabic text */}
                  <div className="absolute inset-0 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#c0b688] opacity-20 blur-sm tracking-wide"
                       style={{ fontFamily: "'Amiri', 'Times New Roman', serif" }}>
                    الخالـــــدي
                  </div>
                </div>

                {/* English Name - Elegant Subtitle */}
                <div className="relative">
                  <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
                     style={{
                       fontFamily: "'Playfair Display', 'Georgia', serif",
                       letterSpacing: '0.15em',
                       textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                     }}>
                    Al Khaldi
                  </p>

                  {/* Decorative underline */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                    <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                    <div className="text-[#c0b688] text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em]" style={{ fontFamily: "'Cinzel', serif" }}>
                      LAW FIRM
                    </div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                    <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
                  </div>
                </div>

                {/* Elegant ornamental design */}
                <div className="mt-6 sm:mt-8 flex justify-center">
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

              {/* Enhanced Introduction Text */}
              <div className="mt-8 sm:mt-12">
                {/* Professional tagline */}
                {/*<div className="mb-8">*/}
                {/*  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"*/}
                {/*      style={{*/}
                {/*        fontFamily: "'Playfair Display', serif",*/}
                {/*        textShadow: '0 2px 15px rgba(0,0,0,0.4)'*/}
                {/*      }}>*/}
                {/*    Excellence in Legal Representation*/}
                {/*  </h2>*/}
                {/*  <div className="w-24 h-1 bg-gradient-to-r from-[#c0b688] to-[#9f8660] mx-auto"></div>*/}
                {/*</div>*/}

                {/* Enhanced main description with better typography */}
                <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-light mb-6"
                     style={{
                       fontFamily: "'Cormorant Garamond', serif",
                       lineHeight: '1.8',
                       textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                     }}>
                    We at our office are proud to provide the <span className="text-[#c0b688] font-semibold">highest quality legal services</span> to companies, governmental institutions, and individuals, which contributes to building a <span className="text-[#c0b688] font-semibold">strong and long-term relationship</span> based on mutual trust.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 font-light"
                     style={{
                       fontFamily: "'Cormorant Garamond', serif",
                       lineHeight: '1.7',
                       textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                     }}>
                    We spare no efforts to provide the best legal services to achieve <span className="text-[#c0b688] font-medium">optimal outcomes</span>, with our guarantee to protect your legal rights and interests.
                  </p>
                </div>
              </div>

              {/* Enhanced Contact Information */}
              <div className="mt-10 sm:mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {/* Phone 1 */}
                  <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <div className="w-2 h-2 bg-[#c0b688] rounded-full"></div>
                      <span className="font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>+974 6616 4000</span>
                    </div>
                  </div>

                  {/* Phone 2 */}
                  <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <div className="w-2 h-2 bg-[#c0b688] rounded-full"></div>
                      <span className="font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>+974 4009 8889</span>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <div className="w-2 h-2 bg-[#c0b688] rounded-full"></div>
                      <span className="font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>www.alkhaldi.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/services"
                  className="group bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <span>Our Services</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-[#c0b688] transition-all duration-300 backdrop-blur-sm"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Free Consultation
                </a>
              </div>

              {/* Professional Values */}
              <div className="mt-12 sm:mt-16">
                <div className="flex items-center justify-center space-x-3 sm:space-x-6">
                  <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent"></div>
                  <div className="w-3 h-3 bg-[#c0b688] rounded-full animate-pulse"></div>
                  <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent"></div>
                </div>

                <p className="text-[#c0b688] text-sm sm:text-base md:text-lg font-light tracking-wide opacity-90 mt-6 leading-relaxed"
                   style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Excellence • Trust • Integrity • Professional Results • Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#494c52]/30 to-transparent"></div>
      </section>
    </>
  );
}
