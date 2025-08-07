import React from 'react';
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa';

const Mission = () => {
  return (
    // Mission and Values
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-wider">OUR PHILOSOPHY</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Guiding <span className="text-blue-700">Principles</span> That Define Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Integrity Card */}
          <div className="group relative overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 h-full flex flex-col items-center">
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <FaBalanceScale className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We operate with uncompromising ethics, providing transparent counsel that clients can trust completely in all legal matters.
              </p>
              <div className="mt-6 w-12 h-1 bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
          
          {/* Excellence Card */}
          <div className="group relative overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 h-full flex flex-col items-center">
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <FaGavel className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our team delivers exceptional legal services through meticulous attention to detail and unparalleled expertise in Qatari law.
              </p>
              <div className="mt-6 w-12 h-1 bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
          
          {/* Client Focus Card */}
          <div className="group relative overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 h-full flex flex-col items-center">
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Focus</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We build lasting relationships by tailoring solutions to each client's unique needs and delivering measurable results.
              </p>
              <div className="mt-6 w-12 h-1 bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-blue-900">
            Learn About Our Approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;