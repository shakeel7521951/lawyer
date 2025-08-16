"use client";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, Calendar, Award, Users, CheckCircle, Scale, ArrowRight } from "lucide-react";

const AppealJudgment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

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

  const achievements = [
    {
      icon: CheckCircle,
      title: "100% Acquittal Rate",
      description: "Successfully defended all 11 defendants in this complex case",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Scale,
      title: "Expert Legal Defense",
      description: "Demonstrated exceptional expertise in bribery and money laundering cases",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "11 Months Dedication",
      description: "Persistent legal representation throughout extensive proceedings",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Users,
      title: "Client-Focused Results",
      description: "Committed to protecting client rights and achieving justice",
      color: "from-purple-500 to-purple-600"
    }
  ];

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

      {/* Achievements Section */}
      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Legal Excellence Proven
          </h2>

          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="text-[#c0b688] text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              VICTORY • JUSTICE • EXCELLENCE
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>

          <p className="text-lg text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            This case demonstrates our unwavering commitment to defending our clients' rights and achieving justice through expert legal representation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-6 hover:border-[#c0b688]/40 transition-all duration-500 group h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {achievement.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Impact Section */}
        <div className={`bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl p-8 md:p-12 mb-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Case Impact & Significance
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c0b688] to-[#9f8660] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Legal Precedent */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#c0b688] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Legal Precedent
              </h4>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                This case establishes important precedent for defending against bribery and money laundering charges,
                demonstrating the importance of thorough legal analysis and evidence-based defense strategies.
              </p>
            </div>

            {/* Client Protection */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#c0b688] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Client Protection
              </h4>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The successful defense of all 11 defendants showcases our firm's commitment to protecting client rights
                and ensuring that justice prevails even in the most complex legal challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#c0b688]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Need Expert Legal Representation?
            </h3>
            <p className="text-lg text-[#494c52]/80 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Contact AL KHALDI Law Firm today for professional legal consultation and representation.
              Let our proven expertise work for your legal matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+97466164000"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white font-semibold rounded-full shadow-xl hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 hover:scale-105 group"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <Phone className="w-5 h-5 mr-3" />
                Call +974 6616 4000
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="mailto:info@alkhaldi.com"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#c0b688] text-[#494c52] font-semibold rounded-full hover:bg-[#c0b688] hover:text-white transition-all duration-300 hover:scale-105 group"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#494c52] text-white font-semibold rounded-full hover:bg-[#9f8660] transition-all duration-300 hover:scale-105 group"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Meeting
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-[#c0b688]/20">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Playfair Display', serif" }}>19+</div>
                  <div className="text-sm text-[#494c52]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Playfair Display', serif" }}>500+</div>
                  <div className="text-sm text-[#494c52]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Cases Won</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c0b688]" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                  <div className="text-sm text-[#494c52]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppealJudgment;
