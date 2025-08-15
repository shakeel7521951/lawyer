// components/ServicesSection.jsx
import {
  FaBuilding,
  FaLandmark,
  FaUser,
  FaUniversity,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Our Services Provided to Corporations",
    icon: <FaBuilding className="text-blue-600" />,
    bg: "bg-white",
    points: [
      "Providing legal consultations for the incorporation of companies.",
      "Providing consultations on the protection of intellectual property rights, patents, trademarks, copyrights, and others.",
      "Providing legal consultations on the company’s foreign investments and setting up subsidiaries abroad.",
      "Providing consultations on the best practices for governance and transparency.",
      "Providing legal consultations on tax laws for the company.",
      "Providing legal representation before all levels of courts for commercial disputes, involving the creation of defense memoranda and lawsuit pleadings.",
      "Preparing company policies and internal regulations to ensure legal compliance with regulatory and governmental authorities.",
      "Preparing and drafting commercial contracts and agreements in both Arabic and English languages.",
      "Preparing financing contracts for financial institutions.",
      "Drafting memoranda of understanding and agreements for companies.",
      "Preparing and drafting partnership, merger, and acquisition agreements with other companies.",
      "Preparing and drafting lease contracts.",
      "Preparing and drafting employment contracts.",
    ],
  },
  {
    title: "Our Services Provided to Government & Quasi-Government Institutions",
    icon: <FaLandmark className="text-blue-600" />,
    bg: "bg-gray-50",
    points: [
      "Providing legal consultations on the latest developments in relevant legislation.",
      "Providing consultations on best practices for governance and transparency.",
      "Providing legal consultations in dealing with inquiries from regulatory bodies, such as the Audit Bureau and administrative investigation committees.",
      "Ensuring legal compliance by providing legal consultations, reviewing, and auditing government tendering and bidding procedures.",
      "Providing legal consultations on investing assets by government institutions.",
      "Ensuring compliance with legislation in force by reviewing and drafting executive regulations and internal policies of institutions.",
      "Preparing and reviewing draft contracts and agreements with entities and contracting parties with the institution.",
      "Preparing drafts of judicial and international agreements and human resources regulations of the institution.",
      "Preparing and drafting real estate lease contracts.",
      "Representation for attending regular meetings with the institution’s legal management team to provide necessary consultations.",
      "Providing legal representation before all courts in institutional disputes, including drafting defense memoranda and lawsuit pleadings.",
      "Representation before the arbitration tribunals and offering advice on best settling legal disputes through alternative dispute resolutions.",
    ],
  },
  {
    title: "Our Services Provided to Individuals",
    icon: <FaUser className="text-blue-600" />,
    bg: "bg-white",
    points: [
      "Providing legal consultations for all kinds of civil, criminal, and family cases.",
      "Providing legal consultations in incorporation and managing sole proprietorships.",
      "Providing assistance and legal consultations for individuals facing bankruptcy and financial settlements.",
      "Providing legal consultations on intellectual property law and patents.",
      "Providing legal assistance and consultations for labor-related issues such as compensation claims and disputes related to employment termination.",
      "Providing consultations on visa and residency applications for studying or working abroad.",
      "Providing consultation regarding consumer protection laws and defective services.",
      "Providing comprehensive legal consultations for expats about their properties and investments inside the state.",
      "Preparing and drafting residential and commercial lease contracts to ensure that both parties are protected.",
      "Reviewing and drafting personal contracts and agreements to guarantee your rights.",
      "Collection of outstanding debts from either individuals or companies.",
      "Drafting wills, estates, and inheritance cases, and assisting in resolving any disputes to reach satisfactory solutions.",
      "Representation at all types of civil, criminal, commercial, labor, family, arbitration, leasing, and labor dispute resolution committees and before all levels of courts.",
      "Legal representation for criminal cases at the Public Prosecution, during the investigation stages, and during trials.",
      "Legal representation is essential when seeking compensation for accidents, physical and moral damages, and aiding in dispute settlement procedures with insurance companies or others.",
    ],
  },
  {
    title: "Banking Services",
    icon: <FaUniversity className="text-blue-600" />,
    bg: "bg-gray-50",
    intro:
      "Providing all legal and advisory services to all banks through communicating with customers (Individuals/Companies) for the purpose of finding solutions and collecting amounts for the benefit of banks inside and outside the State of Qatar.",
    points: [
      "Drafting and editing all types of banking contracts and agreements such as loan contracts, mortgages, and banking service contracts.",
      "Representing banks in cases and lawsuits in various banking issues such as non-performing loans and contractual disputes.",
      "Providing legal advice in mergers and acquisitions between banks, and providing the necessary legal support at all stages of the process.",
      "Representing banks in arbitration procedures and amicable settlement of various banking disputes.",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="space-y-8 max-w-6xl mx-auto mt-6">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`${service.bg} shadow-md p-6 rounded-2xl`}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            {service.icon}
            {service.title}
          </h2>
          {service.intro && (
            <p className="text-gray-700 leading-relaxed mb-4">
              {service.intro}
            </p>
          )}
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {service.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
