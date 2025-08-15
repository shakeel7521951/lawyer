// components/WhyChooseUs.jsx
import { FaBalanceScale, FaGavel, FaLock } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="bg-white shadow-md p-6 rounded-2xl max-w-5xl mx-auto mt-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaBalanceScale className="text-blue-600" />
        Why Should You Choose Us?
      </h2>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Our office includes elite legal consultants and lawyers with expertise
        and comprehensive knowledge of all legalities. Their expertise covers
        all aspects of legal matters, including commercial, criminal, civil,
        corporate, investment, and family law. Furthermore, our lawyers are
        members of relevant professional associations locally, regionally, and
        internationally.
      </p>

      <div className="flex items-start gap-3 mb-4">
        <FaGavel className="text-blue-600 mt-1" />
        <p className="text-gray-700 leading-relaxed">
          Our lawyers specialize in litigation before all levels of the courts,
          from the courts of First Instance to the Supreme Court. Moreover,
          they possess expertise in resolving disputes at the Administrative,
          Labor, and Tenancy Dispute Settlement Committee, as well as the
          Arbitration Committee.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <FaLock className="text-blue-600 mt-1" />
        <p className="text-gray-700 leading-relaxed">
          Our commitment is to maintain professional ethics standards and
          confidentiality of information in dealing with our valued clients.
        </p>
      </div>
    </section>
  );
}
