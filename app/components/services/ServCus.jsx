"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Building2, Users, Shield, ChevronRight, CheckCircle, Globe, Award } from "lucide-react";
import Link from "next/link";

const ServCus = () => {
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

  const serviceData = [
    {
      id: 1,
      title: 'Corporate Services',
      subtitle: 'Business Legal Solutions',
      icon: Building2,
      image: '/about/corporate.jpeg',
      description: 'Complete legal framework for corporations including incorporation, IP protection, and commercial transactions.',
      features: [
        'Company Incorporation',
        'IP Protection',
        'Foreign Investments',
        'Commercial Contracts'
      ],
      btnText: 'Explore Services',
      link: '/services/corporate-services',
      color: 'from-[#9f8660] to-[#c0b688]'
    },
    {
      id: 2,
      title: 'Government Relations',
      subtitle: 'Public Sector Excellence',
      icon: Shield,
      image: '/about/govt.jpeg',
      description: 'Specialized counsel for government institutions including legislative consultations and compliance.',
      features: [
        'Legislative Consultations',
        'Governance Practices',
        'Regulatory Compliance',
        'Government Tendering'
      ],
      btnText: 'View Services',
      link: '/services/government-services',
      color: 'from-[#c0b688] to-[#9f8660]'
    },
    {
      id: 3,
      title: 'Individual Services',
      subtitle: 'Personal Legal Protection',
      icon: Users,
      image: '/about/individual.jpeg',
      description: 'Comprehensive personal legal services covering family law, immigration, and personal matters.',
      features: [
        'Family & Criminal Law',
        'Immigration Services',
        'Estate Planning',
        'Personal Contracts'
      ],
      btnText: 'Learn More',
      link: '/services/individual-services',
      color: 'from-[#494c52] to-[#9f8660]'
    },
    {
      id: 4,
      title: 'Legal Support',
      subtitle: 'Specialized Framework',
      icon: Scale,
      image: '/about/legalsprt.jpeg',
      description: 'Advanced legal support including banking services, arbitration, and compliance consulting.',
      features: [
        'Banking Legal Services',
        'Arbitration & Mediation',
        'Risk Management',
        'AML Compliance'
      ],
      btnText: 'Discover More',
      link: '/services/legal-support',
      color: 'from-[#9f8660] to-[#494c52]'
    },
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
        className="relative w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 overflow-hidden"
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
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-5 py-2 border border-[#c0b688]/20 mb-4">
              <Globe className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                OUR SERVICES
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Expert Legal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Solutions
              </span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              Comprehensive legal expertise across four core service areas, ensuring complete coverage for all your legal needs.
            </p>
          </div>

          {/* Services Grid - Modern Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {serviceData.map((service, index) => (
              <div
                key={service.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Modern Card Container */}
                <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#c0b688]/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">

                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full blur-3xl transform translate-x-8 -translate-y-8`}></div>
                  </div>

                  {/* Service Header */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-[#494c52]/30 text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        0{service.id}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <p className="text-[#9f8660] text-xs font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {service.subtitle}
                      </p>
                      <h3
                        className="text-xl font-bold text-[#494c52] mb-3 leading-tight group-hover:text-[#9f8660] transition-colors duration-300"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className={`transition-all duration-500 ${hoveredCard === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-1">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0`}></div>
                            <span className="text-gray-700 text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Image Strip */}
                    <div className="relative h-16 rounded-xl overflow-hidden mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-xs font-bold tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                          PROFESSIONAL EXPERTISE
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={service.link}>
                      <button className={`group/btn w-full bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span>{service.btnText}</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </Link>

                    {/* Progress Indicator */}
                    <div className="flex justify-center mt-3">
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < service.id ? `bg-gradient-to-r ${service.color}` : 'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color.replace('bg-', 'border-')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Section - Compact */}
          <div className={`bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-6 sm:p-8 text-white transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Professional Legal Excellence
                </h3>
                <p className="text-base text-white/90 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  25+ years of expertise across all legal domains with unmatched service quality.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Scale, number: "500+", label: "Cases" },
                  { icon: Award, number: "25+", label: "Years" },
                  { icon: Building2, number: "100+", label: "Clients" },
                  { icon: Globe, number: "6", label: "Countries" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 border border-white/30">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/80 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServCus;

