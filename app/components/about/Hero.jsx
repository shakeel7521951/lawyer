"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative text-white pt-20"
      style={{
        backgroundImage: "url('/about/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Title */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-10 text-center lg:text-left"
        >
          AL KHALDI Law Firm & Legal Consultations
        </h1>

        {/* Contact Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Address */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex gap-4 items-start">
            <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
            <p className="leading-relaxed">
              Street 150, Al Rayyan <br />
              Building No. 143, Area 22 <br />
              Fereej Bin Mahmoud <br />
              3rd Floor
            </p>
          </div>

          {/* Website */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex gap-4 items-center">
            <FaGlobe className="text-blue-400 text-2xl" />
            <a
              href="http://www.alkhaldi.com"
              className="hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.alkhaldi.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex gap-4 items-start">
            <FaPhoneAlt className="text-blue-400 text-2xl mt-1" />
            <div>
              <p>+974 6616 4000</p>
              <p>+974 4009 8889</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
