"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Scale, Building2, Users, Shield, ChevronRight, CheckCircle,
  FileText, Globe, Briefcase, CreditCard, Gavel, TrendingUp,
  Lock, AlertTriangle, Target, Award, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  Scale,
  Building2,
  Users,
  Shield,
  CheckCircle,
  FileText,
  Globe,
  Briefcase,
  CreditCard,
  Gavel,
  TrendingUp,
  Lock,
  AlertTriangle,
  Target,
  Award,
  ArrowUpRight
};

const CompService = () => {
  const { t } = useTranslation("services/compservice");
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Safe categories parsing
  const rawCategories = t("categories", { returnObjects: true });
  const categories = Array.isArray(rawCategories) ? rawCategories : [];

  useEffect(() => {
    if (categories.length > 0) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % categories.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [categories]);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Crimson+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative w-full bg-white py-12 sm:py-16 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-5 py-2 border border-[#c0b688]/20 mb-4">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("header.badge")}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("header.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                {t("header.titletwo")}
              </span>{" "}
              {t("header.titlethree")}
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              {t("header.description")}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-10">
            <div className="bg-gray-50 rounded-2xl p-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`group relative flex items-center justify-center px-4 py-3 rounded-xl transition-all duration-300 ${activeCategory === index
                        ? "bg-white shadow-lg text-[#494c52] scale-105"
                        : "bg-transparent text-gray-600 hover:bg-white/50 hover:text-[#9f8660]"
                      }`}
                  >
                    <span className="font-medium text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {category.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Category Display */}
          {categories[activeCategory] && (
            <div className="rounded-3xl p-6 sm:p-8 border border-gray-100/50 bg-gray-50">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {categories[activeCategory].title}
                </h3>
                <p className="text-[#9f8660] font-medium text-base mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {categories[activeCategory].subtitle}
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm" style={{ fontFamily: "'Crimson Text', serif" }}>
                  {categories[activeCategory].description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories[activeCategory].services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-md"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <h4 className="text-base font-bold text-[#494c52] mb-2 group-hover:text-[#9f8660]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CompService;
