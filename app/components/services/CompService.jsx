"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Scale, Building2, Users, Shield, ChevronRight, CheckCircle,
  FileText, Globe, Briefcase, CreditCard, Gavel, TrendingUp,
  Lock, AlertTriangle, Target, Award, ArrowUpRight
} from "lucide-react";

const CompService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
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

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const serviceCategories = [
    {
      id: 1,
      title: "Corporate Services",
      subtitle: "Business Legal Solutions",
      icon: Building2,
      color: "from-[#9f8660] to-[#c0b688]",
      bgColor: "bg-gradient-to-br from-[#9f8660]/5 to-[#c0b688]/5",
      description: "Complete legal framework for businesses from incorporation to complex commercial transactions.",
      services: [
        {
          icon: FileText,
          title: "Company Incorporation",
          description: "Legal consultations for company formation and business setup across the GCC region."
        },
        {
          icon: Shield,
          title: "Intellectual Property Protection",
          description: "Comprehensive protection of patents, trademarks, copyrights, and IP rights."
        },
        {
          icon: Globe,
          title: "Foreign Investments & Subsidiaries",
          description: "Legal guidance for international investments and establishing overseas subsidiaries."
        },
        {
          icon: Target,
          title: "Governance & Transparency",
          description: "Best practices consultations for corporate governance and transparency standards."
        },
        {
          icon: CreditCard,
          title: "Tax Law Consultations",
          description: "Expert advice on tax regulations and compliance for corporate entities."
        },
        {
          icon: Gavel,
          title: "Commercial Litigation",
          description: "Court representation for commercial disputes with defense memoranda and lawsuit pleadings."
        }
      ]
    },
    {
      id: 2,
      title: "Government & Quasi-Government Services",
      subtitle: "Public Sector Legal Excellence",
      icon: Shield,
      color: "from-[#c0b688] to-[#9f8660]",
      bgColor: "bg-gradient-to-br from-[#c0b688]/5 to-[#9f8660]/5",
      description: "Specialized legal counsel for government institutions and regulatory compliance.",
      services: [
        {
          icon: FileText,
          title: "Legislative Consultations",
          description: "Legal consultations on latest developments in relevant legislation and regulatory changes."
        },
        {
          icon: Target,
          title: "Governance Best Practices",
          description: "Consultations on best practices for governance and transparency in public institutions."
        },
        {
          icon: AlertTriangle,
          title: "Regulatory Inquiries",
          description: "Legal support for dealing with inquiries from Audit Bureau and administrative committees."
        },
        {
          icon: CheckCircle,
          title: "Tendering & Bidding Compliance",
          description: "Ensuring legal compliance through reviewing government tendering and bidding procedures."
        },
        {
          icon: TrendingUp,
          title: "Asset Investment Consultations",
          description: "Legal advice on investing government institutional assets and public resources."
        },
        {
          icon: Briefcase,
          title: "International Agreements",
          description: "Preparing judicial and international agreements and institutional regulations."
        }
      ]
    },
    {
      id: 3,
      title: "Individual Customer Services",
      subtitle: "Personal Legal Protection",
      icon: Users,
      color: "from-[#494c52] to-[#9f8660]",
      bgColor: "bg-gradient-to-br from-[#494c52]/5 to-[#9f8660]/5",
      description: "Comprehensive personal legal services for all individual legal matters.",
      services: [
        {
          icon: Users,
          title: "Family & Criminal Law",
          description: "Legal consultations for civil, criminal, and family cases with expert representation."
        },
        {
          icon: Building2,
          title: "Business Incorporation",
          description: "Legal consultations for incorporation and managing sole proprietorships."
        },
        {
          icon: CreditCard,
          title: "Bankruptcy & Financial Settlements",
          description: "Legal assistance for individuals facing bankruptcy and financial difficulties."
        },
        {
          icon: Shield,
          title: "Intellectual Property",
          description: "Legal consultations on intellectual property law and patent applications."
        },
        {
          icon: Globe,
          title: "Immigration & Visa Services",
          description: "Consultations on visa and residency applications for studying or working abroad."
        },
        {
          icon: FileText,
          title: "Estate Planning",
          description: "Drafting wills, estates, inheritance cases, and dispute resolution services."
        }
      ]
    },
    {
      id: 4,
      title: "Legal Support Services",
      subtitle: "Specialized Legal Framework",
      icon: Scale,
      color: "from-[#9f8660] to-[#494c52]",
      bgColor: "bg-gradient-to-br from-[#9f8660]/5 to-[#494c52]/5",
      description: "Advanced legal support including banking, arbitration, and compliance services.",
      services: [
        {
          icon: CreditCard,
          title: "Banking Legal Services",
          description: "Comprehensive legal services for banks including contract drafting and dispute resolution."
        },
        {
          icon: Gavel,
          title: "Arbitration Services",
          description: "Specialized arbitration team with certified arbitrators for domestic and international disputes."
        },
        {
          icon: TrendingUp,
          title: "Risk Management",
          description: "Risk assessment, policy preparation, and corporate risk management system setup."
        },
        {
          icon: Lock,
          title: "Anti-Money Laundering",
          description: "AML compliance evaluation, policy preparation, and regulatory compliance consulting."
        },
        {
          icon: Target,
          title: "Corporate Governance",
          description: "Governance system evaluation, policy preparation, and corporate governance setup."
        },
        {
          icon: Scale,
          title: "Debt Collection",
          description: "Specialized department for civil judgments execution and debt collection across all sectors."
        }
      ]
    }
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
        className="relative w-full bg-white py-12 sm:py-16 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-5 py-2 border border-[#c0b688]/20 mb-4">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                SERVICE PORTFOLIO
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Detailed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Service
              </span>
              {' '}Breakdown
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              Explore our comprehensive range of specialized legal services designed for your specific needs.
            </p>
          </div>

          {/* Modern Category Tabs */}
          <div className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-50 rounded-2xl p-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {serviceCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`group relative flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeCategory === index
                        ? 'bg-white shadow-lg text-[#494c52] scale-105'
                        : 'bg-transparent text-gray-600 hover:bg-white/50 hover:text-[#9f8660]'
                    }`}
                  >
                    <category.icon className={`w-4 h-4 ${activeCategory === index ? 'text-[#9f8660]' : 'text-gray-500 group-hover:text-[#9f8660]'}`} />
                    <span className="font-medium text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {category.title.split(' ')[0]}
                    </span>
                    {activeCategory === index && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-[#c0b688] rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Category Display */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`${serviceCategories[activeCategory].bgColor} rounded-3xl p-6 sm:p-8 border border-gray-100/50`}>

              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${serviceCategories[activeCategory].color} rounded-2xl shadow-lg mb-4`}>
                  {React.createElement(serviceCategories[activeCategory].icon, { className: "w-8 h-8 text-white" })}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {serviceCategories[activeCategory].title}
                </h3>

                <p className="text-[#9f8660] font-medium text-base mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {serviceCategories[activeCategory].subtitle}
                </p>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm" style={{ fontFamily: "'Crimson Text', serif" }}>
                  {serviceCategories[activeCategory].description}
                </p>
              </div>

              {/* Modern Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceCategories[activeCategory].services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#c0b688]/30 transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${serviceCategories[activeCategory].color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <ArrowUpRight className={`w-4 h-4 text-gray-400 group-hover:text-[#9f8660] transition-colors duration-300 ${hoveredService === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                    </div>

                    {/* Service Content */}
                    <h4 className="text-base font-bold text-[#494c52] mb-2 leading-tight group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {service.description}
                    </p>

                    {/* Progress bar on hover */}
                    <div className={`mt-3 w-full h-0.5 bg-gray-200 rounded-full overflow-hidden`}>
                      <div className={`h-full bg-gradient-to-r ${serviceCategories[activeCategory].color} rounded-full transform transition-transform duration-500 ${hoveredService === index ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span className="font-semibold text-[#494c52]">{serviceCategories[activeCategory].services.length} specialized services</span> in this category
                    </p>
                  </div>
                  <button className="bg-gradient-to-r from-[#494c52] to-[#9f8660] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span>View All Services</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className={`mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ready for Expert Legal Consultation?
                </h3>

                <p className="text-base text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Contact Al-Khaldi Law Firm today for comprehensive legal solutions tailored to your specific needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-white text-[#494c52] px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span>Schedule Consultation</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Download Brochure
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

export default CompService;
