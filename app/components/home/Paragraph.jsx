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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 sm:py-20 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-[#c0b688]/30 mb-6">
                <Scale className="w-4 h-4 text-[#c0b688]" />
                <span className="text-[#c0b688] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  OUR MISSION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Legal{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                  Excellence
                </span>
                <br />& Professional Commitment
              </h2>

              {/* Decorative Line */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-[#c0b688] to-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Our office is committed to providing legal services based on sufficient professional expertise and high academic competence. From the office founder to the latest employee, we ensure a team of legal scholars specializing in various fields, including civil and commercial transactions, criminal disputes, family matters, banking and electronic transactions, international cases, and more.
                </p>

                <p className="text-lg text-white/85 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Our goal is to offer legal consultations and solutions grounded in scientific knowledge and prior professional accumulations, fulfilling the client's objectives for the required legal service. Additionally, we embrace new methods in our tasks to suit the current scientific and societal progress, while adhering to applicable laws and regulations.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 mt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>19+</div>
                    <div className="text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>22</div>
                    <div className="text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Legislative Committees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>All</div>
                    <div className="text-sm text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Court Levels</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Visual */}
            <div className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">

                {/* Main Image - Reduced Height */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/about/ab.jpeg"
                    alt="Al-Khaldi Legal Excellence"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/80 via-transparent to-transparent"></div>

                  {/* Content Over Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/15 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg">
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        الخالدي Legal Framework
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Comprehensive legal solutions across corporate, government, and individual sectors throughout the GCC region.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                  <Building2 className="w-6 h-6 text-white" />
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-[#c0b688]/20 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trust Indicators */}
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Legal Excellence</h4>
              <p className="text-sm text-white/70">Uncompromising quality</p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>GCC Expertise</h4>
              <p className="text-sm text-white/70">Regional knowledge</p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Strategic Partners</h4>
              <p className="text-sm text-white/70">Business-focused approach</p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Proven Results</h4>
              <p className="text-sm text-white/70">500+ success stories</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Paragraph
