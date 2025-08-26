"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Scale,
  Target,
  Users,
  Shield,
  Award,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Objectives = () => {
  const [activeObjective, setActiveObjective] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation("home/objectives");

  const objectives = [
    {
      id: 1,
      title: t("objectives.0.title"),
      description: t("objectives.0.description"),
      icon: Scale,
    },
    {
      id: 2,
      title: t("objectives.1.title"),
      description: t("objectives.1.description"),
      icon: Target,
    },
    {
      id: 3,
      title: t("objectives.2.title"),
      description: t("objectives.2.description"),
      icon: Users,
    },
    {
      id: 4,
      title: t("objectives.3.title"),
      description: t("objectives.3.description"),
      icon: Shield,
    },
    {
      id: 5,
      title: t("objectives.4.title"),
      description: t("objectives.4.description"),
      icon: Award,
    },
  ];

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

  // Auto-progress through objectives
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveObjective((prev) => (prev + 1) % objectives.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Simple Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative w-full bg-gradient-to-br from-[#494c52] to-[#9f8660] py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#c0b688]/30 mb-4 sm:mb-6">
              <Target className="w-4 h-4 text-[#c0b688]" />
              <span
                className="text-[#c0b688] font-medium text-sm tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                {t("highlight")}
              </span>
              <br />
              {t("subtitle")}
            </h2>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("description")}
              <span className="font-semibold text-[#c0b688]">
                الخالدي Al-Khaldi,{" "}
              </span>
              {t("description2")}
            </p>
          </div>

          {/* Mobile-First Layout */}
          <div className="md:hidden space-y-6 mb-12">
            {objectives.map((objective, index) => (
              <div
                key={objective.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  index === activeObjective
                    ? "border-[#c0b688]/50 bg-white/15 scale-105"
                    : ""
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Mobile Card Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center">
                    <objective.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {objective.title}
                    </h3>
                  </div>
                  <span className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {objective.id}
                  </span>
                </div>

                {/* Mobile Card Content */}
                <p
                  className="text-white/90 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {objective.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Hidden on Mobile */}
          <div
            className={`hidden md:block transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Vertical Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-white/20 hidden lg:block">
              <div
                className="w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-1000 ease-out"
                style={{
                  height: `${
                    ((activeObjective + 1) / objectives.length) * 100
                  }%`,
                }}
              ></div>
            </div>

            <div className="space-y-12 lg:space-y-16 relative">
              {objectives.map((objective, index) => (
                <div
                  key={objective.id}
                  className={`relative transition-all duration-700 ${
                    index <= activeObjective
                      ? "opacity-100 translate-y-0"
                      : "opacity-60 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Desktop Zigzag Layout */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content Side */}
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      } space-y-6`}
                    >
                      <div
                        className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 ${
                          index === activeObjective
                            ? "border-[#c0b688]/50 bg-white/15"
                            : ""
                        } group cursor-pointer`}
                        onClick={() => setActiveObjective(index)}
                      >
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                          {objective.id}
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <objective.icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3
                                className="text-xl lg:text-2xl font-bold text-white"
                                style={{
                                  fontFamily: "'Playfair Display', serif",
                                }}
                              >
                                {objective.title}
                              </h3>
                            </div>
                          </div>

                          <p
                            className="text-white/90 leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {objective.description}
                          </p>

                          {/* Action Button */}
                          <button
                            className="inline-flex items-center text-[#c0b688] hover:text-white transition-colors duration-300 text-sm font-medium"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {t("learnMore")}
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Visual Side - Placeholder for future enhancement */}
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      } hidden lg:flex items-center justify-center`}
                    >
                      <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <objective.icon className="w-16 h-16 text-white/30" />
                      </div>
                    </div>
                  </div>

                  {/* Connection Node for Desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                    <div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                        index <= activeObjective
                          ? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
                          : "border-white/30 bg-white/10"
                      } shadow-lg`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-12 space-x-2">
              {objectives.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveObjective(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeObjective
                      ? "bg-[#c0b688] scale-125"
                      : "bg-white/30 hover:bg-[#c0b688]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-white border border-white/20">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t("cta.title")}
              </h3>
              <p
                className="text-base sm:text-lg text-white/90 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("cta.description")}
              </p>
              <button
                className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-6 py-3 rounded-lg font-medium hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 shadow-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("cta.button")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Objectives;
