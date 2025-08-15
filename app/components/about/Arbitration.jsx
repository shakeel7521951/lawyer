// components/Arbitration.jsx
import { FaHandshake } from "react-icons/fa";

export default function Arbitration() {
  return (
    <section className="bg-white shadow-md p-6 rounded-2xl max-w-5xl mx-auto mt-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaHandshake className="text-blue-600" />
        Arbitration
      </h2>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">
        Arbitration is one of the most important dispute resolution methods
        in commercial, civil, and investment matters. It is a legal system
        based on the agreement of the parties to the dispute to refer it to
        one or more arbitrators who issue a binding decision.
        Our office offers professional arbitration services in accordance
        with Qatari and international laws. We represent clients in
        arbitration cases, prepare arbitration agreements, and provide
        consultations to ensure the best possible outcomes in arbitration
        proceedings.
      </p>
    </section>
  );
}
