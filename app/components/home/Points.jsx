"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Building2, Users, Shield, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const Points = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Scale,
      title: "Comprehensive Legal Coverage",
      subtitle: "All Legal Aspects Covered",
      desc: "Our expertise covers all aspects of legal matters including commercial, criminal, civil, corporate, investment, and family law.",
      highlights: [
        "Commercial & Criminal Law",
        "Civil & Corporate Matters",
        "Investment & Family Law",
        "All Court Levels"
      ],
    },
    {
      icon: Building2,
      title: "Professional Associations",
      subtitle: "Regional & International Recognition",
      desc: "Our lawyers are members of relevant professional associations locally, regionally, and internationally.",
      highlights: [
        "Local Professional Associations",
        "Regional Legal Networks",
        "International Recognition",
        "Ethics & Confidentiality"
      ],
    },
    {
      icon: Users,
      title: "Specialized Dispute Resolution",
      subtitle: "Expert Arbitration & Mediation",
      desc: "We possess expertise in resolving disputes at Administrative, Labor, and Tenancy Dispute Settlement Committees.",
      highlights: [
        "Administrative Disputes",
        "Labor & Tenancy Matters",
        "Arbitration Services",
        "Professional Standards"
      ],
    },
    {
      icon: Shield,
      title: "Client Information Protection",
      subtitle: "Confidentiality & Professional Ethics",
      desc: "Our commitment is to maintain professional ethics standards and confidentiality of information when dealing with our clients.",
      highlights: [
        "Information Confidentiality",
        "Professional Ethics",
        "Client Trust & Security",
        "Highest Service Standards"
      ],
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

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
        className="relative w-full bg-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-4 py-2 border border-[#c0b688]/20 mb-4 sm:mb-6">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-medium text-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#494c52]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Four Reasons to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Trust Al-Khaldi
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688] rounded-full"></div>
              <div className="w-2 h-2 bg-[#c0b688] rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688] rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our expertise covers all aspects of legal matters with professional associations membership and specialized dispute resolution capabilities.
            </p>
          </div>

          {/* Mobile-First Cards Layout */}
          <div className="md:hidden space-y-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Mobile Card Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#9f8660] text-xs font-medium uppercase tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-[#494c52]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-[#494c52]/30 text-2xl font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    0{index + 1}
                  </span>
                </div>

                {/* Mobile Card Content */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {service.desc}
                </p>

                {/* Mobile Highlights */}
                <div className="grid grid-cols-2 gap-2">
                  {service.highlights.slice(0, 4).map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#c0b688] flex-shrink-0" />
                      <span className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Slider - Hidden on Mobile */}
          <div className={`hidden md:block relative mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Cards Container */}
            <div className="relative overflow-hidden py-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative mx-4">

                      {/* Card */}
                      <div className="relative bg-white rounded-2xl p-8 lg:p-10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#c0b688]/30">

                        {/* Card Content */}
                        <div className="grid lg:grid-cols-2 gap-8 items-center">

                          {/* Left Content */}
                          <div className="space-y-6">

                            {/* Icon & Number */}
                            <div className="flex items-center space-x-4">
                              <div className="w-14 h-14 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center shadow-lg">
                                <service.icon className="w-7 h-7 text-white" />
                              </div>
                              <div className="text-[#494c52]/40 text-3xl font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                                0{index + 1}
                              </div>
                            </div>

                            {/* Content */}
                            <div>
                              <p className="text-[#9f8660] text-sm font-medium uppercase tracking-wide mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {service.subtitle}
                              </p>
                              <h3 className="text-2xl lg:text-3xl font-bold text-[#494c52] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {service.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {service.desc}
                              </p>
                            </div>
                          </div>

                          {/* Right Content - Highlights */}
                          <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-[#494c52]" style={{ fontFamily: "'Playfair Display', serif" }}>
                              Key Services
                            </h4>

                            <div className="space-y-3">
                              {service.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                  <CheckCircle className="w-5 h-5 text-[#c0b688] flex-shrink-0" />
                                  <span className="text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <button className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-6 py-3 rounded-lg hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 font-medium shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 hover:border-[#c0b688] rounded-full flex items-center justify-center text-[#494c52] hover:text-[#9f8660] transition-all duration-300 shadow-md z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 hover:border-[#c0b688] rounded-full flex items-center justify-center text-[#494c52] hover:text-[#9f8660] transition-all duration-300 shadow-md z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#c0b688] scale-125' 
                      : 'bg-gray-300 hover:bg-[#c0b688]/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Stats - Mobile Optimized */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#494c52] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>25+</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#494c52] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>500+</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Cases Won</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#494c52] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>1000+</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Clients Served</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#494c52] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>6</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>GCC Countries</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Points;
