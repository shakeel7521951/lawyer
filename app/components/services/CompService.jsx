import React from 'react'
import Link from 'next/link'

const CompService = () => {
  // All services data
  const services = [
    {
      category: "Government & Company Setup",
      items: [
        {
          icon: "🏢",
          title: "100% Foreign Ownership Registration",
          description: "Full business ownership without local sponsor requirements"
        },
        {
          icon: "📑",
          title: "CR / Municipality / License Services",
          description: "Complete documentation and licensing solutions"
        },
        {
          icon: "👔",
          title: "PRO Services & Partner Updates",
          description: "Professional liaison officer services"
        },
        {
          icon: "🏦",
          title: "Bank Account Setup",
          description: "Corporate bank account establishment"
        },
        {
          icon: "🔄",
          title: "Sponsor Change & Share Transfer",
          description: "Smooth transition of sponsorship"
        },
        {
          icon: "📊",
          title: "Tax Registration & ISO Certification",
          description: "Compliance and quality certification"
        },
        {
          icon: "🛂",
          title: "Visa Services (Visit / Family)",
          description: "Residency and family visa processing"
        },
        {
          icon: "🏛️",
          title: "Government Portal Services",
          description: "Hukoomi, Baladiyya, WPS assistance"
        }
      ]
    },
    {
      category: "Business Advisory",
      items: [
        {
          icon: "📈",
          title: "Business Planning",
          description: "Strategic roadmap for your venture"
        },
        {
          icon: "🌍",
          title: "Market Entry Strategy",
          description: "GCC market penetration planning"
        },
        {
          icon: "🔍",
          title: "Feasibility Study",
          description: "Market viability analysis"
        },
        {
          icon: "📒",
          title: "Accounting & Bookkeeping",
          description: "Financial record management"
        },
        {
          icon: "🔎",
          title: "Audit & Assurance",
          description: "Financial compliance verification"
        },
        {
          icon: "💰",
          title: "Tax & Strategic Advisory",
          description: "Optimized tax planning"
        },
        {
          icon: "🏷️",
          title: "Valuation Services",
          description: "Business and asset appraisal"
        },
        {
          icon: "®️",
          title: "Trademark Registration",
          description: "Brand protection services"
        }
      ]
    },
    {
      category: "Digital Services",
      items: [
        {
          icon: "🖥️",
          title: "Website Development",
          description: "Custom business websites"
        },
        {
          icon: "📱",
          title: "Mobile App Development",
          description: "iOS & Android applications"
        },
        {
          icon: "🤖",
          title: "CRM & Automation",
          description: "Customer relationship systems"
        },
        {
          icon: "💬",
          title: "WhatsApp Business Solutions",
          description: "Automated customer engagement"
        },
        {
          icon: "🎙️",
          title: "Voice AI Systems",
          description: "Intelligent voice assistants"
        },
        {
          icon: "📊",
          title: "Performance Analytics",
          description: "Data-driven business insights"
        },
        {
          icon: "🎨",
          title: "Brand Development",
          description: "Corporate identity creation"
        },
        {
          icon: "📢",
          title: "Digital Marketing",
          description: "Targeted online campaigns"
        }
      ]
    }
  ]

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-[#0D1B2A]/80 max-w-3xl mx-auto">
            Al Khaldi Law Firm provides end-to-end solutions for your business needs in the GCC region
          </p>
        </div>

        {services.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8 border-b-2 border-[#D4AF37] pb-2 inline-block">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-[#0D1B2A]/10 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-bold text-[#0D1B2A] mb-2">{service.title}</h4>
                    <p className="text-[#0D1B2A]/80 mb-4">{service.description}</p>
              
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="inline-block bg-[#0D1B2A] hover:bg-black text-white font-bold py-3 px-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1"
          >
            Get All Services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompService;
