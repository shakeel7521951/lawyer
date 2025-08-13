"use client";
import { FaLinkedin, FaTwitter, FaUserTie } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Correct way to import CSS
const founder = {
  name: "",
  role: "Founder & CEO",
  bio: "",
  img: "/about/ab2.jpeg", // ✅ Place your image in /public/about/
  linkedin: "#", // add real link
  twitter: "#", // add real link
};

const Founder = () => {

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }, []);
  return (
    <section className="py-16 px-6 lg:px-20 bg-[#1C1C1C] text-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left - Image */}
        <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg group">
          <img
            src={founder.img}
            alt={founder.name}
            className="w-full h-full rounded-full object-cover  transition-transform duration-500"
          />
          
        </div>

        {/* Right - Text */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold  mb-2">
            {founder.name}
          </h2>
          <p className="text-lg text-gray-300 mb-4 font-medium">
            {founder.role}
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {founder.bio}
          </p>

          {/* Social Links */}
          <div className="flex gap-4" data-aos="fade-up">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white hover:-translate-y-2  p-3 rounded-full  transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={founder.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white hover:-translate-y-2  p-3 rounded-full  transition-all"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;
