import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative h-[32rem] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 41, 107, 0.50), rgba(0, 41, 107, 0.50)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
          <h1 className="text-4xl  font-bold text-white mb-6 leading-tight">
            Why Choose <span className="text-yellow-400">Al Khaldi</span> Law Firm?
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl  text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Trusted by clients across Qatar for our uncompromising commitment to legal excellence
          </p>
        
            {/* CTA Button */}
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Schedule Consultation
          </button>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </div>
  );
};

export default Hero;