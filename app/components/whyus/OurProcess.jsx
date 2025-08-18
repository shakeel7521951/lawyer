"use client";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MessageCircle,
  FileText,
  Scale,
  CheckCircle,
  Users,
  TrendingUp,
  Phone,
  Globe,
} from "lucide-react";

const OurProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Free comprehensive consultation to understand your legal needs and provide initial legal assessment based on our expertise across all areas of law.",
      icon: MessageCircle,
      color: "from-[#9f8660] to-[#c0b688]",
    },
    {
      step: "2",
      title: "Legal Analysis",
      description:
        "Our team of legal scholars conducts thorough analysis grounded in scientific knowledge and professional accumulations to develop the optimal legal strategy.",
      icon: FileText,
      color: "from-[#c0b688] to-[#9f8660]",
    },
    {
      step: "3",
      title: "Documentation & Preparation",
      description:
        "Meticulous preparation of all legal documents, contracts, and pleadings with attention to detail and adherence to applicable laws and regulations.",
      icon: Scale,
      color: "from-[#494c52] to-[#9f8660]",
    },
    {
      step: "4",
      title: "Legal Representation",
      description:
        "Expert representation before all levels of courts, from First Instance to Supreme Court, including specialized committees and arbitration tribunals.",
      icon: Users,
      color: "from-[#9f8660] to-[#494c52]",
    },
    {
      step: "5",
      title: "Case Resolution",
      description:
        "Efficient resolution of legal matters through our expedited procedures without compromising service quality, ensuring optimal outcomes for our clients.",
      icon: CheckCircle,
      color: "from-[#c0b688] to-[#9f8660]",
    },
    {
      step: "6",
      title: "Ongoing Support",
      description:
        "Continuous legal advisory and support, embracing new methods and technological advancements to provide modern legal solutions for future needs.",
      icon: TrendingUp,
      color: "from-[#9f8660] to-[#c0b688]",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 lg:py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-aos="fade-down"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-[#c0b688]/30 mb-6">
              <Scale className="w-4 h-4 text-[#c0b688]" />
              <span
                className="text-[#c0b688] font-semibold text-sm tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OUR APPROACH
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-aos="zoom-in"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Legal Process
              </span>
            </h2>

            <p
              className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif" }}
              data-aos="fade-up"
            >
              From initial consultation to successful resolution, we follow a
              proven methodology that combines academic excellence with
              practical expertise to deliver optimal legal outcomes.
            </p>
          </div>

          {/* Process Steps - Desktop Layout */}
          <div className="hidden lg:block">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-white/20">
              <div
                className="w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-2000 ease-out"
                style={{
                  height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="space-y-24 relative">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    index <= activeStep
                      ? "opacity-100 translate-y-0"
                      : "opacity-60 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`grid grid-cols-2 gap-16 items-center ${
                      index % 2 === 0 ? "" : "direction-rtl"
                    }`}
                  >
                    {/* Content Side */}
                    <div
                      className={`${
                        index % 2 === 0 ? "order-1" : "order-2"
                      } space-y-6`}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                        {/* Step Badge */}
                        <div
                          className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                          data-aos="zoom-in"
                          data-aos-delay={index * 150}
                        >
                          {step.step}
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            {/* Icon */}
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                              data-aos="flip-left"
                              data-aos-delay={index * 200}
                            >
                              <step.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3
                              className="text-2xl font-bold text-white mb-2 leading-tight"
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                              }}
                              data-aos="fade-right"
                              data-aos-delay={index * 250}
                            >
                              {step.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p
                            className="text-white/90 leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            data-aos="fade-left"
                            data-aos-delay={index * 300}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Circle Side */}
                    <div
                      className={`${
                        index % 2 === 0 ? "order-2" : "order-1"
                      } flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                      data-aos="zoom-in-up"
                      data-aos-delay={index * 200}
                    >
                      <div
                        className={`w-24 h-24 rounded-full border-4 flex items-center justify-center shadow-2xl ${
                          index <= activeStep
                            ? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
                            : "border-white/30 bg-white/10"
                        }`}
                      >
                        <step.icon
                          className={`w-10 h-10 transition-colors duration-300 ${
                            index <= activeStep
                              ? "text-white"
                              : "text-white/50"
                          }`}
                        />
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
                data-aos="fade-up"
              >
                <div className="flex items-start space-x-4">
                  {/* Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-white/20">
                      <div
                        className={`w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-500 ${
                          index < activeStep ? "h-full" : "h-0"
                        }`}
                      ></div>
                    </div>
                  )}

                  {/* Circle */}
                  <div
                    className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg flex-shrink-0 ${
                      index <= activeStep
                        ? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
                        : "border-white/30 bg-white/10"
                    }`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    <step.icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        index <= activeStep ? "text-white" : "text-white/50"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 flex-1 ${
                      index === activeStep ? "border-[#c0b688]/50 bg-white/15" : ""
                    }`}
                    data-aos="fade-left"
                    data-aos-delay={index * 200}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="text-lg font-bold text-white leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        data-aos="fade-right"
                      >
                        {step.title}
                      </h3>
                      <div
                        className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg flex-shrink-0"
                        data-aos="zoom-in"
                        data-aos-delay={index * 250}
                      >
                        {step.step}
                      </div>
                    </div>
                    <p
                      className="text-white/90 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      data-aos="fade-up"
                      data-aos-delay={index * 300}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
