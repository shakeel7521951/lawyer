import React from "react";

const stats = [
  { value: "500+", label: "Companies Established" },
  { value: "3", label: "GCC Countries" },
  { value: "100%", label: "Client Satisfaction" },
];

const CatTrust = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#0D1B2A]">
      {/* CTA Section */}
      <div className="bg-[#D4AF37] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0D1B2A]">
            Ready to Start Your GCC Business Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-[#1C1C1C]">
            Book a free consultation with our experts today and take the first
            step towards your business success in the Gulf.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/book-consultation"
              aria-label="Book a free consultation"
              className="bg-[#0D1B2A] hover:bg-[#1C1C1C] text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/XXXXXXXXXXX"
              aria-label="Chat with our team on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              WhatsApp Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-700">
              Trusted by Businesses Across the GCC
            </h3>
            <div className="mt-3 w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative bg-white text-center shadow-lg rounded-2xl p-6 hover:shadow-xl transition group overflow-hidden
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-1 before:bg-[#D4AF37] before:transition-all before:duration-300 group-hover:before:w-full
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#D4AF37] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                <div className="text-4xl font-extrabold text-[#0D1B2A]">
                  {item.value}
                </div>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatTrust;
