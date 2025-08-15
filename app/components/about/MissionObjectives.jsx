// components/MissionObjectives.jsx
import { FaBullseye, FaFlagCheckered } from "react-icons/fa";

export default function MissionObjectives() {
  return (
    <section className="space-y-8 max-w-5xl mx-auto mt-6">
      {/* Mission */}
      <div className="bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaBullseye className="text-blue-600" />
          Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our office is committed to providing legal services based on
          sufficient professional expertise and high academic competence. From
          the office founder to the latest employee, we ensure a team of legal
          scholars specializing in various fields, including civil and
          commercial transactions, criminal disputes, family matters, banking
          and electronic transactions, international cases, and more. Our goal
          is to offer legal consultations and solutions grounded in scientific
          knowledge and prior professional accumulations, fulfilling the
          client’s objectives for the required legal service. Additionally, we
          embrace new methods in our tasks to suit the current scientific and
          societal progress, while adhering to applicable laws and regulations.
        </p>
      </div>

      {/* Objectives */}
      <div className="bg-gray-50 shadow-md p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaFlagCheckered className="text-blue-600" />
          Objectives
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We strive to etch our name in the legal arena by meticulously
          establishing an entity rooted in sound legal practice, respecting
          laws and institutions, and executing the vision of His Highness the
          Amir of the State. Our professionalism in client services is achieved
          through complete competence, experience, and unwavering credibility.
          We expedite legal and judicial procedures without compromising service
          quality. Furthermore, we engage with our local environment by
          understanding community needs and providing legal assistance to those
          in need. On an international scale, we broaden our client base and
          expand our practice to a wider geographic scope.
        </p>
      </div>
    </section>
  );
}
