"use client";
import React from "react";

export default function HeroSection() {
  return (
      <>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />

        <section className="relative w-full min-h-screen overflow-hidden pb-16 pt-22 md:pt-18">
          {/* Background Gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#3d4a5c] to-[#34495e]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9f8660]/15 via-transparent to-[#c0b688]/25"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#494c52]/30 to-[#2c3e50]/50"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex items-center min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                {/* Left Side - Text */}
                <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    <span className="block text-[#c0b688]">الخالدي للمحاماة والاستشارات القانونية</span>
                    <span className="block text-white text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide mt-2">
                    Alkhaldi Law Firm & Legal Consultations
                  </span>
                  </h1>

                  <div className="flex items-center justify-center lg:justify-start space-x-3 mt-2">
                    <div className="w-10 lg:w-14 h-0.5 bg-[#c0b688]"></div>
                    <span className="text-[#c0b688] text-xs sm:text-sm tracking-[0.2em] font-medium uppercase">
                    Law Firm
                  </span>
                  </div>

                  <h2 className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed mt-4">
                    Excellence in Legal Services
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Providing comprehensive legal solutions with integrity, professionalism, and unwavering commitment to our clients' success.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 justify-center lg:justify-start">
                    <button className="px-5 lg:px-7 py-3 lg:py-4 bg-[#c0b688] text-white font-medium rounded-lg hover:bg-[#9f8660] transition-transform duration-300 transform hover:scale-105 text-sm lg:text-base">
                      Get Consultation
                    </button>
                    <button className="px-5 lg:px-7 py-3 lg:py-4 border-2 border-[#c0b688] text-[#c0b688] font-medium rounded-lg hover:bg-[#c0b688] hover:text-white transition-transform duration-300 hover:scale-105 text-sm lg:text-base">
                      Our Services
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center lg:justify-start space-x-5 lg:space-x-8 pt-6">
                    <div className="text-center">
                      <div className="text-lg lg:text-xl font-bold text-[#c0b688]">15+</div>
                      <div className="text-xs lg:text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg lg:text-xl font-bold text-[#c0b688]">500+</div>
                      <div className="text-xs lg:text-sm text-gray-300">Cases Won</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg lg:text-xl font-bold text-[#c0b688]">24/7</div>
                      <div className="text-xs lg:text-sm text-gray-300">Support</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative flex justify-center mt-6 lg:mt-0">
                  <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="/home/hero.jpg"
                        alt="Legal Consultation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/40 to-transparent"></div>
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-sm p-3 sm:p-5 rounded-xl shadow-xl max-w-xs">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c0b688] rounded-full flex items-center justify-center">
                        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm sm:text-base">Trusted by 1000+ Clients</div>
                        <div className="text-gray-600 text-xs sm:text-sm">Professional Legal Services</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Accents */}
          <div className="absolute bottom-0 left-0 w-full h-1 lg:h-2 bg-gradient-to-r from-[#c0b688] via-[#9f8660] to-[#c0b688] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent animate-pulse"></div>
        </section>
      </>
  );
}
