import React from 'react';

const Stats = () => {
  const statsData = [
    {
      value: "20+",
      label: "Years of Experience",
    },
    {
      value: "500+",
      label: "Satisfied Clients",
    },
    {
      value: "95%",
      label: "Case Success Rate",
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-r from-[#001f3f] to-blue-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500"
            >
              <div className="text-center">
                <h3 className="text-6xl font-bold text-yellow-400 mb-4">{stat.value}</h3>
                <p className="text-xl font-medium text-blue-100">{stat.label}</p>
                <div className="w-16 h-1 bg-yellow-300 mx-auto mt-6"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
      </div>
    </section>
  );
};

export default Stats;