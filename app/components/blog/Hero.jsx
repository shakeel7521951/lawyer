import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[60vh] bg-gradient-to-r from-amber-300 via-amber-300 to-amber-200 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF3fGVufDB8fDB8fHww')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Blog</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Stay updated with the latest legal news, insights, and expert advice
          from Al Khaldi Law Firm.
        </p>
      </div>
    </div>
  );
};

export default Hero;
