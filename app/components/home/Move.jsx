import React from "react";


const Move = () => {


  return (
    <div className="bg-gray-50 py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Comprehensive Legal Solutions for All
      </h2>
      <p className="text-gray-600 max-w-2xl mb-6">
        Al Khaldi Law Firm provides expert legal services to government,
        semi-government, corporate, and individual clients — ensuring justice,
        compliance, and peace of mind.
      </p>
     <div className="mt-16 text-center">
          <button className="px-8 cursor-pointer py-4 bg-gradient-to-r from-[#0D1B2A] to-[#1C1C1C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-[#D4AF37] hover:to-amber-600 transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
    </div>
  );
};

export default Move;
