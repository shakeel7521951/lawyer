import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[32rem] flex items-center justify-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 41, 107, 0.85), rgba(0, 41, 107, 0.85)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact <span className="text-blue-300">Our Legal Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Connect with our experienced attorneys for personalized legal solutions tailored to your specific needs
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 sm:px-8 py-3 text-nowrap bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
              Schedule Consultation
            </button>
            <button className="px-4 sm:px-8 py-3 text-nowrap border-2 border-blue-300 hover:border-blue-400 text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1">
              Call Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </div>
  );
};

export default Hero;