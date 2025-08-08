import React from "react";
import { FaBuilding, FaUserTie, FaHandshake, FaBalanceScale, FaChevronRight } from "react-icons/fa";

const Points = () => {
  const services = [
    {
      icon: <FaBuilding className="text-2xl" />,
      title: "Government & Public Sector",
      desc: "Specialized legal advisory for ministries and public institutions including legislative drafting and regulatory compliance.",
      highlights: [
        "Legislative drafting",
        "Regulatory compliance",
        "International disputes",
        "Public policy advisory"
      ],
      color: "from-blue-800 to-blue-900"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Corporate Business Solutions",
      desc: "End-to-end legal services for corporations from formation to cross-border transactions.",
      highlights: [
        "Company formation",
        "Mergers & acquisitions",
        "Commercial contracts",
        "IP protection"
      ],
      color: "from-amber-600 to-amber-700"
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Individual Client Services",
      desc: "Personalized legal counsel for residents and expats navigating Qatari law.",
      highlights: [
        "Family law",
        "Real estate",
        "Inheritance",
        "Personal rights"
      ],
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: "Comprehensive Legal Support",
      desc: "Full-spectrum legal services combining expertise with business strategy.",
      highlights: [
        "Civil litigation",
        "Arbitration",
        "Real estate law",
        "Tax advisory"
      ],
      color: "from-purple-600 to-purple-700"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#0D1B2A] rounded-full text-sm font-semibold tracking-wider mb-4">
            INTEGRATED LEGAL SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            GCC-Focused <span className="text-[#D4AF37]">Legal Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0D1B2A] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combining traditional legal excellence with modern business solutions to deliver compliance, protection, and growth across Qatar, Oman, and Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white p-8 h-full">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-sm font-medium text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors">
                  Learn more
                  <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#0D1B2A] to-[#1C1C1C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-[#D4AF37] hover:to-amber-600 transform hover:-translate-y-1">
            Book Consultation with Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Points;