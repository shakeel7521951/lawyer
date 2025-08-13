"use client";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="relative bg-[#0D1B2A] text-white sm:py-16 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Mission Text */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <span className="text-[#D4AF37] font-semibold">Al Khaldi Law Firm</span>, 
            our mission is to empower businesses and individuals in{" "}
            <strong>Qatar</strong> with comprehensive, reliable, and future-ready 
            legal and corporate solutions.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            We are committed to simplifying complex procedures, ensuring compliance,
            and enabling our clients to operate with confidence. Through our exclusive 
            partnership with <strong>Nerou Digital Solutions</strong>, we bridge the gap 
            between traditional legal services and modern digital transformation — giving 
            our clients a strategic advantage in a fast-changing world.
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>✔ Delivering excellence in every legal and corporate service</li>
            <li>✔ Promoting transparency, trust, and ethical practice</li>
            <li>✔ Leveraging technology to provide innovative solutions</li>
            <li>✔ Building long-term relationships with our clients</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="sm:flex-1 w-full h-140">
          <Image
            src="/about/ab.jpeg"
            alt="Al Khaldi Law Firm team working"
            width={600}
            height={400}
            className="w-full h-full object-cover bg-center rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
