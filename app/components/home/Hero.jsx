"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import ConsultationForm from "../common/ConsultationForm";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Scale } from "lucide-react";

export default function HeroSection() {
  
  const { t } = useTranslation("home/hero");
  const [showConsultationModal, setShowConsultationModal] =
    React.useState(false);

      useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
          offset: 120,
          easing: "ease-in-out",
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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="relative w-full min-h-screen overflow-hidden pt-25">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/about/legalsprt.jpeg"
            alt="Legal Victory - Al Khaldi Law Firm"
            className="w-full h-full object-cover scale-105 transform"
            data-aos="zoom-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/60 via-[#494c52]/50 to-[#9f8660]/55"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="relative flex items-center min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Left Side - Text */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  <span data-aos="zoom-in" data-aos-delay="100" className="block text-[#c0b688]">
                    الخالدي للمحاماة والاستشارات القانونية
                  </span>
                  <span data-aos="fade-up" data-aos-delay="200" className="block text-white text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide mt-2">
                    {t("hero.title")}
                  </span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start space-x-3 mt-2">
                  <div data-aos="fade-up" data-aos-delay="200" className="w-10 lg:w-14 h-0.5 bg-[#c0b688]"></div>
                  <span data-aos="fade-up" data-aos-delay="200" className="text-[#c0b688] text-xs sm:text-sm tracking-[0.2em] font-medium uppercase">
                    {t("hero.badge")}
                  </span>
                </div>

                <h2 data-aos="fade-down" data-aos-delay="400" className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed mt-4">
                  {t("hero.subtitle")}
                </h2>
                <p data-aos="fade-down" data-aos-delay="400" className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {t("hero.description")}
                </p>
                <ConsultationForm
                  isOpen={showConsultationModal}
                  onClose={() => setShowConsultationModal(false)}
                />
                {/* CTA Buttons */}
                <div data-aos="zoom-in-up" data-aos-delay="600" className="flex flex-row gap-3 lg:gap-4 pt-4 justify-evenly lg:justify-start">
                  <button
                    className="px-5 lg:px-7 py-3 lg:py-4 bg-[#c0b688] text-white font-medium rounded-lg hover:bg-[#9f8660] transition-transform duration-300 transform hover:scale-105 text-sm lg:text-base"
                    onClick={() => setShowConsultationModal(true)}
                  >
                    {t("hero.buttonConsultation")}
                  </button>
                  <Link href="/services" passHref>
                    <button className="w-full sm:w-auto px-5 lg:px-7 py-3 lg:py-4 border-2 border-[#c0b688] text-[#c0b688] font-medium rounded-lg hover:bg-[#c0b688] hover:text-white transition-transform duration-300 hover:scale-105 text-sm lg:text-base">
                      {t("hero.buttonServices")}
                    </button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-center lg:justify-start space-x-5 lg:space-x-8 pt-6">
                  <div className="text-center">
                    <div className="text-lg lg:text-xl font-bold text-[#c0b688]">
                      15+
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      {t("hero.experience")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg lg:text-xl font-bold text-[#c0b688]">
                      500+
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      {t("hero.casesWon")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg lg:text-xl font-bold text-[#c0b688]">
                      24/7
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      {t("hero.support")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div data-aos="zoom-in-down" data-aos-delay="600" className="relative flex justify-center mt-6 lg:mt-0">
                <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/logo.png"
                    alt="Legal Consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/40 to-transparent"></div>
                </div>

                {/* Floating Card */}
                <div data-aos="zoom-in-down" data-aos-delay="300" className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-sm p-3 sm:p-5 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c0b688] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">
                        {t("hero.trustedClients")}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm">
                        {t("hero.professionalServices")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accents */}
        <div className="absolute bottom-0 left-0 w-full h-1 lg:h-2 bg-gradient-to-r from-[#c0b688] via-[#9f8660] to-[#c0b688] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#c0b688] to-transparent animate-pulse"></div>
      </section>
    </>
  );
}
