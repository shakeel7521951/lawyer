"use client";
import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      offset:100,
    })
  },[])
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact/ch.jpeg"
            alt="Al Khaldi Law Firm Contact"
            className="w-full h-full object-cover"
          />
          {/* Elegant Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/70 via-[#494c52]/50 to-[#9f8660]/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
        </div>

        {/* Noise Effect */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
        </div>

        {/* Decorative Line */}
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-8">
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div
              className="text-[#c0b688] text-xs sm:text-sm font-light tracking-[0.3em]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              BLOG
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Acquittal of a Public Employee and 10 Others from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
              Bribery and Money Laundering Charges
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg sm:text-xl leading-relaxed text-white/90 font-light text-center max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "'Crimson Text', serif", lineHeight: "1.6" }}
          >
            The Court of Appeal acquitted 11 defendants, including a public employee, from charges of
            bribery and money laundering, along with acquiring and possessing funds obtained from these crimes.
          </p>

          {/* Highlight Box */}
          <div data-aos="fade-up" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 max-w-lg mx-auto">
            {/* <Mail className="w-8 h-8 text-[#c0b688] mx-auto mb-3" /> */}
            <p
              className="text-white text-sm font-medium mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Key Statement
            </p>
            <p
              className="text-[#c0b688] text-lg font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              This was in exchange for completing the official procedures to obtain licenses.
            </p>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent"></div> */}
      </section>
    </>
  );
};

export default Hero;
