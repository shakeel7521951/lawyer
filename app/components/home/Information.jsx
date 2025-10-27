"use client";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import {
  Scale,
  Building2,
  Users,
  Shield,
  ChevronRight,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const Information = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation("home/information");

  const stats = [
    { number: "19+", label: t("stats.years_experience"), icon: Award },
    {
      number: "22",
      label: t("stats.legislative_committees"),
      icon: CheckCircle,
    },
    { number: "1000+", label: t("stats.clients_served"), icon: Users },
    { number: "4", label: t("stats.service_categories"), icon: Globe },
  ];

  const services = [
    {
      id: 1,
      title: t("services.corporate.title"),
      subtitle: t("services.corporate.category"),
      description: t("services.corporate.description"),
      image: "/about/corporate.jpeg",
      features: t("services.corporate.features", { returnObjects: true }),
      icon: Building2,
      href: "/services/corporate-services",
    },
    {
      id: 2,
      title: t("services.government.title"),
      subtitle: t("services.government.category"),
      description: t("services.government.description"),
      image: "/home/government.jpg",
      features: t("services.government.features", { returnObjects: true }),
      icon: Shield,
      href: "/services/government-services",
    },
    {
      id: 3,
      title: t("services.individual.title"),
      subtitle: t("services.individual.category"),
      description: t("services.individual.description"),
      image: "/about/individual.jpeg",
      features: t("services.individual.features", { returnObjects: true }),
      icon: Users,
      href: "/services/individual-services",
    },
    {
      id: 4,
      title: t("services.specialized.title"),
      subtitle: t("services.specialized.category"),
      description: t("services.specialized.description"),
      image: "/about/legalsprt.jpeg",
      features: t("services.specialized.features", { returnObjects: true }),
      icon: Scale,
      href: "/services",
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

  return (
    <>
      {/* Google Fonts */}
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
        className="w-full bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-4 py-2 border border-[#c0b688]/20 mb-4 sm:mb-6">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span
                className="text-[#494c52] font-medium text-sm tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("title")}
            </h2>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("subtitle")}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div
                    className="text-xl sm:text-2xl font-bold text-[#494c52] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-600 font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#9f8660]" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="bg-[#c0b688] text-white px-3 py-1 rounded-full text-xs font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-[#494c52] mb-3 group-hover:text-[#9f8660] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed flex-grow"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {Array.isArray(service.features) &&
                      service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <ChevronRight className="w-4 h-4 text-[#c0b688] mr-2 flex-shrink-0" />
                          <span style={{ fontFamily: "'Inter', sans-serif" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Learn More Button */}
                  <Link href={service.href} passHref>
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-[#c0b688] text-white rounded-lg hover:bg-[#9f8660] transition-colors duration-300 text-sm font-medium mt-auto"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("buttons.learn_more")}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>


          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-6 sm:p-8 text-white">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t("cta.title")}
              </h3>
              <p
                className="text-gray-100 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("cta.subtitle")}
              </p>
              <Link href="/contact" passHref>
              <button
                className="inline-flex items-center px-6 py-3 bg-white text-[#494c52] rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("buttons.contact_us")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
