"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, FileText, Scale, CheckCircle, Users, TrendingUp, Phone, Globe } from "lucide-react";

const OurProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  // Auto-progress through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // AL KHALDI Law Firm legal process
  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free comprehensive consultation to understand your legal needs and provide initial legal assessment based on our expertise across all areas of law.",
      icon: MessageCircle,
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      step: "2",
      title: "Legal Analysis",
      description: "Our team of legal scholars conducts thorough analysis grounded in scientific knowledge and professional accumulations to develop the optimal legal strategy.",
      icon: FileText,
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      step: "3",
      title: "Documentation & Preparation",
      description: "Meticulous preparation of all legal documents, contracts, and pleadings with attention to detail and adherence to applicable laws and regulations.",
      icon: Scale,
      color: "from-[#494c52] to-[#9f8660]"
    },
    {
      step: "4",
      title: "Legal Representation",
      description: "Expert representation before all levels of courts, from First Instance to Supreme Court, including specialized committees and arbitration tribunals.",
      icon: Users,
      color: "from-[#9f8660] to-[#494c52]"
    },
    {
      step: "5",
      title: "Case Resolution",
      description: "Efficient resolution of legal matters through our expedited procedures without compromising service quality, ensuring optimal outcomes for our clients.",
      icon: CheckCircle,
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      step: "6",
      title: "Ongoing Support",
      description: "Continuous legal advisory and support, embracing new methods and technological advancements to provide modern legal solutions for future needs.",
      icon: TrendingUp,
      color: "from-[#9f8660] to-[#c0b688]"
    }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-[#c0b688]/30 mb-6">
              <Scale className="w-4 h-4 text-[#c0b688]" />
              <span className="text-[#c0b688] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                OUR APPROACH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Legal Process
              </span>
            </h2>

            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              From initial consultation to successful resolution, we follow a proven methodology that combines academic excellence with practical expertise to deliver optimal legal outcomes.
            </p>
          </div>

          {/* Process Steps - Desktop Layout */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-white/20">
              <div
                className="w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-2000 ease-out"
                style={{ height: `${((activeStep + 1) / processSteps.length) * 100}%` }}
              ></div>
            </div>

            <div className="space-y-24 relative">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    index <= activeStep ? "opacity-100 translate-y-0" : "opacity-60 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`grid grid-cols-2 gap-16 items-center ${index % 2 === 0 ? "" : "direction-rtl"}`}>
                    {/* Content Side */}
                    <div className={`${index % 2 === 0 ? "order-1" : "order-2"} space-y-6`}>
                      <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                        index === activeStep ? "border-[#c0b688]/50 bg-white/15" : ""
                      } group cursor-pointer`}
                      onClick={() => setActiveStep(index)}>
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                          {step.step}
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {step.description}
                          </p>

                          {/* Active indicator */}
                          {index === activeStep && (
                            <div className="flex items-center space-x-2 mt-4">
                              <CheckCircle className="w-5 h-5 text-[#c0b688]" />
                              <span className="text-[#c0b688] text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Currently Active
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Connecting Circle Side */}
                    <div className={`${index % 2 === 0 ? "order-2" : "order-1"} flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                      <div className="relative">
                        {/* Large Central Circle */}
                        <div className={`w-24 h-24 rounded-full border-4 transition-all duration-500 ${
                          index <= activeStep
                            ? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
                            : "border-white/30 bg-white/10"
                        } flex items-center justify-center shadow-2xl cursor-pointer group hover:scale-110`}
                        onClick={() => setActiveStep(index)}>
                          <step.icon className={`w-10 h-10 transition-colors duration-300 ${index <= activeStep ? "text-white" : "text-white/50"}`} />

                          {/* Pulse effect for active */}
                          {index === activeStep && (
                            <div className="absolute inset-0 rounded-full bg-[#c0b688] animate-ping opacity-30"></div>
                          )}
                        </div>

                        {/* Connecting Line to Center */}
                        <div className={`absolute top-1/2 transform -translate-y-0.5 w-16 h-1 bg-white/20 ${
                          index % 2 === 0 ? "-right-16" : "-left-16"
                        }`}>
                          <div className={`h-full bg-gradient-to-r from-[#c0b688] to-[#9f8660] transition-all duration-500 ${
                            index <= activeStep ? "w-full" : "w-0"
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden grid grid-cols-1 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  {/* Connecting line for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-white/20">
                      <div className={`w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-500 ${
                        index < activeStep ? "h-full" : "h-0"
                      }`}></div>
                    </div>
                  )}

                  {/* Circle */}
                  <div className={`w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                    index <= activeStep
                      ? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
                      : "border-white/30 bg-white/10"
                  } flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <step.icon className={`w-6 h-6 transition-colors duration-300 ${index <= activeStep ? "text-white" : "text-white/50"}`} />
                  </div>

                  {/* Content */}
                  <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 transition-all duration-500 flex-1 ${
                    index === activeStep ? "border-[#c0b688]/50 bg-white/15" : ""
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {step.title}
                      </h3>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg flex-shrink-0">
                        {step.step}
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Contact CTA */}
          <div className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white border border-white/20">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Experience Our Professional Legal Process
              </h3>
              <p className="text-lg text-white/90 mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                Let AL KHALDI guide you through your legal journey with our proven methodology and unwavering dedication to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Start Your Consultation</span>
                </a>
                <a
                  href="https://wa.me/97466164000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Globe className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
