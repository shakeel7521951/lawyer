"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
        { href: "/services", label: "Services", hasDropdown: true },
        { href: "/whyus", label: "Why Us" },
        { href: "/blog", label: "Blog" },
    ];

    const serviceCategories = [
        {
            title: "Corporates",
            description: "Legal services for businesses and corporations",
            href: "/services/corporate-services",
            slug: "corporate-services"
        },
        {
            title: "Government/Semi-government",
            description: "Legal support for government entities",
            href: "/services/government-services",
            slug: "government-services"
        },
        {
            title: "Individuals",
            description: "Personal legal services for individuals",
            href: "/services/individual-services",
            slug: "individual-services"
        }
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
                                    <div key={index} className="relative group">
                                        {link.hasDropdown ? (
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
                                                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                >
                                                    <span>{link.label}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>

                                                {/* Dropdown Menu */}
                                                <div className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#c0b688]/20 overflow-hidden transition-all duration-300 transform ${
                                                    servicesDropdownOpen 
                                                        ? 'opacity-100 translate-y-0 visible' 
                                                        : 'opacity-0 -translate-y-2 invisible'
                                                }`}>
                                                    <div className="p-6">
                                                        <div className="mb-4">
                                                            <h3 className="text-[#494c52] font-semibold text-base mb-1" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                                                                Our Services
                                                            </h3>
                                                            <p className="text-[#9f8660] text-sm opacity-80" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                                                                Comprehensive legal solutions
                                                            </p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            {serviceCategories.map((service, serviceIndex) => (
                                                                <Link
                                                                    key={serviceIndex}
                                                                    href={service.href}
                                                                    className="block p-3 rounded-xl hover:bg-[#c0b688]/10 transition-all duration-300 group"
                                                                >
                                                                    <div className="flex items-start space-x-3">
                                                                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                                        <div>
                                                                            <h4 className="text-[#494c52] font-medium text-sm mb-1 group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                                                                                {service.title}
                                                                            </h4>
                                                                            <p className="text-[#494c52] text-xs opacity-70 leading-relaxed" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
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
                                                                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                            >
                                                                <span>View All Services</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#c0b688] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                                            </div>
                                        ) : (
                                            <Link
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
                                        )}
                                    </div>
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
                                <div key={index}>
                                    {link.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide"
                                                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                            >
                                                <span>{link.label}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <div className={`overflow-hidden transition-all duration-300 ${
                                                servicesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                                <div className="ml-4 mt-2 space-y-1">
                                                    {serviceCategories.map((service, serviceIndex) => (
                                                        <Link
                                                            key={serviceIndex}
                                                            href={service.href}
                                                            className="block px-4 py-2 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-lg text-sm transition-all duration-300"
                                                            onClick={() => setIsOpen(false)}
                                                            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    ))}
                                                    <Link
                                                        href="/services"
                                                        className="block px-4 py-2 text-[#9f8660] hover:text-[#494c52] hover:bg-[#c0b688]/5 rounded-lg text-sm font-medium transition-all duration-300"
                                                        onClick={() => setIsOpen(false)}
                                                        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                    >
                                                        View All Services
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide"
                                            onClick={() => setIsOpen(false)}
                                            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
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
