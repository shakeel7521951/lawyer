import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          {/* <span className="inline-block px-4 py-2 bg-blue-800 text-blue-100 rounded-full text-sm font-medium mb-6">
            CONTACT US
          </span> */}
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert <span className="text-yellow-400">Legal Advice?</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Schedule a confidential consultation with our experienced attorneys to discuss your legal matters in detail.
          </p>
          
          {/* Primary Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
              aria-label="Request a legal consultation"
            >
              Request Consultation
            </button>
            
            {/* Secondary Button */}
            <button 
              className="px-8 py-3 border-2 border-blue-300 hover:border-blue-400 text-white font-bold rounded-lg transition-all duration-300 hover:bg-blue-800"
              aria-label="Call our office"
            >
              Call Now: +974 1234 5678
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Flexible Appointments
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Doha, Qatar
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Confidential Consultations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;