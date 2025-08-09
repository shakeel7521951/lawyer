import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#0D1B2A] text-[#F9F9F9] py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight">
              Pioneering Business Solutions Across the GCC
            </h1>
            <p className="text-[#F9F9F9]/90 text-sm sm:text-base">
              With a decade of excellence, we've empowered over 500 businesses
              to establish and grow in Qatar, Oman, and Saudi Arabia. Our
              integrated ecosystem combines legal expertise, strategic advisory,
              and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#D4AF37] text-[#1C1C1C] hover:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base">
                Meet Our Team
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base">
                Our GCC Offices
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-[#1C1C1C]/50 border border-[#D4AF37]/20 p-4 sm:p-6 rounded-lg hover:border-[#D4AF37]/50 transition-all">
                <img
                  src="./about/h1.avif"
                  alt="Companies Established"
                  className="w-full h-20 sm:h-24 object-cover rounded mb-2 sm:mb-3 brightness-90 hover:brightness-110 transition-all"
                />
                <h3 className="text-lg sm:text-xl font-semibold">500+</h3>
                <p className="text-[#F9F9F9]/80 text-xs sm:text-sm">Companies Established</p>
              </div>

              <div className="bg-[#1C1C1C]/50 border border-[#D4AF37]/20 p-4 sm:p-6 rounded-lg hover:border-[#D4AF37]/50 transition-all">
                <img
                  src="./about/h2.avif"
                  alt="GCC Countries"
                  className="w-full h-20 sm:h-24 object-cover rounded mb-2 sm:mb-3 brightness-90 hover:brightness-110 transition-all"
                />
                <h3 className="text-lg sm:text-xl font-semibold">3</h3>
                <p className="text-[#F9F9F9]/80 text-xs sm:text-sm">GCC Countries</p>
              </div>

              <div className="bg-[#1C1C1C]/50 border border-[#D4AF37]/20 p-4 sm:p-6 rounded-lg hover:border-[#D4AF37]/50 transition-all">
                <img
                  src="./about/h3.avif"
                  alt="Foreign Ownership"
                  className="w-full h-20 sm:h-24 object-cover rounded mb-2 sm:mb-3 brightness-90 hover:brightness-110 transition-all"
                />
                <h3 className="text-lg sm:text-xl font-semibold">100%</h3>
                <p className="text-[#F9F9F9]/80 text-xs sm:text-sm">Foreign Ownership</p>
              </div>

              <div className="bg-[#1C1C1C]/50 border border-[#D4AF37]/20 p-4 sm:p-6 rounded-lg hover:border-[#D4AF37]/50 transition-all">
                <img
                  src="./about/h4.avif"
                  alt="Licensed"
                  className="w-full h-20 sm:h-24 object-cover rounded mb-2 sm:mb-3 brightness-90 hover:brightness-110 transition-all"
                />
                <h3 className="text-lg sm:text-xl font-semibold">Licensed</h3>
                <p className="text-[#F9F9F9]/80 text-xs sm:text-sm">In All Regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;