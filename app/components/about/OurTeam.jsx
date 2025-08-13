"use client";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Correct CSS import

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const teamMembers = [
    {
      name: "----",
      role: "--------",
      img: "/about/ab.jpeg",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "----",
      role: "-------",
      img: "/about/ab2.jpeg",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "----",
      role: "-------",
      img: "/about/ab3.jpeg",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20">
      <div
        className="max-w-7xl mx-auto text-center mb-12"
        data-aos="fade-down"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#9f8660] mb-4">
          Our Team
        </h2>
        <p className="text-black max-w-2xl mx-auto">
          Meet the professionals who drive Al Khaldi Law Firm forward with
          expertise, integrity, and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.role}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#D4AF37]"
            />
            <h4 className="text-lg font-bold mb-1">{member.name}</h4>
            <p className="text-sm text-gray-400 mb-4">{member.role}</p>
            <div className="flex justify-center gap-4 text-lg">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:border-2 hover:bg-white rounded-full"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:border-2 hover:bg-white rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:border-2 hover:bg-white rounded-full"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
