import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock, FaGlobe } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

const ContactForm = () => {
  // Data for contact cards
  const contactCards = [
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak directly with our business consultants",
      items: [
        { label: "Qatar:", value: "+974 1234 5678", href: "tel:+97412345678" },
        { label: "Oman:", value: "+968 1234 5678", href: "tel:+96812345678" },
        { label: "KSA:", value: "+966 1234 5678", href: "tel:+96612345678" }
      ]
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      description: "Message us for quick responses to your queries",
      buttons: [
        { text: "Chat with Qatar Team", href: "https://wa.me/97412345678" },
        { text: "Chat with Oman Team", href: "https://wa.me/96812345678" }
      ]
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "Send us your detailed inquiries",
      items: [
        { value: "info@yourcompany.com", href: "mailto:info@yourcompany.com" },
        { value: "support@yourcompany.com", href: "mailto:support@yourcompany.com" }
      ]
    }
  ];

  // Data for office locations
  const offices = [
    {
      country: "Qatar",
      address: ["West Bay, Doha", "Business District, Tower XYZ", "Floor 10, Office 1002"],
      hours: "Sun-Thu: 8AM - 6PM"
    },
    {
      country: "Oman",
      address: ["Muscat, Oman", "Al Khuwair, Building ABC", "Floor 5, Office 502"],
      hours: "Sun-Thu: 8AM - 6PM"
    },
    {
      country: "Saudi Arabia",
      address: ["Riyadh, KSA", "Olaya District, Tower DEF", "Floor 15, Office 1501"],
      hours: "Sun-Thu: 8AM - 6PM"
    }
  ];

  // Data for country options
  const countries = [
    { value: "qatar", label: "Qatar" },
    { value: "oman", label: "Oman" },
    { value: "ksa", label: "Saudi Arabia" },
    { value: "uae", label: "UAE" },
    { value: "bahrain", label: "Bahrain" },
    { value: "kuwait", label: "Kuwait" }
  ];

  // Data for service options
  const services = [
    { value: "company-formation", label: "Company Formation" },
    { value: "visa-licensing", label: "Visa & Licensing" },
    { value: "business-strategy", label: "Business Strategy" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "website-development", label: "Website Development" },
    { value: "crm-automation", label: "CRM & Automation" },
    { value: "other", label: "Other" }
  ];

  // Data for support features
  const supportFeatures = [
    {
      icon: FaGlobe,
      title: "Multilingual Support",
      description: "We speak English, Arabic, and more"
    },
    {
      icon: FaClock,
      title: "Quick Response",
      description: "Typically replies within 1 business day"
    }
  ];

  // Data for social links
  const socialLinks = [
    { icon: FaWhatsapp, href: "#" },
    { icon: FaPhone, href: "#" },
    { icon: FaEnvelope, href: "#" }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#0D1B2A]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white py-24 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#415A77] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#778DA9] opacity-10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
            Get In Touch <span className="text-[#E0E1DD]">With Us</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Ready to start your business in the GCC?
            Our expert team is here to guide you every step of the way.
          </p>
          <button className="bg-[#E0E1DD] text-[#0D1B2A] hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>


      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-transparent transition-all duration-500 hover:shadow-2xl"
            >
              {/* Animated Border */}
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-[#D4AF37] transform scale-x-0 scale-y-0 origin-top-left transition-transform duration-500 group-hover:scale-x-100 group-hover:scale-y-100"></span>
              <span className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-[#D4AF37] transform scale-x-0 scale-y-0 origin-bottom-right transition-transform duration-500 group-hover:scale-x-100 group-hover:scale-y-100"></span>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0D1B2A] p-3 rounded-full mr-4 shadow-md">
                    <card.icon className="text-[#D4AF37] text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{card.description}</p>

                {card.items && (
                  <div className="space-y-2">
                    {card.items.map((item, i) => (
                      <p key={i} className="flex items-center">
                        {item.label && <span className="font-semibold mr-2">{item.label}</span>}
                        <a href={item.href} className="hover:text-[#D4AF37] transition">
                          {item.value}
                        </a>
                      </p>
                    ))}
                  </div>
                )}

                {card.buttons && (
                  <div className="space-y-4 mt-4">
                    {card.buttons.map((button, i) => (
                      <a
                        key={i}
                        href={button.href}
                        className="bg-[#25D366] hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition shadow-md"
                      >
                        <FaWhatsapp className="mr-2" /> {button.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
            >
              {/* Animated Diagonal Line */}
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500"></span>
              <span className="absolute top-0 right-0 w-[3px] h-0 bg-gradient-to-b from-[#D4AF37] to-transparent group-hover:h-full transition-all duration-500 delay-150"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-gradient-to-l from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500 delay-300"></span>
              <span className="absolute bottom-0 left-0 w-[3px] h-0 bg-gradient-to-t from-[#D4AF37] to-transparent group-hover:h-full transition-all duration-500 delay-500"></span>

              <div className="flex items-center mb-4">
                <div className="bg-[#0D1B2A] p-4 rounded-full mr-4 shadow-md">
                  <FaMapMarkerAlt className="text-[#D4AF37] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A]">
                  {office.country} Office
                </h3>
              </div>

              <div className="space-y-3 text-gray-700">
                {office.address.map((line, i) => (
                  <p key={i} className="leading-relaxed">
                    {line}
                  </p>
                ))}
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <FaClock className="text-[#D4AF37] mr-2" />
                  <span>{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="country" className="block text-gray-700 mb-2">Country of Interest</label>
                  <select
                    id="country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.value}>{country.label}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Tell us about your business needs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#0D1B2A] hover:bg-[#1C1C1C] text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Support Section */}
            <div className="md:w-1/3 bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] text-white p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md">
              <div className="flex items-center mb-6">
                <MdOutlineSupportAgent className="text-[#D4AF37] text-4xl mr-3 drop-shadow-lg" />
                <h3 className="text-2xl font-extrabold tracking-wide">Need Immediate Assistance?</h3>
              </div>

              <p className="mb-8 text-gray-300 leading-relaxed">
                Our support team is ready to help you with any questions about business setup in the GCC.
              </p>

              <div className="space-y-5">
                {supportFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-white/5 transition"
                  >
                    <feature.icon className="text-[#D4AF37] text-2xl mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-semibold mb-4 text-lg">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="bg-[#D4AF37] hover:bg-amber-400 hover:text-white text-[#0D1B2A] p-3 rounded-full shadow-md hover:scale-110 transition"
                      >
                        <social.icon className="text-xl" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;