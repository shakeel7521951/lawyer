"use client"; // Next.js 13+ App Router ke liye

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaGlobe } from "react-icons/fa";

export default function ContactForm() {
  const offices = [
    {
      country: "Qatar",
      flag: "🇶🇦",
      phone: "+974 123 456 789",
      email: "qatar@yourcompany.com",
      address: "Doha, West Bay Business Tower",
      lat: 25.2854,
      lng: 51.531,
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // speed
      once: true,     // sirf ek baar chale
    });
  }, []);

  const formFields = [
    { type: "text", placeholder: "Full Name", icon: <FaUser /> },
    { type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
    { type: "tel", placeholder: `Phone Number (${selectedOffice.phone.slice(0, 4)})`, icon: <FaPhoneAlt /> },
    { type: "select-country", placeholder: "Select Country", icon: <FaGlobe /> },
    { type: "select-service", placeholder: "Service You're Interested In" },
    { type: "textarea", placeholder: "Your Message", rows: 4 },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden top-30">
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Contact Form */}
        <div
          className="md:col-span-8 bg-gray-50 rounded-xl shadow-2xl p-8 border-t-2 border-b-2 border-[#9f8660] relative overflow-hidden group"
          data-aos="zoom-in-down"
        >
          <h2
            className="text-3xl font-bold mb-6 text-[#9f8660] hover:text-[#494c52] relative z-10"
            data-aos="zoom-out"
          >
            Book Your Free Consultation
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" data-aos="zoom-out-down">
            {formFields.map((field, idx) => (
              <div
                key={idx}
                className={field.type === "textarea" || field.type === "select-service" ? "md:col-span-2 relative" : "relative"}
              >
                {field.type === "text" || field.type === "email" || field.type === "tel" ? (
                  <>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="border border-[#9f8660] p-3 pl-10 rounded-lg w-full outline-none focus:ring-1 focus:ring-[#494c52] transition-all duration-300 hover:shadow-md"
                    />
                    <div className="absolute left-3 top-3.5 text-gray-400">
                      {field.icon}
                    </div>
                  </>
                ) : field.type === "select-country" ? (
                  <>
                    <select
                      onChange={(e) => setSelectedOffice(offices.find(o => o.country === e.target.value))}
                      className="border border-[#9f8660] p-3 rounded-lg outline-none focus:ring-1 focus:ring-[#494c52] w-full appearance-none pl-10 pr-3 transition-all duration-300 hover:shadow-md"
                    >
                      {offices.map((o) => <option key={o.country}>{o.country}</option>)}
                    </select>
                    <div className="absolute left-3 top-3.5 text-gray-400">
                      {field.icon}
                    </div>
                  </>
                ) : field.type === "select-service" ? (
                  <select className="border border-[#9f8660] p-3 rounded-lg focus:ring-2 focus:ring-[#494c52] w-full transition-all duration-300 hover:shadow-md">
                    <option>{field.placeholder}</option>
                    <option>Company Formation</option>
                    <option>Business Consultancy</option>
                    <option>Market Entry Strategy</option>
                  </select>
                ) : (
                  <textarea
                    placeholder={field.placeholder}
                    rows={field.rows}
                    className="border border-[#9f8660] p-3 rounded-lg outline-none focus:ring-1 focus:ring-yellow-500 w-full transition-all duration-300 hover:shadow-md"
                  ></textarea>
                )}
              </div>
            ))}
            <div className="md:col-span-2">
              <button
                className="bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white font-semibold py-3 rounded-lg w-full relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-aos="zoom-out-down"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 space-y-6">
          {offices.map((office, i) => (
            <div
              key={i}
              className="border border-[#9f8660] rounded-xl shadow-lg p-6 hover:shadow-2xl hover:border-[#c0b688] transition relative bg-gradient-to-br from-gray-50 to-white overflow-hidden group"
              data-aos="zoom-out-down"
            >
              <h2 className="text-4xl font-semibold text-[#9f8660] hover:text-[#494c52] mb-3">
                {office.country}
              </h2>
              {[
                { icon: <FaPhoneAlt className="text-white text-lg" />, text: office.phone },
                { icon: <FaEnvelope className="text-white text-lg" />, text: office.email },
                { icon: <FaMapMarkerAlt className="text-white text-lg" />, text: office.address }
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 mb-3">
                  <span className="bg-[#9f8660] rounded-full p-2 shadow-md">{item.icon}</span>
                  {item.text}
                </p>
              ))}

              <button
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                data-aos="zoom-out-down"
              >
                <span className="bg-white/20 rounded-full p-1">
                  <FaWhatsapp />
                </span>
                WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
