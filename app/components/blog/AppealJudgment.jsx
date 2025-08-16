"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
const AppealJudgment = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      offset:100,
    })
  })
  return (
    <section className="relative w-full text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2c2e32]/90 via-[#3a3d42]/80 to-[#9f8660]/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2e32]/70 via-transparent to-[#3a3d42]/50"></div>
      </div>

      {/* Main Page Heading */}
      <h1
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 tracking-wide text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Appeal Judgment{" "}
        <span className="text-[#9f8660] font-semibold">& Final Ruling</span>
      </h1>

      {/* Content Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {/* Prosecution Appeal */}
        <section data-aos="fade-right" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-left shadow-lg">
          <h3
            className="text-2xl font-semibold text-white mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Public Prosecution Appeal
          </h3>
          <p className="text-white leading-relaxed">
            The Public Prosecution also appealed against the First Instance
            Court ruling that acquitted some of the defendants.
          </p>
        </section>

        {/* Final Decision */}
        <section data-aos="fade-up" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-left shadow-lg">
          <h3
            className="text-2xl font-semibold text-[#9f8660] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Final Decision by the Court of Appeal
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>The Appeal Court acquitted all defendants.</li>
            <li>The ruling confirmed the innocence of the accused.</li>
            <li>
              The case continued for{" "}
              <span className="font-medium text-[#9f8660]">
                11 months of trial sessions
              </span>
              .
            </li>
          </ul>
        </section>

        {/* Court Reasoning */}
        <section data-aos="fade-left" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-left shadow-lg">
          <h3
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reasoning Behind the Judgment
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>The case was surrounded by many doubts and suspicions.</li>
            <li>
              The documents and evidence lacked any{" "}
              <span className="font-medium text-[#9f8660]">
                conclusive proof
              </span>{" "}
              of the defendants’ involvement in the crime.
            </li>
          </ul>
        </section>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
    </section>
  );
};

export default AppealJudgment;
