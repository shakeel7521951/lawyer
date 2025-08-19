'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Scale, Award, Building2, Globe } from 'lucide-react'

const Paragraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Simple Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="w-full bg-gradient-to-br from-[#494c52] to-[#9f8660] py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#c0b688]/30 mb-6">
                <Scale className="w-4 h-4 text-[#c0b688]" />
                <span className="text-[#c0b688] font-medium text-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                  OUR MISSION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Legal{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                  Excellence
                </span>
                <br />& Professional Commitment
              </h2>

              {/* Decorative Line */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#c0b688] to-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full"></div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our office is committed to providing legal services based on professional expertise and high academic competence. We ensure a team of legal scholars specializing in various fields including civil, commercial, criminal, family matters, and international cases.
                </p>

                <p className="text-base sm:text-lg text-white/85 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our goal is to offer legal consultations and solutions grounded in scientific knowledge, fulfilling the client's objectives while embracing new methods that suit current progress.
                </p>

                {/* Key Stats - Mobile Optimized */}
                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>19+</div>
                    <div className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>22</div>
                    <div className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Legislative Committees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>All</div>
                    <div className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Court Levels</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Visual */}
            <div className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">

                {/* Main Image - Mobile Optimized */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/home/new-law-firm.jpg"
                    alt="Al-Khaldi Legal Excellence"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/80 via-transparent to-transparent"></div>

                  {/* Content Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/20 shadow-lg">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        الخالدي Legal Framework
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Comprehensive legal solutions across corporate, government, and individual sectors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Responsive */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trust Indicators */}
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">

            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Legal Excellence</h4>
              <p className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Uncompromising quality</p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>GCC Expertise</h4>
              <p className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Regional knowledge</p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Strategic Partners</h4>
              <p className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Business-focused approach</p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Proven Results</h4>
              <p className="text-xs sm:text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>500+ success stories</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Paragraph
