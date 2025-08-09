import React from 'react';

const Founder = () => {
  return (
    // Founder Section
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Founder Image */}
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-10">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#001f3f] to-blue-900 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
              <img 
                src="./about/ab.jpeg" 
                alt="Founder of Al Khaldi Law Firm"
                className="relative w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Founder Content */}
          <div className="lg:w-3/5">
            <div className="mb-2">
              <span className="inline-block px-4 py-1 bg-blue-100 text-[#001f3f] rounded-full text-sm font-semibold tracking-wider mb-4">MEET OUR FOUNDER</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
              <span className="text-[#001f3f]">Abdulaziz Al Khaldi</span>, <br />
              Visionary Legal Expert
            </h2>
          
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                With over 20 years of distinguished experience in Qatari and international law, Sheikh Abdulaziz Al Khaldi established Al Khaldi Law Firm with a singular vision: to bridge the gap between local legal traditions and global best practices.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Recognized by <span className="font-semibold text-[#001f3f]">Legal 500</span> and <span className="font-semibold text-[#001f3f]">Chambers & Partners</span> as a leading authority in corporate and government legal matters, his strategic counsel has shaped landmark cases and transactions across the Gulf region.
              </p>
              
              <div className="border-l-4 border-[#001f3f] pl-6 my-8">
                <p className="text-gray-900 italic text-xl font-medium">
                  "We don't just practice law - we redefine what's possible for our clients through innovative, culturally-attuned legal solutions."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-px bg-blue-900 mr-3"></div>
                  <span className="text-[#001f3f] font-medium">Sheikh Abdulaziz Al Khaldi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;