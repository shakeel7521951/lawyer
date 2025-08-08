import React from 'react';

const Hero = () => {
  return (
    // Hero Section
    <div 
      className="relative bg-cover bg-center h-[32rem] flex items-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 41, 107, 0.50), rgba(0, 41, 107, 0.50)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
            About <span className="text-yellow-400">Our</span> Firm
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Trusted legal advisors with over 20 years of experience serving clients with excellence and integrity.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-[#ffd700] hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
              Our Services
            </button>
            <button className="bg-transparent hover:bg-[#ffd700] text-white font-semibold py-3 px-4 border border-[#ffd700] hover:border-transparent rounded-lg transition duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#001f3f] to-transparent"></div>
    </div>
  );
};

export default Hero;