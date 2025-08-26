"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaBalanceScale,
  FaHandshake,
  FaUserShield,
  FaClock,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaGavel,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ConsultationForm from "../common/ConsultationForm";

const Convince = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation("home/convince");

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

  const features = [
    {
      icon: FaBalanceScale,
<<<<<<< HEAD
      title: t("features.1.title"),
      description: t("features.1.description"),
=======
      title: "Comprehensive Legal Coverage",
      description:
        "Our expertise covers all aspects of legal matters including commercial, criminal, civil, corporate, investment, and family law across all court levels.",
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
      color: "from-[#9f8660] to-[#c0b688]",
    },
    {
      icon: FaHandshake,
<<<<<<< HEAD
      title: t("features.2.title"),
      description: t("features.2.description"),
=======
      title: "Professional Ethics & Standards",
      description:
        "We maintain the highest professional ethics standards and confidentiality of information when dealing with our clients, ensuring complete trust.",
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
      color: "from-[#c0b688] to-[#9f8660]",
    },
    {
      icon: FaUserShield,
<<<<<<< HEAD
      title: t("features.3.title"),
      description: t("features.3.description"),
=======
      title: "Client Information Protection",
      description:
        "Our commitment to maintaining professional standards and confidentiality guarantees the security and protection of all client information.",
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
      color: "from-[#494c52] to-[#9f8660]",
    },
    {
      icon: FaClock,
<<<<<<< HEAD
      title: t("features.4.title"),
      description: t("features.4.description"),
=======
      title: "Professional Associations Network",
      description:
        "Our lawyers are members of relevant professional associations locally, regionally, and internationally, ensuring global standards.",
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
      color: "from-[#9f8660] to-[#494c52]",
    },
  ];

  const stats = [
<<<<<<< HEAD
    { icon: FaAward, number: t("stats.1.number"), label: t("stats.1.label") },
    { icon: FaUsers, number: t("stats.2.number"), label: t("stats.2.label") },
    { icon: FaGavel, number: t("stats.3.number"), label: t("stats.3.label") },
    {
      icon: FaCheckCircle,
      number: t("stats.4.number"),
      label: t("stats.4.label"),
    },
=======
    { icon: FaAward, number: "25+", label: "Years Experience" },
    { icon: FaUsers, number: "500+", label: "Satisfied Clients" },
    { icon: FaGavel, number: "98%", label: "Success Rate" },
    { icon: FaCheckCircle, number: "6", label: "GCC Countries" },
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-gray-100 py-12 md:py-20 overflow-hidden"
    >
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c0b688]/5 via-transparent to-[#494c52]/5"></div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c0b688 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[#c0b688]/20 mb-6 shadow-sm">
            <FaAward className="w-4 h-4 text-[#9f8660]" />
            <span className="text-[#494c52] font-medium text-sm">
              {t("badge")}
            </span>
          </div>

          {/* Simple, Clean Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52] leading-tight">
<<<<<<< HEAD
            {t("title.part1")}
            <span className="text-[#c0b688]">{t("title.highlight")}</span>
=======
            Why Choose{" "}
            <span className="text-[#c0b688]">Al Khaldi Law Firm</span>
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
          </h1>

          {/* Simple Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
            {t("description")}
=======
            Selecting the right legal partner is crucial. We combine legal
            expertise, client-first approach, and proven results to deliver
            excellence.
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
          </p>
        </div>

        {/* Hero Image & Content Section */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content Side - Left */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-4 leading-tight">
<<<<<<< HEAD
                  {t("commitment.title.part1")}
                  <span className="text-[#c0b688]">
                    {t("commitment.title.highlight")}
                  </span>
=======
                  Our Commitment to{" "}
                  <span className="text-[#c0b688]">Excellence</span>
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
                </h2>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
<<<<<<< HEAD
                    {t("commitment.paragraph1")}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t("commitment.paragraph2")}
=======
                    We understand that legal issues can be stressful and
                    complex. Our team works tirelessly to ensure your rights are
                    protected and your case is handled with utmost
                    professionalism.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our dedication goes beyond legal representation — we aim to
                    be a trusted advisor, strong advocate, and reliable partner
                    in every step of your legal journey.
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 text-center group"
                  >
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#9f8660] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-xl md:text-2xl font-bold text-[#494c52] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Image Side - Right */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="w-full h-64 md:h-80 lg:h-96">
                  <img
                    src="/home/whychoseus.jpg"
                    alt={t("title.highlight")}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/20 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[#494c52] font-semibold text-sm">
                      {t("imageBadge")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`mb-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-[#494c52] mb-3 group-hover:text-[#9f8660] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaGavel className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {t("closing.title")}
              </h3>

<<<<<<< HEAD
              <p
                className="text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8"
                dangerouslySetInnerHTML={{ __html: t("closing.description") }}
              />

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="bg-white text-[#494c52] px-6 md:px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t("closing.buttons.consultation")}
=======
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8">
                Choosing{" "}
                <strong className="text-[#c0b688]">Al Khaldi Law Firm</strong>{" "}
                means choosing trust, transparency, and results. Whether you are
                an individual, a corporate client, or a government entity, our
                mission is to deliver unmatched legal solutions tailored to your
                needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-white text-[#494c52] px-6 md:px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Consultation
>>>>>>> 772407d18fe9a8477e77917c3560cf729035fc8f
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300">
                  {t("closing.buttons.learnMore")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />
    </section>
  );
};

export default Convince;
