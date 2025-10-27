"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation("about/hero");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
    });
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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full min-h-screen overflow-hidden pt-25">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about/header.jpeg"
            alt="About Al Khaldi Law Firm"
            className="w-full h-full object-cover"
            data-aos="zoom-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/50 via-[#494c52]/40 to-[#9f8660]/45"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            {/* Arabic Brand Name */}
            <h1
              data-aos="fade-down"
              data-aos-delay="400"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
            >
              {t("about.hero.brandNameAr")}
            </h1>

            {/* English Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("about.hero.subtitleEn")}
            </p>

            {/* Introduction Text */}
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("about.hero.intro")}
            </p>

            {/* Contact Information Cards */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            >
              {/* Address */}
              <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                <h3
                  className="text-[#c0b688] font-semibold mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {" "}
                  {t("about.hero.cards.location.title")}
                </h3>
                <p
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("about.hero.cards.location.address")}
                </p>
              </div>

              {/* Website */}
              <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                <h3
                  className="text-[#c0b688] font-semibold mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {" "}
                  {t("about.hero.cards.website.title")}
                </h3>
                <a
                  href="http://www.alkhaldi.com"
                  className="text-white/80 text-sm hover:text-[#c0b688] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("about.hero.cards.website.url")}
                </a>
              </div>

              {/* Phone */}
              <div className="group relative bg-gradient-to-br from-[#494c52]/30 via-[#494c52]/20 to-[#9f8660]/25 backdrop-blur-sm border border-[#c0b688]/20 rounded-2xl p-6 hover:border-[#c0b688]/40 transition-all duration-500">
                <h3
                  className="text-[#c0b688] font-semibold mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {" "}
                  {t("about.hero.cards.contact.title")}
                </h3>
                <div
                  className="text-white/80 text-sm space-y-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p> {t("about.hero.cards.contact.phones.0")}</p>
                  <p>{t("about.hero.cards.contact.phones.1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
