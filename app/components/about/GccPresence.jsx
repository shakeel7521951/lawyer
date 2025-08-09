import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const offices = [
  {
    country: "Qatar",
    address: "West Bay, Doha, Qatar",
    phone: "+974 1234 5678",
    email: "qa@example.com",
    img: "./about/pq.avif"
  },
  {
    country: "Saudi Arabia",
    address: "Olaya District, Riyadh, KSA",
    phone: "+966 1234 5678",
    email: "ksa@example.com",
    img: "./about/ps.avif"
  },
  {
    country: "Oman",
    address: "Muscat Grand Mall District, Oman",
    phone: "+968 1234 5678",
    email: "om@example.com",
    img: "./about/po.avif"
  }
];

const GccPresence = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-[#F9F9F9] text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our GCC Presence</h2>
          <p className="text-[#1C1C1C]/80 max-w-2xl mx-auto text-sm sm:text-base">
            Strategically located to serve your business needs across the Gulf region.
          </p>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offices.map((office, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={office.img}
                  alt={office.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/70 via-[#0D1B2A]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{office.country}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <p className="text-[#1C1C1C]/90 text-sm sm:text-base">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-[#D4AF37] flex-shrink-0" />
                    <p className="text-[#1C1C1C]/90 text-sm sm:text-base">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#D4AF37] flex-shrink-0" />
                    <p className="text-[#1C1C1C]/90 text-sm sm:text-base">{office.email}</p>
                  </div>
                </div>
                
                <button className="mt-6 text-[#D4AF37] hover:text-[#0D1B2A] font-medium flex items-center gap-2 transition-all group-hover:gap-3">
                  View on map <FaArrowRight className="transition-all group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GccPresence;