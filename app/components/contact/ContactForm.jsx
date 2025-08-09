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
      <div className="relative bg-[#0D1B2A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to start your business in the GCC? Our team is here to help you every step of the way.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactCards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <div className="bg-[#0D1B2A] p-3 rounded-full mr-4">
                  <card.icon className="text-[#D4AF37] text-xl" />
                </div>
                <h3 className="text-xl font-bold">{card.title}</h3>
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
                <div className="space-y-4">
                  {card.buttons.map((button, i) => (
                    <a
                      key={i}
                      href={button.href}
                      className="bg-[#25D366] hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition"
                    >
                      <FaWhatsapp className="mr-2" /> {button.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#0D1B2A] p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-[#D4AF37] text-xl" />
                </div>
                <h3 className="text-xl font-bold">{office.country} Office</h3>
              </div>
              <div className="space-y-3">
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <div className="flex items-center mt-4">
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
            <div className="md:w-1/3 bg-[#0D1B2A] text-white p-8">
              <div className="flex items-center mb-6">
                <MdOutlineSupportAgent className="text-[#D4AF37] text-3xl mr-3" />
                <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
              </div>
              
              <p className="mb-6">Our support team is ready to help you with any questions about business setup in the GCC.</p>
              
              <div className="space-y-4">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <feature.icon className="text-[#D4AF37] mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6">
                  <h4 className="font-semibold mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.href} 
                        className="bg-[#D4AF37] hover:bg-amber-500 text-[#0D1B2A] p-2 rounded-full transition"
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