"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { Scale, Award, Users, Shield, Globe, CheckCircle, BookOpen, Gavel } from "lucide-react";

const HeroChoose = () => {
  const {t} = useTranslation ('whyus/herochoose')
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // AL KHALDI Law Firm reasons to choose us
  const reasons = [
    {
      icon: Scale,
      title: t("whyChoose.reasons.0.title"),
      description: t("whyChoose.reasons.0.description"),
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      icon: Award,
      title: 19+ t("whyChoose.reasons.1.title"),
      description: t("whyChoose.reasons.1.description"),
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      icon: Gavel,
      title: t("whyChoose.reasons.2.title"),
      description: t("whyChoose.reasons.2.description"),
      color: "from-[#494c52] to-[#9f8660]"
    },
    {
      icon: Users,
      title: t("whyChoose.reasons.3.title"),
      description: t("whyChoose.reasons.3.description"),
      color: "from-[#9f8660] to-[#494c52]"
    },
    {
      icon: Shield,
      title: t("whyChoose.reasons.4.title"),
      description: t("whyChoose.reasons.4.description"),
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      icon: Globe,
      title: t("whyChoose.reasons.5.title"),
      description: t("whyChoose.reasons.5.description"),
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      icon: BookOpen,
      title: t("whyChoose.reasons.6.title"),
      description: t("whyChoose.reasons.6.description"),
      color: "from-[#494c52] to-[#c0b688]"
    },
    {
      icon: CheckCircle,
      title: t("whyChoose.reasons.7.title"),
      description: t("whyChoose.reasons.7.description"),
      color: "from-[#c0b688] to-[#494c52]"
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

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen overflow-hidden pt-27"
        data-aos="fade-up"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/whyus/why.jpeg"
            alt="Why Choose AL KHALDI Law Firm"
            className="w-full h-full object-cover"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/70 via-[#494c52]/50 to-[#9f8660]/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Branding */}
            <div className="mb-8 sm:mb-12">
              <div className="relative mb-6">
                <h1
                  data-aos="fade-down"
                  className="text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                  style={{
                    fontFamily: "'Amiri', 'Times New Roman', serif",
                    textShadow: '0 0 30px rgba(192, 182, 136, 0.3)',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}
                >
                  لماذا تختارنا
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-lg sm:text-2xl text-white font-light tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '0.15em',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {t("hero.title_en")}
                </p>
              </div>

              {/* Decorative Line */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex items-center justify-center space-x-2 sm:space-x-3 mb-8"
              >
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                <div className="text-[#c0b688] text-xs sm:text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
                  {t("hero.tagline")}
                 
                </div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
              </div>
            </div>

            {/* Heading */}
            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t("hero.heading")} {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
              {t("hero.headingtwo")}
              </span>
              <br />{t("hero.headingthree")}
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-lg sm:text-xl leading-relaxed text-white/90 font-light text-center max-w-3xl mx-auto mb-8"
              style={{ fontFamily: "'Crimson Text', serif", lineHeight: '1.6' }}
            >
              {t("hero.description")}
            </p>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            >
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Award
                  className="w-8 h-8 text-[#c0b688] mx-auto mb-3"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
                <p
                  className="text-white text-sm font-medium mb-1"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {t("hero.stats.experience.label")}
                </p>
                <p
                  className="text-[#c0b688] text-2xl font-bold"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  19+ {t("hero.stats.experience.value")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Gavel
                  className="w-8 h-8 text-[#c0b688] mx-auto mb-3"
                  data-aos="flip-left"
                  data-aos-delay="100"
                />
                <p
                  className="text-white text-sm font-medium mb-1"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {t("hero.stats.committees.label")}
                </p>
                <p
                  className="text-[#c0b688] text-2xl font-bold"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  22
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Scale
                  className="w-8 h-8 text-[#c0b688] mx-auto mb-3"
                  data-aos="zoom-out"
                  data-aos-delay="100"
                />
                <p
                  className="text-white text-sm font-medium mb-1"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  {t("hero.stats.courts.label")}
                </p>
                <p
                  className="text-[#c0b688] text-2xl font-bold"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {t("hero.stats.courts.value")}
                </p>
              </div>
            </div>


            {/* CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-3"
            >
              <a
                href="/services"
                className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-8 py-3 rounded-xl text-sm sm:text-base font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
              >
                {t("hero.cta.services")}
              </a>
              <a
                href="/contact"
                className="border-2 border-white/30 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                {t("hero.cta.consult")}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-sm tracking-wider">{t("whyChoose.badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#494c52] leading-tight">
              {t("whyChoose.heading")}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                {t("whyChoose.headingtwo")}
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("whyChoose.description")}
            </p>
          </div>

          {/* Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  data-aos="fade-down"
                  data-aos-delay={index * 100 + 100}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold text-[#494c52] mb-4 group-hover:text-[#9f8660] transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 200}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 300}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c0b688]/30 rounded-full blur-lg"></div>

              <div className="relative z-10 px-4 sm:px-6 lg:px-0 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t("whyChoose.cta.heading")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"> 
                {t("whyChoose.cta.description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-[#494c52] px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
                  >
                    {t("whyChoose.cta.buttons.consult")}
                  </a>
                  <a
                    href="/services"
                    className="border border-white/30 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
                  >
                    {t("whyChoose.cta.buttons.services")}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroChoose;
