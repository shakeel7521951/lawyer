import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "----",
      role: "--------",
      img: "/about/ab.jpeg",
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    {
      name: "----",
      role:"-------",
      img: "/about/ab2.jpeg",
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    },
    {
      name: "----",
      role: "-------",
      img: "/about/ab3.jpeg",
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-4">Our Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Meet the professionals who drive Al Khaldi Law Firm forward with expertise, integrity, and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-[#1B263B] rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.role}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#D4AF37]"
            />
            <h4 className="text-lg font-bold mb-1">{member.name}</h4>
            <p className="text-sm text-gray-400 mb-4">{member.role}</p>
            <div className="flex justify-center gap-4 text-[#D4AF37] text-lg">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
