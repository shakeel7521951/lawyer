import React from "react";

const Hero = () => {
  return (
    <div
      className="relative md:h-[100vh] h-[90vh] flex justify-center items-center overflow-hidden"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
    >
      <img
        src="./contact/ch.jpeg"
        alt="lawyer contact"
        className="w-full h-full object-cover scale-125 md:scale-105 animate-zoomSlow"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight text-white animate-fadeInDown">
          Get <span className="text-[#9f8660]"> In </span> Touch
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8 animate-fadeInUp">
          Ready to start your business in the GCC? Our expert team is here to guide you every step of the way.
        </p>

        <button className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
