"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

export default function Navbar({ children }) {
  const { t } = useTranslation("navbar/navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);

  const pathname = usePathname() || "/"; // ✅ safe path

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolled(currentScrollPos > 50);

      if (currentScrollPos < 10) {
        setVisible(true);
      } else if (currentScrollPos < prevScrollPos) {
        setVisible(true);
      } else if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { href: "/", label: t("labels.home") },
    { href: "/about", label: t("labels.about") },
    { href: "/services", label: t("labels.services"), hasDropdown: true },
    { href: "/whyus", label: t("labels.whyus") },
    { href: "/blog", label: t("labels.blog") },
    { href: "/", label: t("labels.language"), hasDropdown: "language" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const serviceCategories = [
    {
      title: t("serviceCategories.0.title"),
      description: t("serviceCategories.0.description"),
      href: "/services/corporate-services",
      slug: "corporate-services",
    },
    {
      title: t("serviceCategories.1.title"),
      description: t("serviceCategories.1.description"),
      href: "/services/government-services",
      slug: "government-services",
    },
    {
      title: t("serviceCategories.2.title"),
      description: t("serviceCategories.2.description"),
      href: "/services/individual-services",
      slug: "individual-services",
    },
  ];

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileLanguageOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto md:px-8 px-2 py-4">
          <div
            className={`transition-all duration-700 rounded-2xl ${
              scrolled
                ? "bg-white/90 backdrop-blur-lg shadow-lg border border-[#c0b688]/10"
                : "bg-white/5 backdrop-blur-sm border border-white/10"
            } px-6 py-3`}
          >
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Al Khaldi Law Firm Logo"
                    className="w-12 h-12 object-contain transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h1
                    className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                      scrolled ? "text-[#494c52]" : "text-white"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    الخالـــــدي
                  </h1>
                  <p
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      scrolled ? "text-[#9f8660]" : "text-[#c0b688]"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    Al Khaldi
                  </p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    {/* Services Dropdown */}
                    {link.hasDropdown === true ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        <button
                          className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                            scrolled
                              ? "text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5"
                              : "text-white hover:text-[#c0b688] hover:bg-white/5"
                          }`}
                          style={{
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                          }}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Services Dropdown Menu */}
                        <div
                          className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#c0b688]/20 overflow-hidden transition-all duration-300 transform ${
                            servicesDropdownOpen
                              ? "opacity-100 translate-y-0 visible"
                              : "opacity-0 -translate-y-2 invisible"
                          }`}
                        >
                          <div className="p-6">
                            <div className="mb-4">
                              <h3 className="text-[#494c52] font-semibold text-base mb-1">
                                {t("ourServices")}
                              </h3>
                              <p className="text-[#9f8660] text-sm opacity-80">
                                {t("comprehensiveLegalSolutions")}
                              </p>
                            </div>
                            <div className="space-y-2">
                              {serviceCategories.map((service, i) => (
                                <Link
                                  key={i}
                                  href={service.href}
                                  className="block p-3 rounded-xl hover:bg-[#c0b688]/10 transition-all duration-300 group"
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div>
                                      <h4 className="text-[#494c52] font-medium text-sm mb-1 group-hover:text-[#9f8660] transition-colors duration-300">
                                        {service.title}
                                      </h4>
                                      <p className="text-[#494c52] text-xs opacity-70 leading-relaxed">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#c0b688]/20">
                              <Link
                                href="/services"
                                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-4 py-2 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300"
                              >
                                <span>{t("allServices")}</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : link.hasDropdown === "language" ? (
                      /* ✅ Language Dropdown */
                      <div
                        className="relative"
                        onMouseEnter={() => setLanguageDropdownOpen(true)}
                        onMouseLeave={() => setLanguageDropdownOpen(false)}
                      >
                        <button
                          className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                            scrolled
                              ? "text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5"
                              : "text-white hover:text-[#c0b688] hover:bg-white/5"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              languageDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Language Dropdown Menu */}
                        <div
                          className={`absolute top-full left-0 mt-2 w-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#c0b688]/20 overflow-hidden transition-all duration-300 transform ${
                            languageDropdownOpen
                              ? "opacity-100 translate-y-0 visible"
                              : "opacity-0 -translate-y-2 invisible"
                          }`}
                        >
                          <div className="py-2">
                            {languages.map((lng) => (
                              <button
                                key={lng.code}
                                onClick={() => {
                                  i18n.changeLanguage(lng.code); // ✅ switch language client-side
                                  setLanguageDropdownOpen(false); // close dropdown
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/10 rounded-lg transition-all duration-300"
                              >
                                {lng.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                          scrolled
                            ? "text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5"
                            : "text-white hover:text-[#c0b688] hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA & Mobile Menu Btn */}
              <div className="flex items-center space-x-3">
                <Link
                  href="/contact"
                  className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-2.5 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t("labels.contact")}</span>
                </Link>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                    scrolled
                      ? "text-[#494c52] hover:bg-[#c0b688]/10"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-100 max-w-full bg-white/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } shadow-2xl border-l border-[#c0b688]/20`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#c0b688]/20">
              <Link
                href="/"
                className="flex items-center space-x-3"
                onClick={handleLinkClick}
              >
                <img
                  src="/logo.png"
                  alt="Al Khaldi Law Firm Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-[#494c52]">
                    الخالـــــدي
                  </h1>
                  <p className="text-sm text-[#9f8660]">Al Khaldi</p>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#494c52] hover:bg-[#c0b688]/10 rounded-xl transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="border-b border-[#c0b688]/10 last:border-0 pb-2 last:pb-0"
                  >
                    {link.hasDropdown === true ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-left transition-all duration-300"
                        >
                          <span className="font-medium">{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Services Dropdown */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileServicesOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="pl-6 pr-4 py-3 space-y-3">
                            <div className="mb-2">
                              <h3 className="text-[#494c52] font-semibold text-sm mb-1">
                                {t("ourServices")}
                              </h3>
                              <p className="text-[#9f8660] text-xs opacity-80">
                                {t("comprehensiveLegalSolutions")}
                              </p>
                            </div>

                            {serviceCategories.map((service, i) => (
                              <Link
                                key={i}
                                href={service.href}
                                onClick={handleLinkClick}
                                className="block p-3 rounded-xl hover:bg-[#c0b688]/10 transition-all duration-300"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] rounded-full mt-2 opacity-60"></div>
                                  <div>
                                    <h4 className="text-[#494c52] font-medium text-sm mb-1">
                                      {service.title}
                                    </h4>
                                    <p className="text-[#494c52] text-xs opacity-70 leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}

                            <div className="pt-3">
                              <Link
                                href="/services"
                                onClick={handleLinkClick}
                                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-4 py-2 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300"
                              >
                                <span>{t("allServices")}</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : link.hasDropdown === "language" ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileLanguageOpen(!mobileLanguageOpen)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-left transition-all duration-300"
                        >
                          <span className="font-medium">{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileLanguageOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Language Dropdown */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileLanguageOpen ? "max-h-40" : "max-h-0"
                          }`}
                        >
                          <div className="pl-6 pr-4 py-2 space-y-1">
                            {languages.map((lng) => (
                              <button
                                key={lng.code}
                                onClick={() => {
                                  i18n.changeLanguage(lng.code);
                                  handleLinkClick();
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/10 rounded-lg transition-all duration-300"
                              >
                                {lng.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl font-medium transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Footer/Contact */}
            <div className="p-6 border-t border-[#c0b688]/20">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-3 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span>{t("labels.contact")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </>
  );
}
