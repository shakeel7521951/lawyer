import React from 'react';

const MapSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-4">
            OUR LOCATION
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-blue-700">Prestigious</span> Offices
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Doha's financial district at Al Fardan Towers, our offices provide convenient access with premium amenities.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Map Frame */}
          <div className="h-[500px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.897061277391!2d51.53082331501181!3d25.239154983878406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d931e8f9a7e3e9!2sAl%20Fardan%20Towers!5e0!3m2!1sen!2sqa!4v1620000000000!5m2!1sen!2sqa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Al Khaldi Law Firm Location"
              className="absolute inset-0 filter grayscale-20 hover:grayscale-0 transition-all duration-500"
            ></iframe>

            {/* Map Overlay Card */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-md border border-blue-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Al Khaldi Law Firm</h3>
                  <p className="text-gray-700 mb-1">Al Fardan Towers, West Bay</p>
                  <p className="text-gray-700 mb-4">Doha, Qatar</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>Secure parking available</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                      </svg>
                      <span>Wheelchair accessible</span>
                    </div>
                  </div>
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-all duration-300"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-200">
            <h3 className="flex items-center text-lg font-bold text-gray-900 mb-3">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Office Hours
            </h3>
            <p className="text-gray-700">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Friday - Saturday: Closed</p>
          </div>

         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 
              transition-all duration-300 ease-in-out 
              hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 
              hover:bg-blue-50 hover:transform">
  <h3 className="flex items-center text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700">
    <svg className="w-5 h-5 text-blue-600 mr-2 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
    </svg>
    Parking Information
  </h3>
  <p className="text-gray-700 group-hover:text-gray-800">Complimentary valet parking available for clients in the building's underground parking.</p>
</div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-200">
            <h3 className="flex items-center text-lg font-bold text-gray-900 mb-3">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Security Protocol
            </h3>
            <p className="text-gray-700">Please bring valid ID for building access. All visitors are screened at reception.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;