"use client";
import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const {t}= useTranslation("contact/hero")
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const contactData = [
    {
      icon: <Phone className="w-8 h-8 text-[#c0b688] mx-auto" />,
      title: t("contact.call"),
      info: "+974 6616 4000",
      animation: "fade-right",
      iconAnimation: "zoom-in",
      titleAnimation: "fade-up",
      infoAnimation: "flip-left",
    },
    {
      icon: <Mail className="w-8 h-8 text-[#c0b688] mx-auto" />,
      title: t("contact.email"),
      info: "info@alkhaldi.net",
      animation: "fade-up",
      iconAnimation: "zoom-in",
      titleAnimation: "fade-up",
      infoAnimation: "flip-left",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#c0b688] mx-auto" />,
      title: t("contact.visit"),
      info: "Al Rayyan, Qatar",
      animation: "fade-left",
      iconAnimation: "zoom-in",
      titleAnimation: "fade-up",
      infoAnimation: "flip-left",
    },
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

      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact/ch.jpeg"
            alt="Al Khaldi Law Firm Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/70 via-[#494c52]/50 to-[#9f8660]/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
        </div>

        {/* Noise Effect */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                top: ["5rem", "10rem", "8rem", "33%"][i % 4],
                left: ["2.5rem", "auto", "8rem", "auto"][i % 4],
                right: ["auto", "5rem", "auto", "25%"][i % 4],
                width: `${[8, 4, 12, 6][i % 4]}px`,
                height: `${[8, 4, 12, 6][i % 4]}px`,
                backgroundColor: ["#c0b688", "#c0b688", "#9f8660", "#ffffff"][i % 4],
                opacity: [0.4, 0.3, 0.35, 0.25][i % 4],
                animationDelay: `${[0, 1000, 500, 700][i % 4]}ms`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Arabic/English Branding */}
            <div className="mb-8 sm:mb-12">
              <div className="relative mb-6">
                <h1
                  className="text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                  style={{
                    fontFamily: "'Amiri', 'Times New Roman', serif",
                    textShadow: "0 0 30px rgba(192, 182, 136, 0.3)",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                  }}
                  data-aos="fade-up"
                >
                  اتصل بنا
                </h1>
                <p
                  className="text-lg sm:text-2xl text-white font-light tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: "0.15em",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {t("contact.maintitle")}
                </p>
              </div>

              {/* Decorative Line */}
              <div
                className="flex items-center justify-center space-x-2 sm:space-x-3 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                <div
                  className="text-[#c0b688] text-xs sm:text-sm font-light tracking-[0.3em]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {t("contact.getInTouch")}
                </div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-aos="fade-down-left"
            >
              {t("contact.title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                {t("contact.title2")}
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-lg sm:text-xl leading-relaxed text-white/90 font-light text-center max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "'Crimson Text', serif", lineHeight: "1.6" }}
              data-aos="flip-down"
              data-aos-delay="200"
            >
             {t("contact.desc")}
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#c0b688]/30"
                  data-aos={item.animation}
                  data-aos-delay={index * 100}
                >
                  <div
                    data-aos={item.iconAnimation}
                    data-aos-delay={index * 100 + 200}
                    className="transition-transform duration-500 group-hover:rotate-6"
                  >
                    {item.icon}
                  </div>
                  <p
                    className="text-white text-sm font-medium mb-1 mt-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    data-aos={item.titleAnimation}
                    data-aos-delay={index * 100 + 300}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[#c0b688] text-lg font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    data-aos={item.infoAnimation}
                    data-aos-delay={index * 100 + 400}
                  >
                    {item.info}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
          <div
  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
  data-aos="zoom-in-up"
>
  <a
    href="#contact-form"
    className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-6 py-3 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c0b688]/40 flex items-center justify-center space-x-2 w-full sm:w-auto text-center"
    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
    <span>{t("contact.sendMsg")}</span>
  </a>

  <a
    href="https://wa.me/97466164000"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 w-full sm:w-auto text-center"
    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
    data-aos="zoom-in-up"
    data-aos-delay="200"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513" />
    </svg>
    <span>{t("contact.wtsp")}</span>
  </a>
</div>


            {/* Business Hours */}
            <div
              className="mt-12 mb-7 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-md mx-auto hover:shadow-lg hover:shadow-[#c0b688]/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#c0b688] mr-2" />
                <h3
                  className="text-white font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("contact.busHour")}
                </h3>
              </div>
              <div
                className="space-y-2 text-sm text-white/80"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="flex justify-between" data-aos="fade-right" data-aos-delay="100">
                  <span>{t("contact.sunthur")}</span>
                  <span className="text-[#c0b688]">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between" data-aos="fade-right" data-aos-delay="200">
                  <span>{t("contact.friday")}</span>
                  <span className="text-[#c0b688]">2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between" data-aos="fade-right" data-aos-delay="300">
                  <span>{t("contact.saturday")}</span>
                  <span className="text-white/60">{t("contact.closed")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </section>
    </>
  );
};

export default Hero;
