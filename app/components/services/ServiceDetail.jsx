"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Scale, Building2, Users, Shield, ChevronRight, CheckCircle,
  FileText, Globe, Briefcase, CreditCard, Gavel, TrendingUp,
  Lock, AlertTriangle, Target, Award, ArrowUpRight, Phone,
  Mail, MapPin, Star, Clock, User
} from "lucide-react";
import Link from "next/link";

const ServiceDetail = ({ serviceData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
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

  const getServiceIcon = (serviceId) => {
    const icons = {
      "corporate-services": Building2,
      "government-services": Shield,
      "individual-services": Users,
      "legal-support": Scale
    };
    return icons[serviceId] || Scale;
  };

  const ServiceIcon = getServiceIcon(serviceData.id);

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "process", label: "Process", icon: Target },
    { id: "benefits", label: "Benefits", icon: Award }
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

      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 sm:py-20 overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-repeat opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Content */}
              <div className="space-y-6">

                {/* Breadcrumb */}
                {/*<nav className="flex items-center space-x-2 text-sm">*/}
                {/*  <Link href="/" className="text-white/70 hover:text-[#c0b688] transition-colors">*/}
                {/*    Home*/}
                {/*  </Link>*/}
                {/*  <ChevronRight className="w-4 h-4 text-white/50" />*/}
                {/*  <Link href="/services" className="text-white/70 hover:text-[#c0b688] transition-colors">*/}
                {/*    Services*/}
                {/*  </Link>*/}
                {/*  <ChevronRight className="w-4 h-4 text-white/50" />*/}
                {/*  <span className="text-[#c0b688]">{serviceData.title}</span>*/}
                {/*</nav>*/}

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-[#c0b688]/30 mt-5">
                  <ServiceIcon className="w-4 h-4 text-[#c0b688]" />
                  <span className="text-[#c0b688] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {serviceData.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight" >
                  {serviceData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-[#c0b688] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {serviceData.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg text-white/90 leading-relaxed" >
                  {serviceData.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Phone className="w-5 h-5" />
                    <span>Schedule Consultation</span>
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300 flex items-center space-x-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Mail className="w-5 h-5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={serviceData.heroImage}
                    alt={serviceData.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-white" >25+</div>
                          <div className="text-xs text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>Years</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white" >500+</div>
                          <div className="text-xs text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>Cases</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white" >98%</div>
                          <div className="text-xs text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>Success</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c0b688]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={sectionRef} className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Navigation Tabs */}
            <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gray-50 rounded-2xl p-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-white shadow-lg text-[#494c52] scale-105'
                          : 'bg-transparent text-gray-600 hover:bg-white/50 hover:text-[#9f8660]'
                      }`}
                    >
                      <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#9f8660]' : 'text-gray-500'}`} />
                      <span className="font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#494c52] mb-6" >
                      Service Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg" >
                      {serviceData.overview}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-[#494c52] mb-2" >
                        {serviceData.services.length}+
                      </div>
                      <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Specialized Services
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#9f8660] to-[#494c52] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-[#494c52] mb-2" >
                        24/7
                      </div>
                      <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Support Available
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#494c52] to-[#c0b688] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-[#494c52] mb-2" >
                        25+
                      </div>
                      <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === "services" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#494c52] mb-8 text-center" >
                    Our {serviceData.title} Portfolio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceData.services.map((service, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#c0b688]/30 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#9f8660] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                        <h4 className="text-lg font-bold text-[#494c52] mb-3 group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4" >
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-[#c0b688] flex-shrink-0" />
                              <span className="text-gray-700 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-[#9f8660] text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Tab */}
              {activeTab === "process" && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-[#494c52] mb-8 text-center" >
                    Our Service Process
                  </h3>
                  <div className="relative">
                    {/* Process Timeline */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#c0b688] to-[#9f8660] w-full origin-top transform scale-y-100"></div>
                    </div>

                    <div className="space-y-8">
                      {serviceData.process.map((step, index) => (
                        <div key={index} className="relative flex items-start space-x-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white" >
                              {step.step}
                            </span>
                          </div>
                          <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h4 className="text-xl font-bold text-[#494c52] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {step.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed" >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === "benefits" && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-[#494c52] mb-8 text-center" >
                    Why Choose Our {serviceData.title}?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceData.benefits.map((benefit, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#c0b688]/30 transition-all duration-300 text-center group">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-gray-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#494c52] to-[#9f8660] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" >
              Ready to Get Started?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" >
              Contact Al-Khaldi Law Firm today to discuss your {serviceData.title.toLowerCase()} needs. Our expert team is ready to provide you with comprehensive legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#494c52] px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Phone className="w-5 h-5" />
                <span>+974 6616 4000</span>
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300 flex items-center space-x-2 justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
