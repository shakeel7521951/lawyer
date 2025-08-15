// components/FounderProfile.jsx
import { FaUserTie, FaBriefcase, FaGlobeAmericas } from "react-icons/fa";

export default function FounderProfile() {
  return (
    <section className="bg-gray-50 shadow-md p-6 rounded-2xl max-w-5xl mx-auto mt-6">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaUserTie className="text-blue-600" />
        Founder of Al-Khaldi Law Firm and Legal Consultations
      </h2>

      {/* Career Overview */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          He began his professional career in law in 2005 in the Legal Affairs
          Department at the Ministry of Civil Service and Housing - Ministry of
          Labor and Social Affairs - Ministry of Administrative Development,
          Labor and Social Affairs - Regulatory Authority for Charitable
          Activities.
        </p>

        <div className="flex items-start gap-3">
          <FaBriefcase className="text-blue-600 mt-1" />
          <p>
            He held many leadership positions, including (Head of the
            Legislation and Contracts Department - Head of the Legal Research
            and Studies Department - Head of the Cases and Investigations
            Department - Assistant Director of the Legal Affairs Department -
            Director of the Legal Affairs Department - Director of the
            International Cooperation Department - Director of the Supervision
            and Control Department).
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaGlobeAmericas className="text-blue-600 mt-1" />
          <p>
            He was a member of 22 legislative committees that amended and
            created most of the laws. He participated in committees (labor
            dispute resolution - human trafficking - women’s and children’s
            rights - international and humanitarian law) and represented the
            State of Qatar in regional and international forums (bilateral
            agreements committees - International Labor Organization - UPR
            Committee - Council of Human Rights).
          </p>
        </div>
      </div>
    </section>
  );
}
