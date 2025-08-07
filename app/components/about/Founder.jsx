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
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Founder of Al Khaldi Law Firm"
                className="relative w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Founder Content */}
          <div className="lg:w-3/5">
            <div className="mb-2">
              <span className="text-blue-600 font-semibold">MEET OUR FOUNDER</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-blue-900">Abdulaziz Al Khaldi</span>, <br />
              Visionary Legal Expert
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                With over 20 years of distinguished experience in Qatari and international law, Sheikh Abdulaziz Al Khaldi established Al Khaldi Law Firm with a singular vision: to bridge the gap between local legal traditions and global best practices.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Recognized by <span className="font-semibold text-blue-800">Legal 500</span> and <span className="font-semibold text-blue-800">Chambers & Partners</span> as a leading authority in corporate and government legal matters, his strategic counsel has shaped landmark cases and transactions across the Gulf region.
              </p>
              
              <div className="border-l-4 border-blue-600 pl-6 my-8">
                <p className="text-gray-800 italic text-xl font-medium">
                  "We don't just practice law - we redefine what's possible for our clients through innovative, culturally-attuned legal solutions."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-px bg-blue-400 mr-3"></div>
                  <span className="text-blue-700 font-medium">Sheikh Abdulaziz Al Khaldi</span>
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