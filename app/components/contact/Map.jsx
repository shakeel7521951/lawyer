"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Navigation, Phone, Clock, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const MapSection = () => {
  const {t}= useTranslation("contact/map")
  const [activeTab, setActiveTab] = useState("map");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // AL KHALDI Law Firm location details
  const firmLocation = {
    address:t("map.address"),
    city: "Al Rayyan, Qatar",
    coordinates: "25.2854, 51.531",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3756!2d51.531!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMzEnNTIuNCJF!5e0!3m2!1sen!2sqa!4v1625000000000!5m2!1sen!2sqa",
  };

  const openDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${firmLocation.coordinates}`;
    window.open(directionsUrl, "_blank");
  };

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/97466164000?text=Hello AL KHALDI Law Firm, I would like to visit your office. Could you please provide directions?`;
    window.open(whatsappUrl, "_blank");
  };

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
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0b688' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-4 py-2 border border-[#c0b688]/20 mb-6">
              <MapPin className="w-4 h-4 text-[#9f8660]" />
              <span
                className="text-[#494c52] font-medium text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
              {t("map.find")}
              </span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-[#494c52] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
             {t("map.title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                {t("map.title2")}
              </span>
            </h2>

            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {t("map.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Map Container */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-100">
                  <button
                    onClick={() => setActiveTab("map")}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === "map"
                        ? "text-[#9f8660] border-b-2 border-[#9f8660] bg-[#c0b688]/5"
                        : "text-gray-500 hover:text-[#9f8660]"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{t("map.mapview")}</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("directions")}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === "directions"
                        ? "text-[#9f8660] border-b-2 border-[#9f8660] bg-[#c0b688]/5"
                        : "text-gray-500 hover:text-[#9f8660]"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Navigation className="w-4 h-4" />
                      <span>{t("map.direct")}</span>
                    </div>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="relative">
                  {activeTab === "map" && (
                    <div className="relative" data-aos="zoom-in">
                      <iframe
                        src={firmLocation.mapEmbedUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                      ></iframe>

                      {/* Map Overlay Info */}
                      <div
                        className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 max-w-xs"
                        data-aos="fade-down"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-[#9f8660] rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#494c52] text-sm mb-1">
                              {t("map.firm")}
                            </h4>
                            <p className="text-gray-600 text-xs leading-relaxed">
                              {firmLocation.city}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "directions" && (
                    <div
                      className="p-8 h-[450px] flex flex-col justify-center"
                      data-aos="fade-up"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#9f8660] to-[#c0b688] rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Navigation className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#494c52] mb-4">
                          {t("map.direct")}
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                         {t("map.click")}
                        </p>

                        <div className="space-y-4">
                          <button
                            onClick={openDirections}
                            className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-8 py-3 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
                          >
                            <Navigation className="w-5 h-5" />
                            <span>Open in Google Maps</span>
                          </button>

                          <div className="text-center">
                            <p className="text-sm text-gray-500 mb-2">
                              Or copy our coordinates:
                            </p>
                            <div className="bg-gray-50 rounded-lg px-4 py-2 inline-block">
                              <code className="text-sm text-[#9f8660] font-mono">
                                {firmLocation.coordinates}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information & Actions */}
            <div className="lg:col-span-1 space-y-6" data-aos="fade-left">
              {/* Office Details */}
              <div className="bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{t("map.info")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#c0b688] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-white/90 leading-relaxed">
                        {firmLocation.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#c0b688] flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/90">
                          Open Sun-Thu: 8AM-6PM
                        </p>
                        <p className="text-sm text-white/70">
                          Friday: 2PM-6PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3" data-aos="zoom-in">
                <h3 className="text-lg font-semibold text-[#494c52] mb-4">
                 {t("map.quickAction")}
                </h3>

                {/* Call Button */}
                <a
                  href="tel:+97466164000"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-white group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{t("map.call")}</h4>
                    <p className="text-white/80 text-xs">
                    {t("map.calDesc")}
                    </p>
                  </div>
                </a>

                {/* Directions Button */}
                <button
                  onClick={openDirections}
                  className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-white group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">{t("map.direction")}</h4>
                    <p className="text-white/80 text-xs">
                   {t("map.getDesc")}
                    </p>
                  </div>
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg text-white group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">{t("map.wtsp")}</h4>
                    <p className="text-white/80 text-xs">{t("map.wtspPsg")}</p>
                  </div>
                </button>
              </div>

              {/* Additional Info */}
              <div
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                data-aos="fade-up"
              >
                <h4 className="font-semibold text-[#494c52] mb-3">
               {t("map.park")}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>  {t("map.line1")}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>{t("map.line2")}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>{t("map.line3")}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>{t("map.line4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
