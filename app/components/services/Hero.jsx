"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Building2, Users, Shield, ChevronRight, Star } from "lucide-react";

const Hero = () => {
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

  const stats = [
    { number: "500+", label: "Cases Handled", icon: Scale },
    { number: "25+", label: "Years Experience", icon: Star },
    { number: "4", label: "Service Categories", icon: Building2 },
    { number: "6", label: "GCC Countries", icon: Users },
  ];

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
        className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-20 sm:py-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
            }}
          ></div>
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
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-[#c0b688]/30 mb-6">
                <Scale className="w-4 h-4 text-[#c0b688]" />
                <span className="text-[#c0b688] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  COMPREHENSIVE LEGAL SERVICES
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Expert Legal{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                  Services
                </span>
                <br />
                Across the GCC
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-[#c0b688] to-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
              </div>

              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
                From corporate law to individual representation, from government institutions to specialized banking services,
                <span className="font-semibold text-[#c0b688]"> Al-Khaldi Law Firm</span> provides comprehensive legal solutions
                backed by over 25 years of professional excellence and deep expertise across all legal domains.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Contact Us Today
                </button>
              </div>

              {/* Stats Mini Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-[#c0b688]" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/70 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Services Preview */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">

                {/* Main Services Card */}
                <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Our Service Categories
                  </h3>

                  <div className="space-y-4">
                    {[
                      { icon: Building2, title: "Corporate Services", desc: "Company incorporation, IP protection, mergers & acquisitions" },
                      { icon: Shield, title: "Government Relations", desc: "Legislative consultations, regulatory compliance, governance" },
                      { icon: Users, title: "Individual Services", desc: "Family law, criminal defense, personal legal matters" },
                      { icon: Scale, title: "Legal Support", desc: "Banking services, arbitration, risk management" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {service.title}
                          </h4>
                          <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {service.desc}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-[#c0b688] group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>25+</div>
                    <div className="text-xs text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>Years</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-xs text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>Trusted</div>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-[#c0b688]/20 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <stat.icon className="w-6 h-6 text-[#c0b688]" />
                </div>
                <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;