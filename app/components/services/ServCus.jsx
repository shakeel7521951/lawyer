"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Building2, Users, Shield, ChevronRight, Globe, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const iconMap = { Scale, Building2, Users, Shield, Globe, Award };

const ServCus = () => {
  const { t } = useTranslation("services/servcus");
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const serviceData = [
    { id: 1, icon: "Building2", image: "/about/corporate.jpeg", link: "/services/corporate-services", color: "from-[#9f8660] to-[#c0b688]" },
    { id: 2, icon: "Shield", image: "/about/govt.jpeg", link: "/services/government-services", color: "from-[#c0b688] to-[#9f8660]" },
    { id: 3, icon: "Users", image: "/about/individual.jpeg", link: "/services/individual-services", color: "from-[#494c52] to-[#9f8660]" },
    { id: 4, icon: "Scale", image: "/about/legalsprt.jpeg", link: "/services/legal-support", color: "from-[#9f8660] to-[#494c52]" }
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-5 py-2 border border-[#c0b688]/20 mb-4">
            <Globe className="w-4 h-4 text-[#9f8660]" />
            <span className="text-[#494c52] font-semibold text-xs tracking-wider">
              {t("header.badge")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52] leading-tight">
            {t("header.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
              {t("header.titletwo")}
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("header.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {serviceData.map((service, index) => {
            const IconComp = iconMap[service.icon];
            const features = t(`services.${service.id - 1}.features`, { returnObjects: true });
            const safeFeatures = Array.isArray(features) ? features : [];

            return (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                  
                  {/* Top Icon + Number */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                      <IconComp className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right text-[#494c52]/30 text-3xl font-bold">
                      0{service.id}
                    </div>
                  </div>

                  {/* Text + Features */}
                  <div className="relative z-10 space-y-4">
                    <p className="text-[#9f8660] text-xs font-bold uppercase">
                      {t(`services.${service.id - 1}.subtitle`)}
                    </p>
                    <h3 className="text-xl font-bold text-[#494c52] mb-3 leading-tight">
                      {t(`services.${service.id - 1}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {t(`services.${service.id - 1}.description`)}
                    </p>

                    <div className={`${hoveredCard === service.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all`}>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {safeFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-1">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                            <span className="text-gray-700 text-xs font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Overlay */}
                    <div className="relative h-16 rounded-xl overflow-hidden mb-4">
                      <img src={service.image} alt={t(`services.${service.id - 1}.title`)} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                        {t("imageOverlay")}
                      </div>
                    </div>

                    <Link href={service.link}>
                      <button className={`w-full bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm`}>
                        <span>{t(`services.${service.id - 1}.btnText`)}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Footer */}
        <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-6 sm:p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {t("cardFooter.title")}
            </h3>
            <p className="text-base text-white/90 max-w-2xl mx-auto">
              {t("cardFooter.description")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(Array.isArray(t("stats", { returnObjects: true })) ? t("stats", { returnObjects: true }) : []).map((stat, index) => {
              const IconComp = iconMap[stat.icon] || Scale;
              return (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <IconComp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-white/80 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServCus;
