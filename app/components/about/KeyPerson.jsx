// components/KeyPerson.jsx
import { FaUserShield } from "react-icons/fa";

export default function KeyPerson() {
  return (
    <section className="bg-white shadow-md p-6 rounded-2xl max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-2">
        <FaUserShield className="text-blue-600" />
        Lawyer / Saleh Ali Al-Khalidi
      </h2>
      <p className="text-gray-600 text-lg">CEO Founder</p>
    </section>
  );
}
