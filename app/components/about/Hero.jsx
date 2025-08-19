"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap"
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/50 via-[#494c52]/40 to-[#9f8660]/45"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
          </div>

          {/* Centered Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-6">

              {/* Arabic Brand Name */}
              <h1
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                  style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              >
                عن الخالـــــدي
              </h1>

              {/* English Subtitle */}
              <p
                  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
              >
                About Al Khaldi
              </p>

              {/* Introduction Text */}
              <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Discover the story behind AL KHALDI Law Firm, our distinguished founder's journey,
                and our unwavering commitment to excellence in legal services across Qatar and beyond.
              </p>

              {/* Contact Information Cards */}
              <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

                {/* Address */}
                <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                  <h3 className="text-[#c0b688] font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Our Location</h3>
                  <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Street 150, Al Rayyan<br />
                    Building No. 143, Area 22<br />
                    Fereej Bin Mahmoud<br />
                    3rd Floor
                  </p>
                </div>

                {/* Website */}
                <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                  <h3 className="text-[#c0b688] font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Visit Online</h3>
                  <a
                      href="http://www.alkhaldi.com"
                      className="text-white/80 text-sm hover:text-[#c0b688] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    www.alkhaldi.com
                  </a>
                </div>

                {/* Phone */}
                <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                  <h3 className="text-[#c0b688] font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Contact Us</h3>
                  <div className="text-white/80 text-sm space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>+974 6616 4000</p>
                    <p>+974 4009 8889</p>
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
