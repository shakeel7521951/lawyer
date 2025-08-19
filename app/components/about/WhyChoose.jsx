// components/WhyChooseUs.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      title: "Elite Legal Consultants",
      description:
          "Our office includes elite legal consultants and lawyers with expertise and comprehensive knowledge covering all aspects of legal matters.",
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
      ),
    },
    {
      title: "Professional Expertise",
      description:
          "Comprehensive knowledge in commercial, criminal, civil, corporate, investment, and family law with professional association memberships.",
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
      ),
    },
    {
      title: "Litigation Specialists",
      description:
          "Specialized in litigation before all court levels, from First Instance to Supreme Court, including dispute resolution committees.",
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
          </svg>
      ),
    },
    {
      title: "Professional Ethics",
      description:
          "Unwavering commitment to maintaining professional ethics standards and confidentiality in all client dealings.",
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
      ),
    },
  ];

  return (
      <section ref={sectionRef} className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#494c52] via-[#9f8660] to-[#c0b688] mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
              Discover what sets us apart in the legal industry and why clients trust us with their most important matters.
            </p>
          </div>

          {/* Advantages */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {advantages.map((adv, index) => (
                <div key={index} className={`transition-all duration-1000 delay-${(index+1)*200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="bg-white border border-[#c0b688]/20 rounded-2xl p-6 shadow hover:shadow-lg h-full text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#c0b688]/20 to-[#9f8660]/20 rounded-lg flex items-center justify-center">
                        <div className="text-[#9f8660]">{adv.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{adv.title}</h3>
                    <p className="text-gray-600 text-sm">{adv.description}</p>
                  </div>
                </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className={`bg-white rounded-2xl shadow p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Commitment to Excellence</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#c0b688]/20 to-[#c0b688]/30 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Professional Standards</h4>
                <p className="text-gray-600 text-sm">Members of relevant professional associations locally, regionally, and internationally</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#9f8660]/20 to-[#9f8660]/30 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-[#9f8660]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Comprehensive Coverage</h4>
                <p className="text-gray-600 text-sm">Expertise across all levels of courts and specialized dispute resolution committees</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-300/20 to-gray-400/20 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Client Trust</h4>
                <p className="text-gray-600 text-sm">Unwavering commitment to professional ethics and confidentiality standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
