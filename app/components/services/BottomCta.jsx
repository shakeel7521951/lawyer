"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Award, ChevronRight } from 'lucide-react';

const BottomCta = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-6 mb-10 ">
      <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden max-w-6xl mx-auto">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Icon */}
          <div
            data-aos="fade-up"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <Award className="w-6 h-6 text-white" />
          </div>

          {/* Heading */}
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl sm:text-2xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready for Expert Legal Consultation?
          </h3>

          {/* Text */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Contact Al-Khaldi Law Firm today for comprehensive legal solutions tailored to your specific needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white text-[#494c52] px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="border border-white/30 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#494c52] transition-all duration-300 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCta;
