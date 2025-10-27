"use client";
import React, { useEffect } from "react";
import {
  Calendar,
  User,
  MapPin,
  Scale,
  Award,
  Clock,
  Gavel,
} from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const TimelineProfile = () => {
  const {t} = useTranslation("blog/timelineprofile")
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Article */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0b688]/20"
          >
            {/* Article Header */}
            <div
              data-aos="fade-up"
              className="bg-gradient-to-r from-[#494c52] via-[#494c52] to-[#9f8660] px-3 sm:px-8 py-12 text-white relative"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative text-center">
                <div
                  data-aos="zoom-in"
                  className="flex items-center justify-center mb-6"
                >
                  <div className="bg-[#c0b688]/30 backdrop-blur-sm p-4 rounded-2xl">
                    <Scale className="w-8 h-8 text-[#c0b688]" />
                  </div>
                </div>
                <h1 className="text-2xl md:text-4xl  font-bold mb-6 leading-tight">
                  {t("timeline.title")}
                </h1>
                <p className="text-sx sm:text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
                 {t("timeline.passage")}
                </p>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-3 md:p-12">
              {/* Article Meta */}
              <div
                data-aos="fade-up"
                className="flex flex-wrap items-center justify-center gap-8 mb-12 pb-8 mt-2 sm:mt-0 border-b border-[#c0b688]/20"
              >
                {[
                  { Icon: Calendar, text:t("timeline.february") },
                  { Icon: User, text: t("timeline.ceoName") },
                  { Icon: MapPin, text: t("timeline.news")},
                  { Icon: Clock, text: t("timeline.monthproceding")},
                ].map(({ Icon, text }, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="flex items-center space-x-3"
                  >
                    <Icon className="w-5 h-5 text-[#9f8660]" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Lawyer Profile Section */}
              <div
                data-aos="fade-up"
                className="mb-12 bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/10 rounded-2xl p-4 sm:p-8 border border-[#c0b688]/20"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Lawyer Photo */}
                  <div data-aos="zoom-in">
                    <div className="relative">
                      <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="/lawyer.jpg"
                          alt="Lawyer Photo"
                          width={300}
                          height={300}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#c0b688] rounded-full flex items-center justify-center shadow-xl">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Lawyer Info */}
                  <div data-aos="fade-left" className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#494c52]">
                      {t("timeline.ceoName")}
                      </h3>
                    <p className="text-lg text-[#9f8660] font-semibold">
                      {t("timeline.founderAndCeo")}
                    </p>
                    <p className="text-[#494c52]/80 leading-relaxed">
                      {t("timeline.passage2")}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {[
    { value: "11", label: t("timeline.defend") },
    { value: "100%", label:t("timeline.acquittal") },
    { value: "11", label: t("timeline.month") },
  ].map((stat, i) => (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 100}
      className="text-center p-4 bg-white rounded-xl border border-[#c0b688]/20"
    >
      <div className="text-xl sm:text-2xl font-bold text-[#c0b688]">
        {stat.value}
      </div>
      <div className="text-sm text-[#494c52]/70">
        {stat.label}
      </div>
    </div>
  ))}
</div>

                  </div>
                </div>
              </div>

              {/* Article Details */}
              <div className="prose prose-lg max-w-none p-3 sm:p-0">
                {/* Case Overview */}
                <div data-aos="fade-up" className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-6 flex items-center">
                    <Gavel className="w-8 h-8 text-[#9f8660] mr-3" />
                    {t("timeline.overview")}
                  </h2>
                  <p className="text-lg text-[#494c52]/80 leading-relaxed mb-6">
                   {t("timeline.overviewPsg")}
                  </p>
                </div>

                {/* Defense Strategy */}
                <div data-aos="fade-up" className="mb-8">
                  <h3 className="text-xl font-bold text-[#494c52] mb-4">
                      {t("timeline.strategy")}
                  </h3>
                  <div className="bg-gradient-to-br from-[#9f8660]/5 to-[#494c52]/5 p-6 rounded-2xl border border-[#9f8660]/20 mb-6">
                    <p className="text-[#494c52]/80 leading-relaxed">
                      {t("timeline.strategyPsg")}
                    </p>
                  </div>
                </div>

                {/* Court of Appeal Ruling */}
                <div data-aos="fade-up" className="mb-8">
                  <h3 className="text-xl font-bold text-[#494c52] mb-4">
                   {t("timeline.court")}
                  </h3>
                  <div className="space-y-4">
                    <div
                      data-aos="fade-up"
                      className="flex items-start space-x-3"
                    >
                      <Award className="w-5 h-5 text-[#c0b688] mt-1 flex-shrink-0" />
                      <p className="text-[#494c52]/80 leading-relaxed">
                       {t("timeline.coutLine1")}
                      </p>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="flex items-start space-x-3"
                    >
                      <Clock className="w-5 h-5 text-[#c0b688] mt-1 flex-shrink-0" />
                      <p className="text-[#494c52]/80 leading-relaxed">
                        {t("timeline.coutLine2")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ✅ Court's Reasoning with AOS Animation */}
                <div data-aos="fade-up" className="mb-8">
                  <h3 className="text-xl font-bold text-[#494c52] mb-4 flex items-center">
                    <Gavel className="w-6 h-6 text-[#9f8660] mr-2" />
                    {t("timeline.reasoning")}
                  </h3>
                  <blockquote
                    data-aos="fade-up"
                    className="text-lg text-[#494c52] leading-relaxed italic border-l-4 border-[#c0b688] pl-6 bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/10 p-6 rounded-2xl border border-[#c0b688]/20"
                  >
                    "{t("timeline.resonPsg")}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </section>
    </>
  );
};

export default TimelineProfile;
