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
      { threshold: 0.2 }
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Scale,
      title: "Comprehensive Legal Coverage",
      subtitle: "All Legal Aspects Covered",
      desc: "Our expertise covers all aspects of legal matters including commercial, criminal, civil, corporate, investment, and family law. Our lawyers specialize in litigation before all levels of courts from First Instance to the Supreme Court.",
      highlights: [
        "Commercial & Criminal Law",
        "Civil & Corporate Matters",
        "Investment & Family Law",
        "All Court Levels Representation"
      ],
      color: "from-[#494c52] to-[#9f8660]"
    },
    {
      icon: Building2,
      title: "Professional Associations Membership",
      subtitle: "Regional & International Recognition",
      desc: "Our lawyers are members of relevant professional associations locally, regionally, and internationally. We maintain professional ethics standards and confidentiality of information in dealing with our clients.",
      highlights: [
        "Local Professional Associations",
        "Regional Legal Networks",
        "International Recognition",
        "Ethics & Confidentiality Standards"
      ],
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      icon: Users,
      title: "Specialized Dispute Resolution",
      subtitle: "Expert Arbitration & Mediation",
      desc: "We possess expertise in resolving disputes at Administrative, Labor, and Tenancy Dispute Settlement Committees as well as the Arbitration Committee. Our commitment is maintaining professional standards and client value.",
      highlights: [
        "Administrative Disputes",
        "Labor & Tenancy Matters",
        "Arbitration Services",
        "Professional Standards Commitment"
      ],
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      icon: Shield,
      title: "Client Information Protection",
      subtitle: "Confidentiality & Professional Ethics",
      desc: "Our commitment is to maintain professional ethics standards and confidentiality of information when dealing with our clients. We ensure the highest level of trust and security in all our legal services.",
      highlights: [
        "Information Confidentiality",
        "Professional Ethics",
        "Client Trust & Security",
        "Highest Service Standards"
      ],
      color: "from-[#9f8660] to-[#494c52]"
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
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative w-full bg-white py-16 sm:py-20 overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#9f8660] rounded-full animate-pulse opacity-25 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#494c52] rounded-full animate-pulse opacity-20 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#c0b688] rounded-full animate-pulse opacity-15 delay-700"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Four Reasons to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Trust Al-Khaldi
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#c0b688] rounded-full"></div>
              <div className="w-3 h-3 bg-[#c0b688] rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#c0b688] rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              Our expertise covers all aspects of legal matters with professional associations membership, specialized dispute resolution capabilities, and unwavering commitment to client confidentiality and professional ethics.
            </p>
          </div>

          {/* Slider Container */}
          <div className={`relative mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} `}>

            {/* Cards Container */}
            <div className="relative overflow-hidden py-10">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative mx-4">

                      {/* Card */}
                      <div className="relative bg-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-[#c0b688]/30 group">

                        {/* Black Glow Effect from Bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>

                        {/* Beautiful Border Gradient Effect */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                             style={{
                               background: `linear-gradient(45deg, #c0b688, #9f8660, #494c52, #c0b688)`,
                               backgroundSize: '300% 300%',
                               animation: 'gradientShift 3s ease infinite',
                               padding: '2px'
                             }}>
                          <div className="w-full h-full bg-white rounded-3xl"></div>
                        </div>

                        {/* Additional Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                        {/* Card Content */}
                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                          {/* Left Content */}
                          <div className="space-y-6">

                            {/* Icon & Number */}
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="text-[#494c52]/40 text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                0{index + 1}
                              </div>
                            </div>

                            {/* Content */}
                            <div>
                              <p className="text-[#9f8660] text-sm font-medium uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {service.subtitle}
                              </p>
                              <h3 className="text-3xl sm:text-4xl font-bold text-[#494c52] mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                {service.title}
                              </h3>
                              <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                                {service.desc}
                              </p>
                            </div>
                          </div>

                          {/* Right Content - Highlights */}
                          <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-[#494c52] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                              Key Services
                            </h4>

                            <div className="space-y-4">
                              {service.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center space-x-3 group/item">
                                  <CheckCircle className="w-5 h-5 text-[#c0b688] flex-shrink-0 group-hover:item:scale-110 transition-transform duration-200" />
                                  <span className="text-gray-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <button className="mt-8 bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-8 py-3 rounded-xl hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 hover:border-[#c0b688] rounded-full flex items-center justify-center text-[#494c52] hover:text-[#9f8660] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 hover:border-[#c0b688] rounded-full flex items-center justify-center text-[#494c52] hover:text-[#9f8660] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#c0b688] scale-125' 
                      : 'bg-gray-300 hover:bg-[#c0b688]/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>25+</div>
              <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>500+</div>
              <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Cases Won</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1000+</div>
              <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Clients Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>6</div>
              <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>GCC Countries</div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>
    </>
  );
};

export default Points;
