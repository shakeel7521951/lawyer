"use client";
import React, { useState, useEffect, useRef } from "react";
import { Award, Users, Scale, Globe, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";

const CatTrust = () => {
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

  // AL KHALDI Law Firm achievements and stats
  const stats = [
    {
      value: "19+",
      label: "Years of Legal Excellence",
      icon: Award,
      color: "from-[#9f8660] to-[#c0b688]"
    },
    {
      value: "22",
      label: "Legislative Committees",
      icon: Scale,
      color: "from-[#c0b688] to-[#9f8660]"
    },
    {
      value: "1000+",
      label: "Satisfied Clients",
      icon: Users,
      color: "from-[#494c52] to-[#9f8660]"
    },
    {
      value: "All",
      label: "Court Levels Covered",
      icon: Globe,
      color: "from-[#9f8660] to-[#494c52]"
    },
  ];

  const achievements = [
    {
      title: "International Representation",
      description: "Represented the State of Qatar in regional and international forums",
      icon: Globe
    },
    {
      title: "Legislative Leadership",
      description: "Member of 22 legislative committees that amended and created most laws",
      icon: Scale
    },
    {
      title: "Professional Excellence",
      description: "Elite legal consultants with comprehensive knowledge across all legal areas",
      icon: Award
    },
    {
      title: "Ethical Standards",
      description: "Unwavering commitment to professional ethics and client confidentiality",
      icon: CheckCircle
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

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0b688' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Trust Indicators Section */}
          <div
            ref={sectionRef}
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
              <Award className="w-4 h-4 text-[#9f8660]" />
              <span className="text-[#494c52] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                PROVEN EXCELLENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                Clients
              </span>
              <br />Across Qatar
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12" style={{ fontFamily: "'Crimson Text', serif" }}>
              Our track record speaks for itself. With decades of experience and a commitment to excellence, we have established ourselves as a leading legal institution in Qatar and the region.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-3xl lg:text-4xl font-bold text-[#494c52] mb-2 group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c0b688]/20 rounded-2xl transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className={`mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-[#494c52] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Key Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9f8660] to-[#c0b688] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#494c52] mb-2 group-hover:text-[#9f8660] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c0b688]/30 rounded-full blur-lg"></div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ready to Start Your Legal Journey?
                </h3>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Book a free consultation with our experts today and take the first step towards securing your legal rights with Qatar's most trusted law firm.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a
                    href="/contact"
                    className="bg-white text-[#494c52] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                  </a>

                  <a
                    href="https://wa.me/97466164000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Our Team</span>
                  </a>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Phone className="w-4 h-4 text-[#c0b688]" />
                      <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Call Us</span>
                    </div>
                    <p className="text-[#c0b688] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      +974 6616 4000
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Mail className="w-4 h-4 text-[#c0b688]" />
                      <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Email Us</span>
                    </div>
                    <p className="text-[#c0b688] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      info@alkhaldilaw firm.net
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Trust Section */}
          <div className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-[#494c52] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                الخالدي AL KHALDI - Your Trusted Legal Partner
              </h4>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Combining 19+ years of experience with unwavering commitment to professional ethics, we provide comprehensive legal solutions across all areas of law in Qatar and the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatTrust;
