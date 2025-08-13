"use client";
import Link from "next/link";

export default function AboutContact() {
  return (
    <main className=" ">
    

      {/* Contact CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold  mb-4">
            Let’s Work Together
          </h2>
          <p className=" font-semibold text-[#9f8660] mb-6">
            Whether you’re starting a business, seeking legal guidance, or looking 
            for digital transformation, Al Khaldi Law Firm is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#9f8660] to-[#c0b688]  font-semibold rounded-lg  transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
