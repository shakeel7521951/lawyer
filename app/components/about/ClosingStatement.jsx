// components/ClosingStatement.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function ClosingStatement() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setIsVisible(true),
        { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
      <section
          ref={sectionRef}
          className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
              className="absolute inset-0 bg-repeat opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CTA Heading */}
          <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#494c52] via-[#9f8660] to-[#c0b688] mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Ready to Partner with AL KHALDI Law Firm?
          </h2>
          <p
              className={`text-lg text-[#494c52]/80 mb-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Contact us today to discuss your legal needs and discover how our expertise can serve you.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <a
                href="tel:+97466164000"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white font-semibold rounded-full shadow-xl hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 hover:scale-105"
            >
              Call Us Now
            </a>
            <a
                href="mailto:info@alkhaldi.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#c0b688] text-[#494c52] font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#c0b688] hover:to-[#9f8660] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
  );
}
