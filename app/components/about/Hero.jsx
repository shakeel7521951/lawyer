"use client";
// import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative text-white"
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
          <h1 className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-4 drop-shadow-lg">
            Al Khaldi Law Firm
          </h1>
          <p className="text-lg mb-6 max-w-2xl leading-relaxed text-gray-200">
            Empowering businesses in{" "}
            <span className="text-[#D4AF37] font-semibold">Qatar</span> with end-to-end legal, corporate, and digital solutions. 
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
            className="inline-block bg-[#D4AF37] text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-white hover:text-[#0D1B2A] transition-all duration-300"
          >
            Start in Qatar Now
          </Link>
        </div>

        {/* Right: Nerou Digital Solutions */}
        <div className="bg-[#1B263B]/90 p-6 rounded-2xl shadow-xl max-w-md w-full border border-[#D4AF37]/40 animate-slideInRight">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
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
