"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LuAlignStartVertical } from "react-icons/lu";
import AOS from 'aos';
import "aos/dist/aos.css"

const TimelineProfile = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      offset:100,
    })
  })
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Crimson+Text:ital,wght@400;0,600;1,400&family=Cinzel:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative mt-1 w-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c2e32]/90 via-[#3a3d42]/80 to-[#9f8660]/70"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2e32]/70 via-transparent to-[#3a3d42]/50"></div>
        </div>

        {/* Decorative Line + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mt-10 w-full"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div
              className="text-[#9f8660] text-xs sm:text-sm tracking-[0.3em] font-medium"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              LEGAL TIMELINE
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto px-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            The Judicial Journey of{" "}
            <span className="text-[#9f8660]">
              The Bribery & Money Laundering Case
            </span>
          </motion.h2>

          {/* Timeline Content */}
          <div className="space-y-12 mb-10 w-full mx-auto mt-12 relative z-10 px-4">
            {/* First Court Ruling */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg flex w-full rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 max-w-3xl mx-auto"
            >
              <div className="flex items-start">
             
                <div className=" p-6 rounded-2xl ">
  <h3
    className="text-2xl font-semibold mb-5 text-white text-center"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    First Instance Court Ruling
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div data-aos="fade-down" className="p-4 border border-gray-600 rounded-lg bg-[#222] hover:shadow-xl transition">
      <p className="font-light text-white leading-relaxed">
        <span className="text-[#9f8660] font-medium">First defendant</span> 
        sentenced to{" "}
        <span className="font-medium text-[#9f8660]">
          6 years in prison and a fine
        </span>.
      </p>
    </div>

    <div data-aos="fade-down" className="p-4 border border-gray-600 rounded-lg bg-[#222] hover:shadow-xl transition">
      <p className="font-light text-white leading-relaxed">
        Other defendants sentenced up to{" "}
        <span className="font-medium text-[#9f8660]">
          3 years in prison and fines
        </span>.
      </p>
    </div>

    <div data-aos="fade-up" className="p-4 border border-gray-600 rounded-lg bg-[#222] hover:shadow-xl transition">
      <p className="font-light text-white leading-relaxed">
        Several were deported after completing their sentences.
      </p>
    </div>

    <div data-aos="fade-up" className="p-4 border border-gray-600 rounded-lg bg-[#222] hover:shadow-xl transition">
      <p className="font-light text-white leading-relaxed">
        <span className="font-medium text-[#9f8660]">4 defendants</span> were
        acquitted at that stage.
      </p>
    </div>
  </div>
</div>

              </div>
            </motion.section>

            {/* Defense Lawyer - FULL WIDTH */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg flex flex-col md:flex-row items-center justify-between w-full rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Text Content */}
              <div className="text-left md:w-2/3 w-full md:pr-8">
                <h3
                  className="text-2xl font-semibold text-white mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Defense Counsel:{" "}
                  <span className="text-[#9f8660]">Saleh Ali Al-Khaldi</span>
                </h3>
                <p className="text-white mt-2 leading-relaxed">
                  After the initial ruling, lawyer Saleh Ali Al-Khaldi filed an
                  appeal before the Court of Appeal, challenging the verdict on
                  substantive legal grounds.
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-white">
                  <li className="font-light leading-relaxed">
                    Sought complete nullification of the First Instance Court's
                    ruling
                  </li>
                  <li className="font-light leading-relaxed">
                    Argued for acquittal based on{" "}
                    <span className="font-medium text-[#9f8660]">
                      fundamental errors in legal application
                    </span>
                  </li>
                  <li className="font-light leading-relaxed">
                    Presented new evidentiary considerations
                  </li>
                </ul>
              </div>

              {/* Lawyer Image */}
              <div data-aos="fade-left" className="md:w-1/3 w-full flex justify-center mt-6 md:mt-0">
                <img
                  src="./about/ab4.jpeg"
                  alt="Defense Lawyer Saleh Ali Al-Khaldi"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl object-cover"
                />
              </div>
            </motion.section>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
     

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </section>
    </>
  );
};

export default TimelineProfile;
