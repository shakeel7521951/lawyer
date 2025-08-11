import { FaShieldAlt, FaGlobe, FaChartLine, FaHandshake, FaCogs, FaHeadset } from 'react-icons/fa';
import { MdOutlineGppGood, MdOutlineWorkspacePremium } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';

const HeroWhy = () => {
  // Reasons data
  const reasons = [
    {
      icon: FaShieldAlt,
      title: "Trusted & Licensed",
      description: "Fully licensed business setup experts in Qatar, Oman, and Saudi Arabia with 500+ successful company formations"
    },
    {
      icon: FaGlobe,
      title: "GCC-Wide Expertise",
      description: "Deep understanding of business regulations across all Gulf Cooperation Council countries"
    },
    {
      icon: FaChartLine,
      title: "Proven Results",
      description: "Helped hundreds of investors and entrepreneurs establish profitable businesses in the region"
    },
    {
      icon: FaHandshake,
      title: "End-to-End Service",
      description: "From company registration to bank account opening, visas, and ongoing PRO support"
    },
    {
      icon: MdOutlineGppGood,
      title: "100% Ownership",
      description: "We help foreign investors secure full ownership of their businesses in free zones and mainland"
    },
    {
      icon: FaCogs,
      title: "Integrated Solutions",
      description: "Combining legal setup with digital technology and marketing for complete business success"
    },
    {
      icon: GiProgression,
      title: "Growth Focused",
      description: "Beyond setup - we provide strategic advisory to scale your GCC operations"
    },
    {
      icon: MdOutlineWorkspacePremium,
      title: "Premium Support",
      description: "Dedicated account managers and 24/7 multilingual customer service"
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "Free initial consultation to understand your business goals"
    },
    {
      step: "2",
      title: "Customized Plan",
      description: "Tailored business setup strategy for your industry and target market"
    },
    {
      step: "3",
      title: "Documentation",
      description: "We handle all paperwork and government submissions"
    },
    {
      step: "4",
      title: "Approval & Licensing",
      description: "Fast-track processing of all required licenses and approvals"
    },
    {
      step: "5",
      title: "Operational Setup",
      description: "Bank account, visas, office space, and digital infrastructure"
    },
    {
      step: "6",
      title: "Growth Support",
      description: "Ongoing advisory and digital services to scale your business"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "They made our Qatar business setup incredibly smooth. Had our trade license in 2 weeks when others said it would take months.",
      name: "Ahmed K., Tech Startup Founder"
    },
    {
      quote: "The team's knowledge of Saudi regulations saved us from costly mistakes. Truly experts in GCC business setup.",
      name: "Sarah L., E-commerce Entrepreneur"
    },
    {
      quote: "From company formation to digital marketing, they've been our trusted partner for growth in the Gulf.",
      name: "Rajiv P., Restaurant Chain Owner"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#0D1B2A]">
      {/* Hero Section */}
      <div className="relative bg-[#0D1B2A] text-white py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us for Your GCC Business Setup</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trusted by 500+ companies, we're the premier partner for seamless business establishment and growth in the Gulf region.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Your Trusted Partner in the GCC</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            We combine local expertise with global standards to deliver unmatched business setup services across Qatar, Oman, and Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-[#D4AF37] text-4xl mb-4">
                <reason.icon />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

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
              <div key={index} className="bg-white text-[#0D1B2A] p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-6 -left-6 bg-[#D4AF37] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Don't just take our word for it - hear from entrepreneurs who've successfully established their businesses with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#D4AF37] text-4xl mb-4">"</div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <p className="font-semibold text-[#0D1B2A]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#D4AF37] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0D1B2A]">Ready to Start Your GCC Business Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#1C1C1C]">
            Book a free consultation with our experts today and take the first step towards your business success in the Gulf.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#0D1B2A] hover:bg-[#1C1C1C] text-white px-8 py-3 rounded-lg font-semibold transition">
              Book Free Consultation
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold transition">
              WhatsApp Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-600">TRUSTED BY BUSINESSES ACROSS THE GCC</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Replace with actual client logos */}
              <div className="text-2xl font-bold text-[#0D1B2A]">500+</div>
              <div className="text-gray-600">Companies Established</div>
              <div className="text-2xl font-bold text-[#0D1B2A]">3</div>
              <div className="text-gray-600">GCC Countries</div>
              <div className="text-2xl font-bold text-[#0D1B2A]">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWhy;