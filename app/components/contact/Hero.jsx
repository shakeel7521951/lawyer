import React from "react";

const Hero = () => {
  return (
    <div className="relative md:h-[100vh] h-[50vh] max-h-[80vh] flex justify-center items-center overflow-hidden">
      <style>
        {`
          /* Keyframes for text and image animations */
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes zoomSlow {
            0% { transform: scale(1.05); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1.05); }
          }

          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease-out forwards;
          }
          .animate-zoomSlow {
            animation: zoomSlow 10s ease-in-out infinite;
          }

          /* Button hover animation with before/after */
          .btn-hover {
            background-color: white;
            color: #0D1B2A;
            position: relative;
            z-index: 0;
            overflow: hidden;
            transition: color 0.4s ease;
          }
          .btn-hover::before,
          .btn-hover::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 0%;
            background-color: #D4AF37;
            z-index: -1;
            transition: all 0.4s ease;
          }
          .btn-hover::before {
            left: 0;
          }
          .btn-hover::after {
            right: 0;
          }
          .btn-hover:hover::before,
          .btn-hover:hover::after {
            width: 50%;
          }
          .btn-hover:hover {
            color: white;
          }
        `}
      </style>

      <img
        src="./contact/ch.jpeg"
        alt="lawyer contact"
        className="w-full h-full object-cover scale-105 animate-zoomSlow"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight text-white animate-fadeInDown">
          Get <span className="text-[#D4AF37]"> In </span> Touch
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8 animate-fadeInUp">
          Ready to start your business in the GCC? Our expert team is here to guide you every step of the way.
        </p>

        <button className="btn-hover px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
