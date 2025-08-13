"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NavLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Why Us", path: "/whyus" },
    { id: 5, name: "Contact Us", path: "/contact" },
    { id: 6, name: "Blog", path: "/blog" },
  ];

  const SocialLink = [
    { id: 1, icon: <FaFacebookF />, path: "/" },
    { id: 2, icon: <FaTwitter />, path: "/" },
    { id: 3, icon: <FaLinkedinIn />, path: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#0D1B2A] text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0D1B2A] font-bold text-lg transition-transform duration-300 group-hover:rotate-12">
            AK
          </div>
          <span className="text-2xl font-bold tracking-tight group-hover:text-[#D4AF37] transition-colors font-serif duration-300">
            Al-Khaldi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 gap-6 justify-center">
          {NavLinks.map((item) => (
            <Link
              key={item.id}
              href={item.path}
             className="font-sans font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-3">
          {SocialLink.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-[#D4AF37] rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 group"
            >
              <span className="text-[#0D1B2A] group-hover:text-[#D4AF37] transition-all duration-300">
                {item.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-3 rounded-md hover:text-[#D4AF37] transition-all duration-200"
          >
            {open ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu-container overflow-y-auto bg-[#0D1B2A] transition-all duration-300 ease-in-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        {NavLinks.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 text-lg font-semibold text-white hover:text-[#D4AF37] hover:bg-[#1B263B] rounded-lg transition-all duration-200"
          >
            {item.name}
          </Link>
        ))}
        <div className="flex gap-4 px-6 py-4">
          {SocialLink.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-[#D4AF37] rounded-full cursor-pointer transition-all duration-300 hover:bg-white group"
            >
              <span className="text-[#0D1B2A] group-hover:text-[#D4AF37] transition-all duration-300">
                {item.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
