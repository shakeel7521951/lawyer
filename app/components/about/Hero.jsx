"use client";
// import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative text-white pt-20"
      style={{
        backgroundImage: "url('/about/hero.png')", // ✅ Correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Left: Text Content */}
        <div className="flex-1 animate-fadeIn">
              {/* English Name - Elegant Subtitle */}
              <div className="relative">
                <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
                   style={{
                     fontFamily: "'Playfair Display', 'Georgia', serif",
                     letterSpacing: '0.15em',
                     textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                   }}>
                  Al Khaldi
                </p>

                {/* Decorative underline */}
                <div className="flex items-center mb-10 space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                  <div className="text-[#c0b688] text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em]" style={{ fontFamily: "'Cinzel', serif" }}>
                    LAW FIRM
                  </div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
                </div>
              </div>
          <p className="text-lg mb-6 max-w-2xl leading-relaxed text-gray-200">
            Empowering businesses in{" "}
            <span className=" font-semibold">Qatar</span> with end-to-end legal, corporate, and digital solutions. 
            From <strong>100% foreign ownership registration</strong> to advanced <strong>AI digital tools</strong> via Nerou Digital Solutions, 
            we help you start, grow, and scale seamlessly.
          </p>

          {/* Services Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mb-8">
            <li>✔ 100% Ownership</li>
            <li>✔ Municipality Licensing</li>
            <li>✔ Bank Account Setup</li>
            <li>✔ PRO / Ministry Works</li>
            <li>✔ Sponsor Services</li>
            <li>✔ Legal Translation</li>
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-3 hover:scale-105 rounded-lg font-semibold text-lg shadow-lg hover:bg-white  transition-all duration-300"
          >
            Start in Qatar Now
          </Link>
        </div>

        {/* Right: Nerou Digital Solutions */}
        <div className=" p-6 rounded-2xl shadow-xl max-w-md w-full border border-[#D4AF37]/40 animate-slideInRight">
          <h2 className="text-2xl font-bold mb-4">
            Nerou Digital Solutions
          </h2>
          <p className="text-sm mb-4 text-gray-300">
            Exclusive tech partner for Al Khaldi Law Firm — providing cutting-edge digital transformation services:
          </p>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>💻 Website & App Development</li>
            <li>🤖 Voice AI Systems</li>
            <li>📱 WhatsApp Automation</li>
            <li>📊 CRM Dashboards</li>
            <li>📈 Marketing & Performance Reports</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
