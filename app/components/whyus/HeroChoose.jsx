import React from 'react'
import { FaShieldAlt, FaGlobe, FaChartLine, FaHandshake, FaCogs } from 'react-icons/fa';
import { MdOutlineGppGood, MdOutlineWorkspacePremium } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';

const HeroChoose = () => {
  // Reasons data
  const reasons = [
    {
      icon: FaShieldAlt,
      title: "Trusted & Licensed",
      description: "Fully licensed business setup experts in Qatar, Oman, and Saudi Arabia with 500+ successful company formations"
    },
    {
      icon: FaGlobe,
      title: "GCC-Wide Expertise",
      description: "Deep understanding of business regulations across all Gulf Cooperation Council countries"
    },
    {
      icon: FaChartLine,
      title: "Proven Results",
      description: "Helped hundreds of investors and entrepreneurs establish profitable businesses in the region"
    },
    {
      icon: FaHandshake,
      title: "End-to-End Service",
      description: "From company registration to bank account opening, visas, and ongoing PRO support"
    },
    {
      icon: MdOutlineGppGood,
      title: "100% Ownership",
      description: "We help foreign investors secure full ownership of their businesses in free zones and mainland"
    },
    {
      icon: FaCogs,
      title: "Integrated Solutions",
      description: "Combining legal setup with digital technology and marketing for complete business success"
    },
    {
      icon: GiProgression,
      title: "Growth Focused",
      description: "Beyond setup - we provide strategic advisory to scale your GCC operations"
    },
    {
      icon: MdOutlineWorkspacePremium,
      title: "Premium Support",
      description: "Dedicated account managers and 24/7 multilingual customer service"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white py-28 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#415A77] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#778DA9] opacity-10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 leading-tight tracking-tight">
            Why Choose <span className="text-[#E0E1DD]">Us</span> for Your <span className="text-[#F4D35E]">GCC Business Setup</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Trusted by <span className="font-semibold text-[#F4D35E]">500+ companies</span>,
            we’re your premier partner for seamless business establishment and growth in the Gulf region.
          </p>
          <button className="px-8 py-3 bg-[#F4D35E] text-[#0D1B2A] font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Your Trusted Partner in the GCC
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-[#D4AF37] to-yellow-500 mx-auto rounded-full shadow-lg mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We combine local expertise with global standards to deliver unmatched
              business setup services across Qatar, Oman, and Saudi Arabia.
            </p>
          </div>

          {/* Reason Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 
                           group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-[#D4AF37] before:to-yellow-500 before:transition-all before:duration-500
                           after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[3px] after:bg-gradient-to-l after:from-[#D4AF37] after:to-yellow-500 after:transition-all after:duration-500
                           hover:before:w-1/2 hover:after:w-1/2"
              >
                <div className="text-[#D4AF37] text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  <reason.icon />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-200 rounded-full blur-3xl opacity-40 -z-10"></div>
      </div>
    </>
  );
}

export default HeroChoose;
