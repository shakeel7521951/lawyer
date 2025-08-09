import React from 'react';

const CtaSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-16 text-[#F9F9F9] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./about/cat.avif"
          alt="Business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 to-[#1C1C1C]/90"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Start Your <span className="text-[#D4AF37]">GCC Business Journey</span>?
        </h2>
        <p className="text-[#F9F9F9]/90 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
          Our team of experts is ready to guide you through every step of establishing and growing your business in the Gulf region.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#1C1C1C] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30">
            Book Free Consultation
          </button>
          <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Contact Our Team
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
            <span>500+ Businesses Served</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
            <span>3 GCC Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;