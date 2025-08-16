"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, User, MapPin, Scale, Award, Clock, CheckCircle, Users, Gavel } from "lucide-react";
import Image from "next/image";

const TimelineProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Crimson+Text:ital,wght@400;0,600;1,400&family=Cinzel:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Article */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0b688]/20">

              {/* Article Header */}
              <div className="bg-gradient-to-r from-[#494c52] via-[#494c52] to-[#9f8660] px-8 py-12 text-white relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-[#c0b688]/30 backdrop-blur-sm p-4 rounded-2xl">
                      <Scale className="w-8 h-8 text-[#c0b688]" />
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                    Legal Victory: Acquittal in Major Bribery Case
                  </h1>
                  <p className="text-xl text-center text-blue-200 max-w-4xl mx-auto leading-relaxed"
                     style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Court of Appeal acquits 11 defendants including public employee in complex bribery and money laundering case
                  </p>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">

                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-center gap-8 mb-12 pb-8 border-b border-[#c0b688]/20">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-[#9f8660]" />
                    <span className="text-[#494c52] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      February 16, 2025
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-[#9f8660]" />
                    <span className="text-[#494c52] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Lawyer Saleh Ali Al-Khaldi
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#9f8660]" />
                    <span className="text-[#494c52] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Al Sharq News
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#9f8660]" />
                    <span className="text-[#494c52] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      11 months proceedings
                    </span>
                  </div>
                </div>

                {/* Lawyer Profile Section */}
                <div className="mb-12">
                  <div className="bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/10 rounded-2xl p-8 border border-[#c0b688]/20">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">

                      {/* Lawyer Photo Placeholder */}
                      <div className="lg:col-span-1">
                        <div className="relative">
                          <div className="w-full aspect-square bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-2xl flex items-center justify-center shadow-2xl">
                            <div className="text-center text-white">
                              {/*<User className="w-16 h-16 mx-auto mb-4 opacity-80" />*/}
                              {/*<p className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>*/}
                              {/*  Lawyer Photo*/}
                              {/*</p>*/}
                              {/*<p className="text-sm opacity-80" style={{ fontFamily: "'Inter', sans-serif" }}>*/}
                              {/*  To be added*/}
                              {/*</p>*/}
                              <Image src="/lawyer.jpg" alt="Lawyer Photo" width={300} height={300}  className="rounded-xl"  />                            </div>
                          </div>
                          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#c0b688] rounded-full flex items-center justify-center shadow-xl">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Lawyer Info */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                          Lawyer Saleh Ali Al-Khaldi
                        </h3>
                        <p className="text-lg text-[#9f8660] font-semibold mb-4"
                           style={{ fontFamily: "'Cinzel', serif" }}>
                          Founder & CEO - AL KHALDI Law Firm
                        </p>
                        <p className="text-[#494c52]/80 leading-relaxed mb-6"
                           style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          Successfully defended the innocence of 11 defendants in a complex bribery and money laundering case,
                          demonstrating exceptional legal expertise and commitment to justice through 11 months of rigorous legal proceedings.
                        </p>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-white rounded-xl border border-[#c0b688]/20">
                            <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Playfair Display', serif" }}>11</div>
                            <div className="text-sm text-[#494c52]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Defendants</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-xl border border-[#c0b688]/20">
                            <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                            <div className="text-sm text-[#494c52]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Acquittal</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-xl border border-[#c0b688]/20">
                            <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Playfair Display', serif" }}>11</div>
                            <div className="text-sm text-[#494c52]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Months</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">

                  {/* Case Overview */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-6 flex items-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      <Gavel className="w-8 h-8 text-[#9f8660] mr-3" />
                      Case Overview
                    </h2>
                    <p className="text-lg text-[#494c52]/80 leading-relaxed mb-6"
                       style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      The Court of Appeal acquitted 11 defendants, including a public employee, of charges related to bribery and money laundering,
                      as well as intentionally acquiring and possessing funds derived from those crimes.
                    </p>
                  </div>

                  {/* Case Background */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#494c52] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      Case Background
                    </h3>
                    <div className="bg-gradient-to-br from-[#c0b688]/5 to-[#9f8660]/5 p-6 rounded-2xl border border-[#c0b688]/20 mb-6">
                      <p className="text-[#494c52]/80 leading-relaxed"
                         style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        The case revolved around allegations that the defendants sought to obtain official licenses in exchange for bribes.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#c0b688] mt-1 flex-shrink-0" />
                        <p className="text-[#494c52]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          The Court of First Instance had previously sentenced the first defendant to <strong>6 years in prison and a fine</strong>,
                          while others were also convicted with varying penalties.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#c0b688] mt-1 flex-shrink-0" />
                        <p className="text-[#494c52]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          Some defendants were ordered to be deported after serving their sentences, while <strong>4 defendants were acquitted</strong> of all charges.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Defense Efforts */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#494c52] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      Defense Strategy
                    </h3>
                    <div className="bg-gradient-to-br from-[#9f8660]/5 to-[#494c52]/5 p-6 rounded-2xl border border-[#9f8660]/20 mb-6">
                      <p className="text-[#494c52]/80 leading-relaxed"
                         style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        <strong>Lawyer Saleh Ali Al-Khaldi</strong> appealed the initial ruling before the Court of Appeal,
                        arguing that the first judgment should be overturned and the defendants acquitted, citing errors in the application of law and lack of sufficient evidence.
                      </p>
                    </div>
                  </div>

                  {/* Court Ruling */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#494c52] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      Court of Appeal Ruling
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-[#c0b688] mt-1 flex-shrink-0" />
                        <p className="text-[#494c52]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          The Appeal Court <strong>accepted the defense arguments</strong>, acquitting the defendants and <strong>upholding their innocence</strong> as established in the ruling of the Court of First Instance.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-[#c0b688] mt-1 flex-shrink-0" />
                        <p className="text-[#494c52]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          The proceedings lasted <strong>11 months</strong> before the final judgment was issued.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reasoning */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#494c52] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      Court's Reasoning
                    </h3>
                    <div className="bg-gradient-to-br from-[#c0b688]/10 to-[#9f8660]/10 p-8 rounded-2xl border border-[#c0b688]/20">
                      <blockquote className="text-lg text-[#494c52] leading-relaxed italic border-l-4 border-[#c0b688] pl-6"
                                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        "The case was surrounded by doubts, assumptions, and lack of clear evidence.
                        The documents and testimonies failed to establish conclusive proof of the defendants' involvement in bribery or money laundering."
                      </blockquote>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </section>
    </>
  );
};

export default TimelineProfile;
