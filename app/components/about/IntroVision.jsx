// components/IntroVision.jsx
import { FaHandshake, FaEye } from "react-icons/fa";

export default function IntroVision() {
  return (
    <section className="space-y-8 max-w-5xl mx-auto mt-6">
      {/* Introduction */}
      <div className="bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaHandshake className="text-blue-600" />
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We at our office are proud to provide the highest quality legal
          services to companies, governmental institutions, and individuals,
          which contributes to building a strong and long-term relationship
          based on mutual trust. We spare no efforts to provide the best legal
          services to achieve optimal outcomes, with our guarantee to protect
          your legal rights and interests.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-gray-50 shadow-md p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaEye className="text-blue-600" />
          Vision
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our office aspires to enhance its position as a legal institution
          within the Qatari and international community. We aim to gain the
          trust and satisfaction of our clients by adhering to principles of
          quality and professionalism in service delivery. We strive for
          excellence in our work, breaking away from traditional legal
          practices. Our innovative approach aligns with technological and
          societal advancements, with a core focus on effective legal support
          for clients in their daily actions and transactions, thereby promoting
          legal awareness for all.
        </p>
      </div>
    </section>
  );
}
