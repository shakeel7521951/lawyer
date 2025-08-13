"use client";
import Link from "next/link";

export default function AboutContact() {
  return (
    <main className="bg-[#0D1B2A] text-white">
    

      {/* Contact CTA Section */}
      <section className="py-12 bg-[#1B263B]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-300 mb-6">
            Whether you’re starting a business, seeking legal guidance, or looking 
            for digital transformation, Al Khaldi Law Firm is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
