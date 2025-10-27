"use client";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Phone,
  Mail,
  Calendar,
  Award,
  Users,
  CheckCircle,
  Scale,
  ArrowRight,
  Clock,
  Briefcase,
  Smile,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ConsultationForm from "../common/ConsultationForm";

const AppealJudgment = () => {
  const [showConsultationModal, setShowConsultationModal] =
    React.useState(false);
  const { t } = useTranslation("blog/appealJdm");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

  // Achievements & Stats Data
  const achievements = [
    {
      icon: CheckCircle,
      title: t("appeal.head1"),
      description: t("appeal.headPsg"),
      color: "from-green-500 to-green-600",
      aos: "zoom-in-up",
    },
    {
      icon: Scale,
      title: t("appeal.head2"),
      description: t("appeal.head2Psg"),
      color: "from-blue-500 to-blue-600",
      aos: "flip-left",
    },
    {
      icon: Award,
      title: t("appeal.head3"),
      description: t("appeal.head3Psg"),
      color: "from-amber-500 to-amber-600",
      aos: "flip-right",
    },
    {
      icon: Users,
      title: t("appeal.head4"),
      description: t("appeal.head4Psg"),
      color: "from-purple-500 to-purple-600",
      aos: "zoom-in",
    },
  ];

  const stats = [
    {
      icon: Clock,
      number: "19+",
      label: t("appeal.experience"),
      aos: "fade-up",
    },
    {
      icon: Briefcase,
      number: "500+",
      label: t("appeal.won"),
      aos: "fade-down",
    },
    {
      icon: Smile,
      number: "100%",
      label: t("appeal.satisfy"),
      aos: "zoom-in",
    },
  ];

  return (
    <section className="relative w-full text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2c2e32]/90 via-[#3a3d42]/80 to-[#9f8660]/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2e32]/70 via-transparent to-[#3a3d42]/50"></div>
      </div>

      {/* Main Page Heading */}
      <h1
        data-aos="fade-down"
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 tracking-wide text-center hover:scale-105 transition-transform duration-300"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {t("appeal.title")}
      </h1>

      {/* Content Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl overflow-hidden">
        {/* Prosecution Appeal */}
        <section
          data-aos="fade-right"
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 text-left shadow-lg overflow-hidden"
        >
          <h3
            className="text-2xl font-semibold text-white mb-3 group-hover:text-[#c0b688] transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("appeal.t1")}
          </h3>
          <p className="text-white leading-relaxed">{t("appeal.t1psg")}</p>
        </section>

        {/* Final Decision */}
        <section
          data-aos="zoom-in"
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 text-left shadow-lg overflow-hidden"
        >
          <h3
            className="text-2xl font-semibold text-[#9f8660] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("appeal.t2")}
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>{t("appeal.t2Line1")}</li>
            <li>{t("appeal.t2Line2")}</li>
            <li>{t("appeal.t2Line3")}</li>
          </ul>
        </section>

        {/* Court Reasoning */}
        <section
          data-aos="fade-left"
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 text-left shadow-lg overflow-hidden"
        >
          <h3
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("appeal.t3")}
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li> {t("appeal.t3Line1")}</li>
            <li>{t("appeal.t3Line2")}</li>
          </ul>
        </section>
      </div>

      {/* Achievements Section */}
      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 overflow-hidden"
      >
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-4 hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {t("appeal.title2")}
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 overflow-hidden">
          {achievements.map((achievement, index) => (
            <div key={index} data-aos={achievement.aos}>
              <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-6 hover:scale-105 hover:border-[#c0b688]/40 transition-all duration-500 group h-full overflow-hidden">
                {/* Icon */}
                <div data-aos="zoom-in" className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  data-aos="fade-down"
                  className="text-lg font-bold text-white mb-3 text-center group-hover:text-[#c0b688] transition-colors duration-300"
                >
                  {achievement.title}
                </h3>

                {/* Description */}
                <p
                  data-aos="fade-up"
                  className="text-white/80 leading-relaxed text-sm text-center"
                >
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConsultationForm
                  isOpen={showConsultationModal}
                  onClose={() => setShowConsultationModal(false)}
                />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 overflow-hidden">
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos={stat.aos}
            className="bg-white/10 backdrop-blur-md border border-[#c0b688]/20 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-500 overflow-hidden"
          >
            <stat.icon className="w-10 h-10 text-[#c0b688] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white">{stat.number}</h3>
            <p className="text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        data-aos="fade-up"
        className="text-center transition-all duration-1000"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#c0b688]/20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-6 hover:scale-105 transition-transform duration-300">
            {t("appeal.title3")}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+97466164000"
              data-aos="fade-right"
              className="inline-flex items-center p-4 sm:px-8 py-4 bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white font-semibold rounded-full shadow-xl hover:from-[#9f8660] hover:to-[#494c52] hover:scale-110 transition-all duration-500 group"
            >
              <Phone className="w-5 h-5 mr-3" />
              {t("appeal.Call")} +974 6616 4000
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="mailto:info@alkhaldi.com"
              data-aos="zoom-in"
              className="inline-flex items-center p-4 sm:px-8 py-4 bg-white border-2 border-[#c0b688] text-[#494c52] font-semibold rounded-full hover:bg-[#c0b688] hover:text-white hover:scale-110 transition-all duration-500 group"
            >
              <Mail className="w-5 h-5 mr-3" />
              {t("appeal.emailtext")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              onClick={() => setShowConsultationModal(true)}
              data-aos="fade-left"
              className="inline-flex items-center p-4 sm:px-8 py-4 bg-[#494c52] text-white font-semibold rounded-full hover:bg-[#9f8660] hover:scale-110 transition-all duration-500 group"
            >
              <Calendar className="w-5 h-5 mr-3" />
              {t("appeal.schedule")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-[#c0b688]/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div
                  className="text-2xl font-bold text-[#c0b688]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  19+
                </div>
                <div
                  className="text-sm text-[#494c52]/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("appeal.experience")}
                </div>
              </div>
              <div>
                <div
                  className="text-2xl font-bold text-[#c0b688]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  500+
                </div>
                <div
                  className="text-sm text-[#494c52]/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("appeal.won")}
                </div>
              </div>{" "}
              <div>
                <div
                  className="text-2xl font-bold text-[#c0b688]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100%
                </div>
                <div
                  className="text-sm text-[#494c52]/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("appeal.satisfy")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppealJudgment;
