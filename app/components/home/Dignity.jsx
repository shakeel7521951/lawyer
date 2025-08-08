import React from "react";
import { FaShieldAlt, FaRocket, FaUserFriends, FaLock, FaAward } from "react-icons/fa";

const Dignity = () => {
  const values = [
    {
      title: "Integrity First",
      description: "We operate with uncompromising honesty in all client matters, ensuring transparent communication at every stage.",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "from-blue-800 to-blue-900"
    },
    {
      title: "Rapid Execution",
      description: "Our streamlined processes deliver legal solutions 40% faster than industry averages without sacrificing quality.",
      icon: <FaRocket className="text-2xl" />,
      color: "from-amber-600 to-amber-700"
    },
    {
      title: "Client-Centric Approach",
      description: "Each client receives a dedicated legal team and customized strategy for their unique business needs.",
      icon: <FaUserFriends className="text-2xl" />,
      color: "from-emerald-600 to-emerald-700"
    },
    {
      title: "Ironclad Confidentiality",
      description: "Enterprise-grade security protocols protect all client data with military-grade encryption standards.",
      icon: <FaLock className="text-2xl" />,
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Benchmark Excellence",
      description: "Our attorneys maintain a 98% success rate across 500+ GCC cases with continuous professional development.",
      icon: <FaAward className="text-2xl" />,
      color: "from-red-600 to-red-700"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#0D1B2A] rounded-full text-sm font-semibold tracking-wider mb-4">
            OUR FOUNDATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            The Al-Khaldi <span className="text-[#D4AF37]">Difference</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0D1B2A] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These core principles drive our mission to deliver exceptional legal services across Qatar, Oman, and Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white p-8 h-full">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-4 text-center group-hover:text-[#D4AF37] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#0D1B2A] to-[#1C1C1C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-[#D4AF37] hover:to-amber-600 transform hover:-translate-y-1">
            Experience Our Values
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dignity;