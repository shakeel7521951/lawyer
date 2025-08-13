"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-15">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home/hero.jpg"
          alt="Al Khaldi Law Firm"
          className="w-full h-full object-cover"
        />
        {/* Reduced Blurry Overlay - Less intense to show original picture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/40 via-[#494c52]/30 to-[#9f8660]/35"></div>
        <div className="absolute inset-0 bg-black/15"></div>
        {/* Focused overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/50 via-transparent to-[#494c52]/30"></div>
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
        <div className="max-w-4xl mx-auto text-center">

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
                  <svg width="60" height="15" viewBox="0 0 80 20" className="text-[#c0b688] opacity-60 sm:w-20 sm:h-5">
                    <path d="M5 10 Q 20 2, 40 10 Q 60 18, 75 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="40" cy="10" r="2" fill="currentColor" className="animate-pulse" />
                    <circle cx="20" cy="7" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="60" cy="13" r="1" fill="currentColor" opacity="0.7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="mt-6 sm:mt-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white font-light text-center max-w-2xl sm:max-w-3xl mx-auto px-2" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", lineHeight: '1.6' }}>
                We spare no efforts to provide the best legal services to achieve optimal outcomes with institutions and individuals, which contributes to building a strong and long-term relationship based on mutual trust. Our guarantee to protect your legal rights and interests.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#c0b688] rounded-full animate-pulse"></div>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent"></div>
            </div>

            {/* Elegant Subtitle */}
            <p className="text-[#c0b688] text-xs sm:text-sm md:text-base font-light tracking-wide opacity-90 mt-6 sm:mt-8" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Excellence in Legal Representation • Trust • Integrity • Results
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#494c52]/20 to-transparent"></div>
    </section>
  );
}
