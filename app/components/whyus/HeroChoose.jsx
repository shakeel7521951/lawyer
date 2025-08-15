"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Award, Users, Shield, Globe, CheckCircle, BookOpen, Gavel } from "lucide-react";

const HeroChoose = () => {
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

  // AL KHALDI Law Firm reasons to choose us
  const reasons = [
    {
      icon: Scale,
      title: "Elite Legal Consultants",
      description: "Our office includes elite legal consultants and lawyers with expertise and comprehensive knowledge of all legalities across commercial, criminal, civil, corporate, investment, and family law.",
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      icon: Award,
      title: "19+ Years of Experience",
      description: "Professional career spanning from 2005 with leadership positions including Director of Legal Affairs, Head of Legislation, and participation in 22 legislative committees.",
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      icon: Gavel,
      title: "All Court Levels Expertise",
      description: "Our lawyers specialize in litigation before all levels of courts, from First Instance to the Supreme Court, including Administrative, Labor, and Tenancy Dispute Settlement Committees.",
      color: "from-[#494c52] to-[#9f8660]"
    },
    {
      icon: Users,
      title: "Professional Association Members",
      description: "Our lawyers are members of relevant professional associations locally, regionally, and internationally, ensuring adherence to the highest professional standards.",
      color: "from-[#9f8660] to-[#494c52]"
    },
    {
      icon: Shield,
      title: "Uncompromising Ethics",
      description: "Our commitment is to maintain professional ethics standards and confidentiality of information in dealing with our valued clients, ensuring trust and integrity.",
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Represented the State of Qatar in regional and international forums, bilateral agreements committees, International Labor Organization, and UPR Committee.",
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Team of legal scholars with high academic competence, grounding consultations and solutions in scientific knowledge and professional accumulations.",
      color: "from-[#494c52] to-[#c0b688]"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Coverage",
      description: "Expertise covers all aspects including commercial, criminal, civil, corporate, investment, family law, banking, electronic transactions, and international cases.",
      color: "from-[#c0b688] to-[#494c52]"
    }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-27">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/whyus/why.jpeg"
            alt="Why Choose AL KHALDI Law Firm"
            className="w-full h-full object-cover"
          />
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#494c52]/70 via-[#494c52]/50 to-[#9f8660]/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Focus overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#494c52]/60 via-transparent to-[#494c52]/40"></div>
        </div>

        {/* Noise Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            {/* Arabic/English Branding */}
            <div className="mb-8 sm:mb-12">
              <div className="relative mb-6">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-2 tracking-wide"
                    style={{
                      fontFamily: "'Amiri', 'Times New Roman', serif",
                      textShadow: '0 0 30px rgba(192, 182, 136, 0.3)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                    }}>
                  لماذا تختارنا
                </h1>
                <p className="text-lg sm:text-2xl text-white font-light tracking-[0.2em] mb-4"
                   style={{
                     fontFamily: "'Playfair Display', 'Georgia', serif",
                     letterSpacing: '0.15em',
                     textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                   }}>
                  WHY CHOOSE US
                </p>
              </div>

              {/* Decorative Line */}
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-8">
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                <div className="text-[#c0b688] text-xs sm:text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
                  LEGAL EXCELLENCE
                </div>
                <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Experience{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
                Legal Excellence
              </span>
              <br />& Professional Ethics
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-light text-center max-w-3xl mx-auto mb-8" style={{ fontFamily: "'Crimson Text', serif", lineHeight: '1.6' }}>
              Our office includes elite legal consultants and lawyers with expertise and comprehensive knowledge of all legalities. We maintain professional ethics standards and confidentiality while delivering exceptional legal services.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Award className="w-8 h-8 text-[#c0b688] mx-auto mb-3" />
                <p className="text-white text-sm font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Experience</p>
                <p className="text-[#c0b688] text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>19+ Years</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Gavel className="w-8 h-8 text-[#c0b688] mx-auto mb-3" />
                <p className="text-white text-sm font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Legislative Committees</p>
                <p className="text-[#c0b688] text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>22</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Scale className="w-8 h-8 text-[#c0b688] mx-auto mb-3" />
                <p className="text-white text-sm font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Court Levels</p>
                <p className="text-[#c0b688] text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>All</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/services"
                className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-8 py-3 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
              >
                Consult with Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </section>

      {/* Why Choose Us Grid Section */}
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
              <Scale className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                WHY AL KHALDI
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                Legal Partner
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              We combine academic excellence with practical experience, maintaining the highest standards of professional ethics while delivering comprehensive legal solutions across all areas of law.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#494c52] mb-4 group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {reason.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c0b688]/20 rounded-2xl transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c0b688]/30 rounded-full blur-lg"></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ready to Experience Legal Excellence?
                </h3>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Trust AL KHALDI for your legal matters. Our expert team is ready to provide you with comprehensive legal solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-[#494c52] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="/services"
                    className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300 transform hover:scale-105"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroChoose;
