"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Scale,
  Building2,
  Users,
  Shield,
  ChevronRight,
  Star,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation("services/hero");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Stats ko safely handle karna
  const rawStats = t("stats", { returnObjects: true });
  const stats = Array.isArray(rawStats)
    ? rawStats.map((stat, index) => ({
      ...stat,
      icon: [Scale, Star, Building2, Users][index] || Scale,
    }))
    : [];

  // Services ko safely handle karna
  const rawServices = t("services", { returnObjects: true });
  const services = Array.isArray(rawServices)
    ? rawServices.map((service, index) => ({
      ...service,
      icon: [Building2, Shield, Users, Scale][index] || Scale,
    }))
    : [];

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
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Crimson+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-20 sm:py-24 overflow-hidden">
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
            <div data-aos="fade-right">
              {/* Badge */}
              <div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-[#c0b688]/30 mb-6"
                data-aos="zoom-in"
              >
                <Scale className="w-4 h-4 text-[#c0b688]" />
                <span className="text-[#c0b688] font-semibold text-sm tracking-wider">
                  {t("badge")}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                data-aos="fade-up"
              >
                {t("heading.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                  {t("heading.titletwo")}
                </span>
                <br />
                {t("heading.titlethree")}
              </h1>

              {/* Decorative Line */}
              <div
                className="flex items-center space-x-4 mb-8"
                data-aos="zoom-in-left"
              >
                <div className="w-16 h-1 bg-gradient-to-r from-[#c0b688] to-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
              </div>

              {/* Description */}
              <p
                className="text-lg text-white/90 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
                <Link href="/services/legal-support" passHref>
                  <button
                    className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 text-center w-full sm:w-auto"
                    data-aos="zoom-in-right"
                  >
                    <span>{t("cta.primary")}</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link href="/contact" passHref>
                  <button
                    className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold w-full sm:w-auto"
                    data-aos="zoom-in-left"
                  >
                    {t("cta.secondary")}
                  </button>
                </Link>
              </div>

              {/* Stats Mini Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                    data-aos="flip-left"
                    data-aos-delay={index * 150}
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-[#c0b688]" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <div className="relative">
                {/* Main Services Card */}
                <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3
                    className="text-2xl font-bold text-white mb-6 text-center"
                    data-aos="fade-down"
                  >
                    {t("serviceCategoriesHeading")}
                  </h3>

                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl border border-white/20"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                      >
                        {/* Icon */}
                        <div
                          className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center shadow-lg"
                          data-aos="zoom-in"
                          data-aos-delay={index * 200 + 100}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <h4
                            className="text-white font-semibold mb-1"
                            data-aos="fade-right"
                            data-aos-delay={index * 200 + 200}
                          >
                            {service.title}
                          </h4>
                          <p
                            className="text-white/70 text-sm"
                            data-aos="fade-left"
                            data-aos-delay={index * 200 + 300}
                          >
                            {service.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ChevronRight
                          className="w-5 h-5 text-white/50"
                          data-aos="flip-left"
                          data-aos-delay={index * 200 + 400}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                <div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl p-4 shadow-xl"
                  data-aos="zoom-in"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {t("floatingStats.years")}
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-xs text-white/90">
                      {t("floatingStats.trusted")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="flip-up"
                data-aos-delay={index * 150}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <stat.icon className="w-6 h-6 text-[#c0b688]" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
