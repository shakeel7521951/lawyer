import React from 'react';
import { FaLinkedin, FaTwitter, FaUserTie, FaCode, FaCogs, FaBalanceScale } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Founder & CEO",
    bio: "15+ years in GCC business consultancy, specializing in company formation and government relations.",
    img: "./about/ab.jpeg",
    icon: <FaUserTie className="text-[#D4AF37] text-xl" />
  },
  {
    name: "Ali Raza",
    role: "Digital Solutions Director",
    bio: "Tech entrepreneur leading our digital products and automation services.",
    img: "./about/ab2.jpeg",
    icon: <FaCode className="text-[#D4AF37] text-xl" />
  },
  {
    name: "Mohammed Khan",
    role: "Head of Operations - KSA",
    bio: "Oversees all Saudi operations with deep expertise in Vision 2030 requirements.",
    img: "./about/ab3.jpeg",
    icon: <FaCogs className="text-[#D4AF37] text-xl" />
  },
  {
    name: "Hamza Al-Hashimi",
    role: "Legal Advisor",
    bio: "Specializes in compliance, licensing, and foreign ownership regulations.",
    img: "./about/ab4.jpeg",
    icon: <FaBalanceScale className="text-[#D4AF37] text-xl" />
  }
];

const Team = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-[#1C1C1C] text-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
          <p className="text-[#F9F9F9]/80 max-w-2xl mx-auto text-sm sm:text-base">
            Meet the experts guiding your GCC business journey with local knowledge and global standards.
          </p>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#0D1B2A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-2">
                    <a 
                      href="#" 
                      className="bg-[#D4AF37] text-[#1C1C1C] p-2 rounded-full hover:bg-[#1C1C1C] hover:text-[#D4AF37] transition-all"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="#" 
                      className="bg-[#D4AF37] text-[#1C1C1C] p-2 rounded-full hover:bg-[#1C1C1C] hover:text-[#D4AF37] transition-all"
                      aria-label={`Follow ${member.name} on Twitter`}
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gray-200 text-[#1C1C1C] p-3 rounded-lg">
                  {member.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#D4AF37] text-sm mb-3 font-medium">{member.role}</p>
                <p className="text-[#F9F9F9]/80 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;