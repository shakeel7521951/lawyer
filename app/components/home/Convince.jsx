"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBalanceScale, FaHandshake, FaUserShield, FaClock, FaCheckCircle, FaAward, FaUsers, FaGavel } from "react-icons/fa";

const Convince = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const features = [
    {
      icon: FaBalanceScale,
      title: "Comprehensive Legal Coverage",
      description: "Our expertise covers all aspects of legal matters including commercial, criminal, civil, corporate, investment, and family law across all court levels.",
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      icon: FaHandshake,
      title: "Professional Ethics & Standards",
      description: "We maintain the highest professional ethics standards and confidentiality of information when dealing with our clients, ensuring complete trust.",
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      icon: FaUserShield,
      title: "Client Information Protection",
      description: "Our commitment to maintaining professional standards and confidentiality guarantees the security and protection of all client information.",
      color: "from-[#494c52] to-[#9f8660]"
    },
    {
      icon: FaClock,
      title: "Professional Associations Network",
      description: "Our lawyers are members of relevant professional associations locally, regionally, and internationally, ensuring global standards.",
      color: "from-[#9f8660] to-[#494c52]"
    }
  ];

  const stats = [
    { icon: FaAward, number: "25+", label: "Years Experience" },
    { icon: FaUsers, number: "500+", label: "Satisfied Clients" },
    { icon: FaGavel, number: "98%", label: "Success Rate" },
    { icon: FaCheckCircle, number: "6", label: "GCC Countries" }
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
        className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 overflow-hidden"
      >
        {/* Background Pattern */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
              <FaAward className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                WHY CHOOSE US
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Al Khaldi Law Firm
              </span>
              <br />
              الخالدي؟
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              Selecting the right legal partner is a decision that can greatly influence the outcome of your case. 
              At <strong className="text-[#9f8660]">Al Khaldi Law Firm</strong>, we combine legal expertise, a client-first approach, 
              and a strong reputation to deliver results that matter.
            </p>
          </div>

          {/* Hero Image & Content Section */}
          <div className={`mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Image Side */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700">
                  <img
                    src="/home/whychoseus.jpg"
                    alt="Al Khaldi Law Firm - Why Choose Us"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-[#c0b688]/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[#494c52] font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Trusted Partner
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#c0b688]/20 to-[#9f8660]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#494c52]/10 to-[#c0b688]/10 rounded-full blur-xl"></div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#494c52] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Our Commitment to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                      Excellence
                    </span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      We understand that legal issues can be stressful and complex. That's why our team works tirelessly 
                      to ensure your rights are protected, your voice is heard, and your case is handled with utmost professionalism.
                    </p>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      Our dedication goes beyond legal representation — we aim to be a trusted advisor, a strong advocate, 
                      and a reliable partner in every step of your legal journey.
                    </p>
                  </div>
                </div>

                {/* Stats Mini Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 text-center group">
                      <stat.icon className="w-6 h-6 text-[#9f8660] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold text-[#494c52] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#494c52] mb-3 group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className={`mt-20 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaGavel className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Your Trusted Legal Partner in the GCC
                </h3>
                
                <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Choosing <strong className="text-[#c0b688]">Al Khaldi Law Firm</strong> means choosing trust, transparency, and results. 
                  Whether you are an individual, a corporate client, or a government entity, our mission is to deliver 
                  unmatched legal solutions tailored to your needs. Let us be the partner you can rely on for every legal challenge you face.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#494c52] px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Get Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Convince;
