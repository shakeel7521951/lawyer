"use client";
import React, { useState } from "react";
import { MapPin, Navigation, Phone, Clock, Globe } from "lucide-react";

const MapSection = () => {
  const [activeTab, setActiveTab] = useState("map");

  // AL KHALDI Law Firm location details
  const firmLocation = {
    address:
      "Street 150, Al Rayyan, Building No. 143, Area 22, Fereej Bin Mahmoud, 3rd Floor",
    city: "Al Rayyan, Qatar",
    coordinates: "25.2854, 51.531",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3756!2d51.531!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMzEnNTIuNCJF!5e0!3m2!1sen!2sqa!4v1625000000000!5m2!1sen!2sqa",
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak directly with our team",
      action: "+974 6616 4000",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Office",
      subtitle: "Meet us in person",
      action: "Get Directions",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "WhatsApp",
      subtitle: "Quick chat support",
      action: "Start Chat",
      color: "from-green-600 to-green-700",
    },
  ];

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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-4 py-2 border border-[#c0b688]/20 mb-6">
              <MapPin className="w-4 h-4 text-[#9f8660]" />
              <span
                className="text-[#494c52] font-medium text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                FIND US
              </span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-[#494c52] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Visit Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                Office
              </span>
            </h2>

            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Located in the heart of Al Rayyan, our office is easily accessible
              and equipped with modern facilities to serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Map Container */}
            <div className="lg:col-span-2">
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
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Map View</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("directions")}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === "directions"
                        ? "text-[#9f8660] border-b-2 border-[#9f8660] bg-[#c0b688]/5"
                        : "text-gray-500 hover:text-[#9f8660]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Navigation className="w-4 h-4" />
                      <span>Directions</span>
                    </div>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="relative">
                  {activeTab === "map" && (
                    <div className="relative">
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
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 max-w-xs">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-[#9f8660] rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4
                              className="font-semibold text-[#494c52] text-sm mb-1"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              AL KHALDI Law Firm
                            </h4>
                            <p
                              className="text-gray-600 text-xs leading-relaxed"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {firmLocation.city}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "directions" && (
                    <div className="p-8 h-[450px] flex flex-col justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#9f8660] to-[#c0b688] rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Navigation className="w-8 h-8 text-white" />
                        </div>

                        <h3
                          className="text-2xl font-bold text-[#494c52] mb-4"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          Get Directions
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Click the button below to get turn-by-turn directions to
                          our office using Google Maps.
                        </p>

                        <div className="space-y-4">
                          <button
                            onClick={openDirections}
                            className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-8 py-3 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <Navigation className="w-5 h-5" />
                            <span>Open in Google Maps</span>
                          </button>

                          <div className="text-center">
                            <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
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
            <div className="lg:col-span-1 space-y-6">
              {/* Office Details */}
              <div className="bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-2xl p-6 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#c0b688]/30 rounded-full blur-lg"></div>

                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Office Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#c0b688] mt-0.5 flex-shrink-0" />
                      <div>
                        <p
                          className="text-sm text-white/90 leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {firmLocation.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#c0b688] flex-shrink-0" />
                      <div>
                        <p
                          className="text-sm text-white/90"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Open Sun-Thu: 8AM-6PM
                        </p>
                        <p
                          className="text-sm text-white/70"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Friday: 2PM-6PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h3
                  className="text-lg font-semibold text-[#494c52] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Quick Actions
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
                    <h4
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Call Us
                    </h4>
                    <p
                      className="text-white/80 text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Speak directly with our team
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
                    <h4
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Get Directions
                    </h4>
                    <p
                      className="text-white/80 text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Navigate to our office
                    </p>
                  </div>
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg text-white group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      WhatsApp
                    </h4>
                    <p
                      className="text-white/80 text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Quick chat support
                    </p>
                  </div>
                </button>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4
                  className="font-semibold text-[#494c52] mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Parking & Accessibility
                </h4>
                <ul
                  className="space-y-2 text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>Free parking available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>Wheelchair accessible</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>3rd floor - elevator available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#9f8660] rounded-full"></div>
                    <span>Conference rooms available</span>
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
