import React from 'react';
import { FaGlobe, FaEnvelope, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";


const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sheikh Abdulaziz Al Khaldi",
      title: "Founding Partner",
      specialty: "Corporate & Commercial Law",
      bio: "Harvard-educated with 25+ years experience advising Fortune 500 companies and government entities.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 2,
      name: "Dr. Aisha Al-Mansoori",
      title: "Senior Partner",
      specialty: "International Arbitration",
      bio: "Recognized by Chambers Global as a leading arbitration expert in the Middle East.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 3,
      name: "Mohammed Al-Thani",
      title: "Partner",
      specialty: "Energy & Infrastructure",
      bio: "Former general counsel for major Qatari energy corporation with deep sector expertise.",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 4,
      name: "Sarah Al-Kuwari",
      title: "Partner",
      specialty: "Technology & IP Law",
      bio: "Leads our digital transformation practice and AI legal framework development.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#001f3f] to-blue-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-[#001f3f] rounded-full text-sm font-semibold tracking-wider mb-4">LEGAL EXPERTISE</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Our <span className="text-yellow-400">Distinguished</span> Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
          <p className="mt-8 text-blue-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Al Khaldi Law Firm assembles Qatar's most respected legal minds, each bringing specialized expertise and international experience to serve our clients' diverse needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-yellow-400 font-medium">{member.title}</p>
                  <p className="text-blue-200 text-sm mt-1">{member.specialty}</p>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-700 hover:text-blue-900 border border-[#ffd700] py-2 px-2 rounded-full transition-all duration-300 hover:bg-[#FFD700] hover:scale-110 hover:shadow-lg">
                    <FaFacebookF className="text-sx" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900 border border-[#ffd700] py-2 px-2 rounded-full transition-all duration-300 hover:bg-[#FFD700] hover:scale-110 hover:shadow-lg">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900 border border-[#ffd700] py-2 px-2 rounded-full transition-all duration-300 hover:bg-[#FFD700] hover:scale-110 hover:shadow-lg">
                    <FaLinkedinIn className="text-lg" />
                  </a>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-[#ffd700] hover:bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                {member.id === 1 ? 'FOUNDER' : 'PARTNER'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-[#ffd700] hover:bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all ">
            Meet Full Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;