"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Award,
  Users,
  Scale,
  Globe,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import ConsultationForm from "../common/ConsultationForm";

const CatTrust = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const stats = [
    {
      value: "19+",
      label: t("stats.0.label"),
      icon: Award,
      color: "from-[#9f8660] to-[#c0b688]",
    },
    {
      value: "22",
      label: t("stats.1.label"),
      icon: Scale,
      color: "from-[#c0b688] to-[#9f8660]",
    },
    {
      value: "1000+",
      label: t("stats.2.label"),
      icon: Users,
      color: "from-[#494c52] to-[#9f8660]",
    },
    {
      value: t("stats.3.value"),
      label: t("stats.3.label"),
      icon: Globe,
      color: "from-[#9f8660] to-[#494c52]",
    },
  ];

  const achievements = [
    {
      title: t("achievements_section.achievements.0.title"),
      description:
        t("achievements_section.achievements.0.description"),
      icon: Globe,
    },
    {
      title: t("achievements_section.achievements.1.title"),
      description:
        t("achievements_section.achievements.1.description"),
      icon: Scale,
    },
    {
      title: t("achievements_section.achievements.2.title"),
      description:
        t("achievements_section.achievements.2.description"),
      icon: Award,
    },
    {
      title: t("achievements_section.achievements.3.title"),
      description:
        t("achievements_section.achievements.3.description"),
      icon: CheckCircle,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Trust Indicators */}
          <div className="text-center mb-16" data-aos="fade-down">
            <div
              className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6"
              data-aos="zoom-in"
            >
              <Award className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-sm tracking-wider">
                {t("trust_indicator.badge")}
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#494c52]"
              data-aos="fade-up"
            >
              {t("trust_indicator.heading")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                {t("trust_indicator.headingtwo")}
              </span>
              <br />
              {t("trust_indicator.headingthree")}
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-right"
            >
              {t("trust_indicator.subtext")}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden"
                data-aos="flip-left"
                data-aos-delay={index * 150}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  data-aos="zoom-in"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div
                  className="text-3xl lg:text-4xl font-bold text-center text-[#494c52] mb-2 group-hover:text-[#9f8660]"
                  data-aos="fade-up"
                >
                  {stat.value}
                </div>

                {/* Label */}
                <p
                  className="text-gray-600 font-medium text-center"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h3
              className="text-2xl lg:text-3xl font-bold text-center text-[#494c52] mb-12"
              data-aos="fade-up"
            >
              {t("achievements_section.heading")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 group transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-[#9f8660] to-[#c0b688] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      data-aos="flip-right"
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-center sm:text-left">
                      {/* Title */}
                      <h4
                        className="text-lg font-semibold text-[#494c52] mb-2 group-hover:text-[#9f8660]"
                        data-aos="fade-up"
                      >
                        {achievement.title}
                      </h4>
                      {/* Description */}
                      <p
                        className="text-gray-600 leading-relaxed text-sm sm:text-base"
                        data-aos="fade-left"
                        data-aos-delay="300"
                      >
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-12 text-white relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative z-10 text-center">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                data-aos="fade-down"
              >
                {t("cta_section.heading")}
              </h3>
              <p
                className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("cta_section.heading")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                {/* Button 1 */}
                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-white text-[#494c52] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  data-aos="zoom-in-right"
                >
                  <Phone className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </a>

                {/* Button 2 */}
                <a
                  href="https://wa.me/97466164000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  data-aos="zoom-in-left"
                  data-aos-delay="200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t("cta_section.buttons.text")}</span>
                </a>
              </div>
            </div>
          </div>
          {/* Final Trust Section */}
          <div
            className="mt-8 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h4
                className="text-xl font-semibold text-[#494c52] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                الخالدي {t("final_trust_section.heading")}
              </h4>
              <p
                className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("final_trust_section.subtext")} 19+ {t("final_trust_section.subtexttwo")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      <ConsultationForm
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />
    </>
  );
};

export default CatTrust;
