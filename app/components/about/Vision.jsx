"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Correct way to import CSS
const Vision = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }, []);
  return (
    <section className="relative   py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="flex-1">
          <Image
            src="/about/ab3.jpeg"
            alt="Our Vision - Al Khaldi Law Firm"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Vision Text */}
        <div className="flex-1"
        data-aos="fade-left"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-lg  leading-relaxed mb-6">
            At <span className=" text-[#9f8660] font-semibold">Al Khaldi Law Firm</span>, 
            our vision is to be Qatar’s most trusted and innovative legal and corporate 
            advisory partner — setting the benchmark for excellence in professional services.
          </p>
          <p className=" leading-relaxed mb-6">
            We aim to lead the transformation of the legal and corporate sector by combining 
            unmatched expertise, ethical integrity, and cutting-edge digital solutions, ensuring 
            our clients are always prepared for tomorrow’s challenges and opportunities.
          </p>
          <ul className="space-y-3 text-sm ">
            <li>Become the go-to legal & business advisory firm in the GCC</li>
            <li>Foster a culture of trust, transparency, and client success</li>
            <li>Integrate technology to redefine client experience</li>
            <li>Shape a sustainable, forward-thinking business environment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
