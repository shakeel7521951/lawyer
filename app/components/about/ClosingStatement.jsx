// components/ClosingStatement.jsx
import { FaRegHandshake } from "react-icons/fa";

export default function ClosingStatement() {
  return (
    <section className="bg-white shadow-md p-6 rounded-2xl max-w-4xl mx-auto mt-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaRegHandshake className="text-blue-600" />
        Closing Statement
      </h2>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">
        We are committed to providing exceptional legal services with the
        highest standards of professionalism, integrity, and efficiency.  
        Our dedicated team works tirelessly to protect the interests of our
        clients, delivering practical solutions and effective representation
        in all legal matters.  
        We value the trust placed in us and strive to maintain it by
        consistently exceeding expectations.
      </p>
    </section>
  );
}
