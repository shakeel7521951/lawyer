"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Scale, Phone, Mail, MapPin, Globe, Award, Building2, Users, Shield, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation("footer/footer");

  const quickLinks = t("quickLinks", { returnObjects: true });
  const services = t("services", { returnObjects: true });
  const contactInfo = t("contactInfo", { returnObjects: true });
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <footer className="relative bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Al Khaldi Law Firm Logo"
                    className="w-12 h-12 object-contain transform group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t("company.name")}
                  </h1>
                  <p className="text-sm text-[#c0b688] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t("company.tagline")}
                  </p>
                </div>
              </Link>

              {/* Description */}
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t("company.description")}
              </p>

              {/* Awards Badge */}
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-[#c0b688]/30">
                <Award className="w-5 h-5 text-[#c0b688]" />
                <span className="text-white text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t("company.award")}
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {t("sections.quickLinks")}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(quickLinks) &&
                  quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="group flex items-center space-x-2 text-white/80 hover:text-[#c0b688] transition-colors duration-300"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        <span style={{ fontFamily: "'Inter', sans-serif" }}>
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>

            </div>

            {/* Legal Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {t("sections.legalServices")}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(services) &&
                  services.map((service, index) => {
                    const icons = [Building2, Shield, Users, Scale];
                    const IconComponent = icons[index % icons.length]; // to avoid errors if more items

                    return (
                      <li key={index}>
                        <Link
                          href={service.href}
                          className="group flex items-center space-x-3 text-white/80 hover:text-[#c0b688] transition-colors duration-300"
                        >
                          <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          <span style={{ fontFamily: "'Inter', sans-serif" }}>
                            {service.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>

            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {t("sections.contactUs")}
              </h3>

              <div className="space-y-4">
                {Array.isArray(quickLinks) &&
                  contactInfo.map((contact, index) => {
                    const icons = [Phone, Phone, Mail, Globe, MapPin];
                    const IconComponent = icons[index];

                    return (
                      <Link
                        key={index}
                        href={contact.href}
                        className="group flex items-center space-x-3 text-white/80 hover:text-[#c0b688] transition-colors duration-300"
                      >
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 group-hover:border-[#c0b688]/50 transition-all duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{contact.label}</span>
                      </Link>
                    );
                  })}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-3 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t("social.follow")}
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:border-[#c0b688] hover:bg-[#c0b688] text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {t("newsletter.title")}
                  </h3>
                  <p className="text-white/80" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {t("newsletter.description")}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder={t("newsletter.placeholder")}
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-[#c0b688] focus:outline-none transition-colors duration-300"
                  />
                  <button className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t("newsletter.button")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

              {/* Copyright */}
              <div className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>{t("copyright")}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 text-center">
                <div>
                  <div className="text-lg font-bold text-[#c0b688]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>500+</div>
                  <div className="text-xs text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{t("stats.casesWon")}</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#c0b688]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1000+</div>
                  <div className="text-xs text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{t("stats.clients")}</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#c0b688]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>6</div>
                  <div className="text-xs text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{t("stats.countries")}</div>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-white/70 text-sm">
                <Link href="/privacy" className="hover:text-[#c0b688] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t("legalLinks.privacy")}
                </Link>
                <Link href="/terms" className="hover:text-[#c0b688] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t("legalLinks.terms")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c0b688] via-[#9f8660] to-[#c0b688]"></div>
      </footer>
    </>
  );
};

export default Footer;