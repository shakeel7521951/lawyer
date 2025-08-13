"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Set scrolled state for styling
      setScrolled(currentScrollPos > 50);

      // Show navbar when at top or scrolling up, hide when scrolling down
      if (currentScrollPos < 10) {
        // Always show at top of page
        setVisible(true);
      } else if (currentScrollPos < prevScrollPos) {
        // Scrolling up - show navbar
        setVisible(true);
      } else if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        // Scrolling down and past 100px - hide navbar
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/corporate", label: "Corporate" },
    { href: "/IndvidualCustomer", label: "Individual" },
    { href: "/whyus", label: "Why Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* Elegant Top Bar */}
      {/*<div className="bg-[#494c52] text-white py-2 hidden md:block">*/}
      {/*  <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">*/}
      {/*    <div className="flex items-center space-x-8 text-sm">*/}
      {/*      <div className="flex items-center space-x-2 opacity-90">*/}
      {/*        <Phone className="w-3.5 h-3.5" />*/}
      {/*        <span className="font-light">+1 (555) 123-4567</span>*/}
      {/*      </div>*/}
      {/*      <div className="flex items-center space-x-2 opacity-90">*/}
      {/*        <Mail className="w-3.5 h-3.5" />*/}
      {/*        <span className="font-light">contact@legalexpert.com</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="text-[#c0b688] text-sm font-light tracking-wide">*/}
      {/*      Consultation Available*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Main Elegant Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className={`transition-all duration-700 rounded-2xl ${
            scrolled 
              ? "bg-white/90 backdrop-blur-lg shadow-lg border border-[#c0b688]/10" 
              : "bg-white/5 backdrop-blur-sm border border-white/10"
          } px-6 py-3`}>
            <div className="flex justify-between items-center">

              {/* Refined Logo */}
              <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Al Khaldi Law Firm Logo"
                    className="w-12 h-12 object-contain transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                    scrolled ? "text-[#494c52]" : "text-white"
                  }`} style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                    الخالـــــدي
                  </h1>
                  <p className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-[#9f8660]" : "text-[#c0b688]"
                  }`} style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                    Al Khaldi
                  </p>
                </div>
              </Link>

              {/* Elegant Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                      scrolled 
                        ? "text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5" 
                        : "text-white hover:text-[#c0b688] hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                  >
                    {link.label}
                    <div className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#c0b688] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                  </Link>
                ))}
              </div>

              {/* Refined CTA & Mobile Menu */}
              <div className="flex items-center space-x-3">
                <Link href="/contact" className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-2.5 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </Link>

                {/* Elegant Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                    scrolled 
                      ? "text-[#494c52] hover:bg-[#c0b688]/10" 
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Refined Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-[#c0b688]/20 mx-8 mt-2 rounded-2xl shadow-xl">
            <div className="p-6 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-3 rounded-xl text-sm font-medium mt-4 shadow-lg" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
