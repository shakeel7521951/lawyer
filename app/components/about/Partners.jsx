import React from 'react';

const partners = [
  { 
    name: "Qatar Financial Centre", 
    logo: "./about/qtlogo.avif" 
  },
  { 
    name: "Saudi Investment Authority", 
    logo: "./about/sulogo.avif" 
  },
  { 
    name: "Oman Chamber of Commerce", 
    logo: "./about/Omlogo.avif" 
  },
  { 
    name: "Nerou Technologies", 
    logo: "./about/nologo.avif" 
  }
];

const Partners = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-[#0D1B2A] text-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Trusted By</h2>
          <p className="text-[#F9F9F9]/80 max-w-2xl mx-auto text-sm sm:text-base">
            We partner with leading institutions to deliver exceptional value to our clients.
          </p>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="h-20 w-40 md:h-24 md:w-48 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain h-full w-full filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
