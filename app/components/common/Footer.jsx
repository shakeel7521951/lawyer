// components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-white text-white relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo & Description */}
        <div className="space-y-4">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-3 tracking-wider">
            <span className="font-serif">Al Khaldi</span> <span className="text-white">Law Firm</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Trusted legal excellence in Qatar, serving corporate, government, and private sectors with 
            unparalleled expertise and dedication.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-5 pb-2 border-b border-[#D4AF37]">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "Why Us", href: "/whyus" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="group flex items-start space-x-2 text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-300">•</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-5 pb-2 border-b border-[#D4AF37]">Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3 hover:text-[#D4AF37] transition-colors duration-300">
              <FaPhoneAlt className="text-[#D4AF37] mt-1 flex-shrink-0" />
              <span>+974 1234 5678</span>
            </li>
            <li className="flex items-start gap-3 hover:text-[#D4AF37] transition-colors duration-300">
              <FaEnvelope className="text-[#D4AF37] mt-1 flex-shrink-0" />
              <span>info@alkhaldi.com</span>
            </li>
            <li className="flex items-start gap-3 hover:text-[#D4AF37] transition-colors duration-300">
              <FaMapMarkerAlt className="text-[#D4AF37] mt-1 flex-shrink-0" />
              <span>Doha, Qatar</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-5 pb-2 border-b border-[#D4AF37]">Follow Us</h3>
          <div className="flex space-x-5">
            {[
              { icon: <FaFacebookF />, href: "#", hover: "#1877F2" },
              { icon: <FaTwitter />, href: "#", hover: "#1DA1F2" },
              { icon: <FaLinkedinIn />, href: "#", hover: "#0A66C2" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="p-3 border border-[#D4AF37] rounded-full text-[#D4AF37] 
                           hover:bg-[#D4AF37] hover:text-white transition-all duration-300 transform hover:scale-110"
                style={{ boxShadow: "0 0 10px rgba(212, 175, 55, 0.4)" }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0D1B2A] border-t border-gray-700 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Al Khaldi Law Firm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
