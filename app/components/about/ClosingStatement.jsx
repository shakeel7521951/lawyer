// components/ClosingStatement.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function ClosingStatement() {
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
        {/* Main Content */}
        <div className="text-center mb-12" data-aos="fade-up">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#494c52] via-[#9f8660] to-[#c0b688] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Our Commitment to You
          </h2>

          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="text-[#9f8660] text-sm font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              EXCELLENCE • INTEGRITY • PARTNERSHIP
            </div>
            <div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
          </div>
        </div>

        {/* Statement Content */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white border border-[#c0b688]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <p className="text-xl md:text-2xl leading-relaxed text-[#494c52] text-center mb-12 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              We are committed to providing exceptional legal services with the highest standards of professionalism, integrity, and efficiency. Our dedicated team works tirelessly to protect the interests of our clients, delivering practical solutions and effective representation in all legal matters.
            </p>

            <div className="text-center mb-12">
              <p className="text-lg text-[#494c52]/80 font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                We value the trust placed in us and strive to maintain it by consistently exceeding expectations.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c0b688]/20 to-[#c0b688]/30 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:from-[#c0b688]/30 group-hover:to-[#c0b688]/40 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Integrity</h3>
                <p className="text-[#494c52]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Unwavering ethical standards</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9f8660]/20 to-[#9f8660]/30 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:from-[#9f8660]/30 group-hover:to-[#9f8660]/40 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Excellence</h3>
                <p className="text-[#494c52]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Superior legal expertise</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#494c52]/20 to-[#494c52]/30 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:from-[#494c52]/30 group-hover:to-[#494c52]/40 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#494c52]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Dedication</h3>
                <p className="text-[#494c52]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Client-focused approach</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c0b688]/20 to-[#9f8660]/30 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:from-[#c0b688]/30 group-hover:to-[#9f8660]/40 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#494c52] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Partnership</h3>
                <p className="text-[#494c52]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Long-term relationships</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-[#494c52] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Partner with AL KHALDI Law Firm?
          </h3>
          <p className="text-lg text-[#494c52]/80 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Contact us today to discuss your legal needs and discover how our expertise can serve you
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+97466164000"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white font-semibold rounded-full shadow-xl hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="mailto:info@alkhaldi.com"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#c0b688] text-[#494c52] font-semibold rounded-full hover:bg-[#c0b688] hover:text-white transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
