// components/FounderProfile.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function FounderProfile() {
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
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#494c52] via-[#9f8660] to-[#c0b688] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Meet Our Founder
          </h2>

          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="text-[#9f8660] text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              LEADERSHIP • EXPERTISE • VISION
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>

          <p className="text-lg text-[#494c52]/80 max-w-3xl mx-auto mt-6 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Leading with expertise, integrity, and a commitment to excellence in legal services
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0b688]/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#494c52] via-[#494c52] to-[#9f8660] px-8 py-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c0b688]/30 to-[#9f8660]/30 backdrop-blur-sm rounded-full mb-6 border border-[#c0b688]/30">
                    <svg className="w-10 h-10 text-[#c0b688]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Founder & Managing Partner
                  </h3>
                  <p className="text-[#c0b688] text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Al-Khaldi Law Firm and Legal Consultations
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Career Overview */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c0b688]/20 to-[#9f8660]/20 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#494c52]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Professional Journey
                    </h4>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-[#c0b688] to-[#9f8660] mt-1"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c0b688]/10 via-[#c0b688]/5 to-[#9f8660]/10 p-8 rounded-2xl border border-[#c0b688]/20">
                  <p className="text-[#494c52] leading-relaxed text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Began his distinguished legal career in 2005 with the Legal Affairs Department at the Ministry of Civil Service and Housing, progressing through various ministerial roles including the Ministry of Labor and Social Affairs, Ministry of Administrative Development, Labor and Social Affairs, and the Regulatory Authority for Charitable Activities.
                  </p>
                </div>
              </div>

              {/* Leadership Positions */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#9f8660]/20 to-[#494c52]/20 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#494c52]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Leadership Excellence
                    </h4>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#494c52] mt-1"></div>
                  </div>
                </div>

                <div className="bg-white border border-[#c0b688]/20 p-8 rounded-2xl shadow-lg">
                  <p className="text-[#494c52] leading-relaxed text-lg mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Held numerous prestigious leadership positions throughout his career:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Head of Legislation and Contracts Department",
                      "Head of Legal Research and Studies Department",
                      "Head of Cases and Investigations Department",
                      "Assistant Director of Legal Affairs Department",
                      "Director of Legal Affairs Department",
                      "Director of International Cooperation Department",
                      "Director of Supervision and Control Department"
                    ].map((position, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-[#c0b688]/5 to-gray-50 rounded-xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300">
                        <div className="w-2 h-2 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#494c52] text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {position}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* International Recognition */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#494c52]/20 to-[#9f8660]/20 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-[#494c52]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#494c52]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      International Recognition
                    </h4>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-[#494c52] to-[#9f8660] mt-1"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/5 p-6 rounded-xl border border-[#c0b688]/20 hover:border-[#c0b688]/30 transition-all duration-300">
                    <p className="text-[#494c52] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <span className="font-semibold text-[#9f8660]" style={{ fontFamily: "'Cinzel', serif" }}>Legislative Leadership:</span> Served as a member of 22 legislative committees responsible for amending and creating most of Qatar's laws.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/5 p-6 rounded-xl border border-[#c0b688]/20 hover:border-[#c0b688]/30 transition-all duration-300">
                    <p className="text-[#494c52] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <span className="font-semibold text-[#9f8660]" style={{ fontFamily: "'Cinzel', serif" }}>Specialized Committees:</span> Active participation in labor dispute resolution, human trafficking prevention, women's and children's rights protection, and international and humanitarian law committees.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/5 p-6 rounded-xl border border-[#c0b688]/20 hover:border-[#c0b688]/30 transition-all duration-300">
                    <p className="text-[#494c52] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <span className="font-semibold text-[#9f8660]" style={{ fontFamily: "'Cinzel', serif" }}>International Representation:</span> Represented the State of Qatar in regional and international forums, including bilateral agreements committees, International Labor Organization, UPR Committee, and Council of Human Rights.
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
