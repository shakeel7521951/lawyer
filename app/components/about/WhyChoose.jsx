// components/WhyChooseUs.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      title: "Elite Legal Consultants",
      description: "Our office includes elite legal consultants and lawyers with expertise and comprehensive knowledge covering all aspects of legal matters.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      title: "Professional Expertise",
      description: "Comprehensive knowledge in commercial, criminal, civil, corporate, investment, and family law with professional association memberships.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Litigation Specialists",
      description: "Specialized in litigation before all court levels, from First Instance to Supreme Court, including dispute resolution committees.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Professional Ethics",
      description: "Unwavering commitment to maintaining professional ethics standards and confidentiality in all client dealings.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full shadow-xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#494c52] via-[#9f8660] to-[#c0b688] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Why Choose Us?
          </h2>

          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="text-[#9f8660] text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              EXPERTISE • TRUST • EXCELLENCE
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>

          <p className="text-lg text-[#494c52]/80 max-w-3xl mx-auto mt-6 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Discover what sets us apart in the legal industry and why clients trust us with their most important matters
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white border border-[#c0b688]/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-[#c0b688]/40 group h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c0b688]/20 to-[#9f8660]/20 rounded-2xl flex items-center justify-center group-hover:from-[#c0b688]/30 group-hover:to-[#9f8660]/30 transition-all duration-300">
                    <div className="text-[#9f8660] group-hover:scale-110 transition-transform duration-300">
                      {advantage.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#494c52] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {advantage.title}
                  </h3>
                  <p className="text-[#494c52]/70 leading-relaxed text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`bg-white rounded-3xl shadow-2xl border border-[#c0b688]/20 p-8 md:p-12 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Commitment to Excellence
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c0b688] to-[#9f8660] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Professional Standards */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c0b688]/20 to-[#c0b688]/30 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Professional Standards</h4>
              <p className="text-[#494c52]/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Members of relevant professional associations locally, regionally, and internationally
              </p>
            </div>

            {/* Comprehensive Coverage */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#9f8660]/20 to-[#9f8660]/30 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Comprehensive Coverage</h4>
              <p className="text-[#494c52]/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Expertise across all levels of courts and specialized dispute resolution committees
              </p>
            </div>

            {/* Client Trust */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#494c52]/20 to-[#494c52]/30 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-[#494c52]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Client Trust</h4>
              <p className="text-[#494c52]/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Unwavering commitment to professional ethics and confidentiality standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
