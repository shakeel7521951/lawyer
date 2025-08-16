// components/IntroVision.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function IntroVision() {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 sm:py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Our Foundation
          </h2>

          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div
              className="text-[#c0b688] text-sm font-light tracking-[0.3em]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              EXCELLENCE • INTEGRITY • TRUST
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Introduction */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-[#c0b688]/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-8 hover:border-[#c0b688]/40 transition-all duration-500 group">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#c0b688] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Introduction
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#c0b688] to-[#9f8660]"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p
                  className="text-white/90 leading-relaxed text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  We at our office are proud to provide the highest quality legal
                  services to companies, governmental institutions, and
                  individuals, which contributes to building a strong and
                  long-term relationship based on mutual trust.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#c0b688]/20">
                  <p
                    className="text-white/80 leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    We spare no efforts to provide the best legal services to
                    achieve optimal outcomes, with our guarantee to protect
                    your legal rights and interests.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-[#c0b688]/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p
                      className="text-[#c0b688] text-xs font-semibold"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Excellence
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-[#c0b688]/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-[#c0b688] text-xs font-semibold"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Trust
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-[#c0b688]/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-[#c0b688] text-xs font-semibold"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-[#9f8660]/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-8 hover:border-[#c0b688]/40 transition-all duration-500 group">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#9f8660] to-[#494c52] rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#c0b688] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Vision
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#494c52]"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p
                  className="text-white/90 leading-relaxed text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Our office aspires to enhance its position as a legal
                  institution within the Qatari and international community.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                    <h4
                      className="font-semibold text-[#c0b688] mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Client-Centered Approach
                    </h4>
                    <p
                      className="text-white/80 text-sm leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      We aim to gain the trust and satisfaction of our clients by
                      adhering to principles of quality and professionalism in
                      service delivery.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                    <h4
                      className="font-semibold text-[#c0b688] mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Innovation & Excellence
                    </h4>
                    <p
                      className="text-white/80 text-sm leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      We strive for excellence in our work, breaking away from
                      traditional legal practices with innovative approaches
                      aligned with technological advancement.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                    <h4
                      className="font-semibold text-[#c0b688] mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Legal Awareness
                    </h4>
                    <p
                      className="text-white/80 text-sm leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Our core focus on effective legal support promotes legal
                      awareness and empowers clients in their daily actions and
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
