import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[32rem] flex items-center justify-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 41, 107, 0.50), rgba(0, 41, 107, 0.50)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Contact <span className="text-yellow-400">Our Legal </span> Team
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Connect with our experienced attorneys for personalized legal solutions tailored to your specific needs
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-3 text-nowrap bg-[#ffd700] hover:bg-yellow-500 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
              Schedule Consultation
            </button>
            <button className="px-4 py-3 text-nowrap border hover:bg-[#ffd700] border-[#ffd700] text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1">
              Call Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#001f3f] to-transparent"></div>
    </div>
  );
};

export default Hero;