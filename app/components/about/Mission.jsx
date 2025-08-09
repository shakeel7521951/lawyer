import React from 'react';

const Mission = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-[#F9F9F9] text-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Principles</h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#D4AF37] overflow-hidden group">
            <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
              <img
                src="./about/mo.avif"
                alt="Mission"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0D1B2A]/20"></div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0D1B2A]">Mission</h3>
            <p className="text-dark/90 text-sm md:text-base">
              To simplify business establishment in the GCC through integrated legal, advisory, and digital solutions, enabling entrepreneurs to focus on growth.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#D4AF37] overflow-hidden group">
            <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
              <img
                src="./about/mt.avif"
                alt="Vision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0D1B2A]/20"></div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0D1B2A]">Vision</h3>
            <p className="text-dark/90 text-sm md:text-base">
              Become the most trusted partner for foreign investors seeking seamless market entry and sustainable growth in the Middle East.
            </p>
          </div>
          
          {/* Values Card */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#D4AF37] overflow-hidden group">
            <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
              <img
                src="./about/mh.avif"
                alt="Values"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0D1B2A]/20"></div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0D1B2A]">Values</h3>
            <ul className="list-disc pl-5 text-dark/90 space-y-2 text-sm md:text-base">
              <li>Integrity in all dealings</li>
              <li>Client-centric innovation</li>
              <li>Regional expertise</li>
              <li>Technology-driven solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;