import React from "react";
import { FaFlag } from "react-icons/fa"; // fallback generic flag
import { TbWorld } from "react-icons/tb"; // for Nerou as tech/global
import { SiQatarairways } from "react-icons/si"; // Example brand icon (if flag not available)
import { GiPalmTree } from "react-icons/gi"; // placeholder for Saudi
import { GiDesert } from "react-icons/gi"; // placeholder for Oman

const partners = [
  {
    name: "Qatar Financial Centre",
    icon: <SiQatarairways size={48} className="text-[#8B1538]" />,
  },
  {
    name: "Saudi Investment Authority",
    icon: <GiPalmTree size={48} className="text-green-600" />,
  },
  {
    name: "Oman Chamber of Commerce",
    icon: <GiDesert size={48} className="text-yellow-500" />,
  },
  {
    name: "Nerou Technologies",
    icon: <TbWorld size={48} className="text-blue-400" />,
  },
];

const Partners = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-[#0D1B2A] text-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted By
          </h2>
          <p className="text-[#F9F9F9]/80 max-w-2xl mx-auto text-sm sm:text-base">
            We partner with leading institutions to deliver exceptional value to our clients.
          </p>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-20 w-40 md:h-24 md:w-48 bg-white/5 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              {partner.icon}
              <span className="mt-2 text-xs text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
