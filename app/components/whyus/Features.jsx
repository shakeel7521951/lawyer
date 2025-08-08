import React from 'react';
import { FaAward, FaBalanceScale, FaGlobe, FaUserTie, FaHandshake, FaLock } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaAward className="text-3xl" />,
      title: "Extensive Legal Experience",
      description: "Our team of lawyers brings over 20 years of experience across various legal fields in Qatar and internationally."
    },
    {
      icon: <FaBalanceScale className="text-3xl" />,
      title: "Strategic Approach",
      description: "We provide strategic legal solutions tailored specifically to meet our clients' unique needs."
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Global Presence",
      description: "With an international network, we serve clients across the globe with seamless efficiency."
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Elite Team",
      description: "Our attorneys are graduates of top universities and hold the highest legal qualifications."
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Strong Relationships",
      description: "Our strong relationships with government entities and corporations enable us to deliver optimal results."
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: "Complete Confidentiality",
      description: "We guarantee the highest standards of confidentiality and security for all client matters."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-[#001f3f] rounded-full text-sm font-semibold tracking-wider mb-4">
            OUR ADVANTAGES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#001f3f]">Clients Choose</span> Our Firm
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] to-blue-800 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8 h-full">
                {/* Icon Container */}
                <div className="mb-6 p-4 bg-blue-100 rounded-xl inline-flex items-center justify-center group-hover:bg-[#001f3f] transition-all duration-300">
                  <div className="text-[#001f3f] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#001f3f] to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-4 py-3 bg-gradient-to-r from-[#001f3f] to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-[#001f3f] transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;