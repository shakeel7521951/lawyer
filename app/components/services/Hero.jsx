import React from 'react';

const Hero = () => {
  return (
    // Hero Section
    <div 
      className="relative bg-cover bg-center h-[32rem] flex items-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 41, 107, 0.50), rgba(0, 41, 107, 0.50)), url('https://images.unsplash.com/photo-1646929493508-67977bffb21e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdnQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D')"
      }}
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl  lg:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-amber-300">Al Khaldi Services</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Trusted legal advisors with over 20 years of experience serving clients with excellence and integrity.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Our Services
            </button>
            <button className="bg-transparent hover:bg-blue-600 text-blue-200 font-semibold hover:text-white py-3 px-6 border border-blue-300 hover:border-transparent rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </div>
  );
};

export default Hero;