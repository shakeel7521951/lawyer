// components/MissionObjectives.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function MissionObjectives() {
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
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Mission & Objectives
          </h2>

          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="text-[#c0b688] text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              DRIVING EXCELLENCE • INNOVATION • COMMITMENT
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-[#c0b688]/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-8 hover:border-[#c0b688]/40 transition-all duration-500 group h-full">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Mission
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#c0b688] to-[#9f8660]"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Our office is committed to providing legal services based on sufficient professional expertise and high academic competence. From the office founder to the latest employee, we ensure a team of legal scholars specializing in various fields.
                </p>

                {/* Specialization Areas */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#c0b688] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Areas of Expertise</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Civil & Commercial Transactions",
                      "Criminal Disputes",
                      "Family Matters",
                      "Banking & Electronic Transactions",
                      "International Cases",
                      "Legal Consultations"
                    ].map((area, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                        <div className="w-2 h-2 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex-shrink-0"></div>
                        <p className="text-white/80 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{area}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Values */}
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#c0b688]/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-[#c0b688] text-xs font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Expert Team</p>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-[#c0b688] text-xs font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Legal Excellence</p>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-[#c0b688] text-xs font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Client Protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-[#9f8660]/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-8 hover:border-[#c0b688]/40 transition-all duration-500 group h-full">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#9f8660] to-[#494c52] rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#c0b688] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Objectives
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#494c52]"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  We strive to etch our name in the legal arena by meticulously establishing an entity rooted in sound legal practice, respecting laws and institutions, and executing the vision of His Highness the Amir of the State.
                </p>

                {/* Strategic Goals */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#c0b688] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                          Professional Excellence
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          Achieving professionalism in client services through complete competence, experience, and unwavering credibility while expediting legal procedures without compromising quality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#c0b688] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                          Community Engagement
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          Engaging with our local environment by understanding community needs and providing legal assistance to those in need.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#c0b688] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                          Global Expansion
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          Broadening our client base and expanding our practice to a wider geographic scope on an international scale.
                        </p>
                      </div>
                    </div>
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
