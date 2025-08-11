// components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-2">Al Khaldi Law Firm</h2>
          <p className="text-white leading-relaxed">
            Trusted legal excellence in Qatar, serving corporate, government, and private sectors with unparalleled expertise and dedication.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-[#FFD700] mb-5 pb-2 border-b border-[#FFD700]/70">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-white hover:text-[#FFD700] transition-colors duration-300 flex items-start">
                <span className="mr-2 text-[#FFD700]">•</span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-[#FFD700] transition-colors duration-300 flex items-start">
                <span className="mr-2 text-[#FFD700]">•</span>
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-[#FFD700] transition-colors duration-300 flex items-start">
                <span className="mr-2 text-[#FFD700]">•</span>
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:text-[#FFD700] transition-colors duration-300 flex items-start">
                <span className="mr-2 text-[#FFD700]">•</span>
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/whyus" className="text-white hover:text-[#FFD700] transition-colors duration-300 flex items-start">
                <span className="mr-2 text-[#FFD700]">•</span>
                <span>Why Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-[#FFD700] mb-5 pb-2 border-b border-[#FFD700]/70">Contact</h3>
          <ul className="space-y-4 text-white">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#FFD700] mt-1 flex-shrink-0" />
              <span>+974 1234 5678</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-[#FFD700] mt-1 flex-shrink-0" />
              <span>info@alkhaldi.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FFD700] mt-1 flex-shrink-0" />
              <span>Doha, Qatar</span>
            </li>
          </ul>
        </div>

        {/* Social & Language */}
        <div>
          <h3 className="text-lg font-bold text-[#FFD700] mb-5 pb-2 border-b border-[#FFD700]/70">Follow Us</h3>
          <div className="flex space-x-5 mb-6">
            <a
              href="#"
              className="p-3 border border-[#FFD700] rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1877F2] transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="border border-[#FFD700] p-3 rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1DA1F2] transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="border border-[#FFD700] p-3 rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0D1B2A] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white text-sm">
          <div className="border-t border-gray-500 pt-6">
            © {new Date().getFullYear()} Al Khaldi Law Firm. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}