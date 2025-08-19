"use client";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* Simple Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full min-h-screen overflow-hidden pt-20">
        {/* Beautiful Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#494c52] to-[#34495e]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9f8660]/20 via-transparent to-[#c0b688]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#494c52]/40 to-[#2c3e50]/60"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Brand Name */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="block text-[#c0b688]">الخالدي</span>
                    <span className="block text-white text-3xl lg:text-4xl xl:text-5xl font-normal tracking-wide">
                      Al Khaldi
                    </span>
                  </h1>

                  {/* Law Firm Tag */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-0.5 bg-[#c0b688]"></div>
                    <span className="text-[#c0b688] text-sm tracking-[0.2em] font-medium uppercase"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                      Law Firm
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl text-white font-light leading-relaxed"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                    Excellence in Legal Services
                  </h2>

                  <p className="text-lg text-gray-200 leading-relaxed max-w-lg"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                    Providing comprehensive legal solutions with integrity, professionalism,
                    and unwavering commitment to our clients' success.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-4 bg-[#c0b688] text-white font-medium rounded-lg hover:bg-[#9f8660] transition-all duration-300 transform hover:scale-105"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                    Get Consultation
                  </button>
                  <button className="px-8 py-4 border-2 border-[#c0b688] text-[#c0b688] font-medium rounded-lg hover:bg-[#c0b688] hover:text-white transition-all duration-300"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                    Our Services
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Inter', sans-serif" }}>15+</div>
                    <div className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Inter', sans-serif" }}>500+</div>
                    <div className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Cases Won</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Inter', sans-serif" }}>24/7</div>
                    <div className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Support</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Larger Client Image */}
              <div className="relative lg:flex justify-center hidden">
                <div className="relative">
                  {/* Main Client Image - Much Larger */}
                  <div className="relative w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/home/hero-1.jpg"
                      alt="Legal Consultation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/40 to-transparent"></div>
                  </div>

                  {/* Floating Card - Repositioned for larger image */}
                  <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-sm">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-[#c0b688] rounded-full flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Trusted by 1000+ Clients
                        </div>
                        <div className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Professional Legal Services
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#c0b688] rounded-full opacity-70"></div>
                  <div className="absolute top-16 -left-4 w-6 h-6 bg-[#9f8660] rounded-full opacity-50"></div>
                  <div className="absolute -bottom-4 right-10 w-8 h-8 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-full opacity-60"></div>

                  {/* Additional floating elements */}
                  <div className="absolute top-1/3 -right-8 w-4 h-4 bg-[#c0b688] rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-1/3 -left-6 w-5 h-5 bg-[#9f8660] rounded-full opacity-30 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Bottom Element */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#c0b688] via-[#9f8660] to-[#c0b688] opacity-60"></div>

        {/* Subtle animated accent */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent animate-pulse"></div>
      </section>
    </>
  );
}
