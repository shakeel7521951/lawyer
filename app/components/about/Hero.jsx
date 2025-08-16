"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
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
            src="/about/hero.png"
            alt="About Al Khaldi Law Firm"
            className="w-full h-full object-cover"
          />
          {/* Elegant Overlay matching your theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/50 via-[#494c52]/40 to-[#9f8660]/45"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Focused overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
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

            {/* Main Introduction */}
            <div className="space-y-8">

              {/* Arabic/English Logo Reference */}
              <div className="mb-8 sm:mb-12">
                {/* Arabic Name - Main Brand */}
                <div className="relative mb-4 sm:mb-6">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                      style={{
                        fontFamily: "'Amiri', 'Times New Roman', serif",
                        textShadow: '0 0 30px rgba(192, 182, 136, 0.3)',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                      }}>
                    عن الخالـــــدي
                  </h1>
                  {/* Glowing effect behind Arabic text */}
                  <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#c0b688] opacity-20 blur-sm tracking-wide"
                       style={{ fontFamily: "'Amiri', 'Times New Roman', serif" }}>
                    عن الخالـــــدي
                  </div>
                </div>

                {/* English Name - Elegant Subtitle */}
                <div className="relative">
                  <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
                     style={{
                       fontFamily: "'Playfair Display', 'Georgia', serif",
                       letterSpacing: '0.15em',
                       textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                     }}>
                    About Al Khaldi
                  </p>

                  {/* Decorative underline */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                    <div className="text-[#c0b688] text-sm sm:text-base font-light tracking-[0.3em] sm:tracking-[0.4em]" style={{ fontFamily: "'Cinzel', serif" }}>
                      LAW FIRM & LEGAL CONSULTATIONS
                    </div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                    <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
                  </div>
                </div>

                {/* Elegant ornamental design */}
                <div className="mt-8 sm:mt-10 flex justify-center">
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

              {/* Introduction Text */}
              <div className="mt-8 sm:mt-12">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto"
                   style={{
                     fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                     textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                   }}>
                  Discover the story behind AL KHALDI Law Firm, our distinguished founder's journey,
                  and our unwavering commitment to excellence in legal services across Qatar and beyond.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {/* Address */}
                <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[#c0b688] font-semibold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Our Location</h3>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Street 150, Al Rayyan<br />
                      Building No. 143, Area 22<br />
                      Fereej Bin Mahmoud<br />
                      3rd Floor
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[#c0b688] font-semibold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Visit Online</h3>
                    <a
                      href="http://www.alkhaldi.com"
                      className="text-white/80 text-sm hover:text-[#c0b688] transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.alkhaldi.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[#c0b688] font-semibold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Contact Us</h3>
                    <div className="text-white/80 text-sm space-y-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <p>+974 6616 4000</p>
                      <p>+974 4009 8889</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
