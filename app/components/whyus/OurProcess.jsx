import React from 'react';

const OurProcess = () => {
  // Process steps
  const processSteps = [
    { step: "1", title: "Consultation", description: "Free initial consultation to understand your business goals" },
    { step: "2", title: "Customized Plan", description: "Tailored business setup strategy for your industry and target market" },
    { step: "3", title: "Documentation", description: "We handle all paperwork and government submissions" },
    { step: "4", title: "Approval & Licensing", description: "Fast-track processing of all required licenses and approvals" },
    { step: "5", title: "Operational Setup", description: "Bank account, visas, office space, and digital infrastructure" },
    { step: "6", title: "Growth Support", description: "Ongoing advisory and digital services to scale your business" }
  ];

  return (
    <div>
      {/* Our Process Section */}
      <div className="bg-[#0D1B2A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven 6-Step Process</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              From initial consultation to operational success, we guide you through every stage of establishing your GCC business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white text-[#0D1B2A] p-8 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
                before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300
                after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300
                group-hover:before:w-full group-hover:after:w-full"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 -left-6 bg-[#D4AF37] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.step}
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold mb-3 mt-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
