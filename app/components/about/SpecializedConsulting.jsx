// components/SpecializedConsultingServices.jsx
import { FaSearch, FaBalanceScale, FaShieldAlt, FaMoneyBillWave, FaGavel, FaFileContract } from "react-icons/fa";

export default function SpecializedConsulting() {
  const services = [
    {
      icon: <FaSearch className="text-blue-600 text-xl" />,
      title: "Research into irregularities, management, and job fraud",
      points: [
        "Assessing and reviewing controls in the field of financial crimes and providing recommendations to enhance preventive measures.",
        "Preparing anti-job fraud programs for institutions, including policies, procedures, and codes of conduct."
      ]
    },
    {
      icon: <FaBalanceScale className="text-blue-600 text-xl" />,
      title: "Regulatory Compliance Consultations",
      points: [
        "Consulting in the field of compliance with the requirements of laws and regulations.",
        "Evaluating the compliance system in companies and providing recommendations to improve the system.",
        "Preparing compliance policies and procedures.",
        "Assisting in setting up compliance management, tasks setting, and employee training."
      ]
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-xl" />,
      title: "Risk Management Consultations",
      points: [
        "Preparation of risk policy and procedures.",
        "Evaluating the risk management system in companies and providing recommendations to improve the system.",
        "Assisting in identifying risks and preparing (determination - analysis - evaluation - development of control tools) for risks.",
        "Setting up a corporate risk management system."
      ]
    },
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-xl" />,
      title: "Combating Illicit Financing Consultations",
      points: [
        "Evaluating the anti-money laundering and terrorist financing system and providing recommendations to improve the system.",
        "Preparing policies and procedures for illicit financing."
      ]
    },
    {
      icon: <FaGavel className="text-blue-600 text-xl" />,
      title: "Governance Consultations",
      points: [
        "Preparing governance policies and procedures.",
        "Evaluating the corporate governance system.",
        "Setting up a corporate governance system."
      ]
    },
    {
      icon: <FaFileContract className="text-blue-600 text-xl" />,
      title: "Specialized department in the execution of civil judgments and debt collection",
      points: [
        "Execution of civil judgments and debt collection in all sectors."
      ]
    }
  ];

  return (
    <section className="bg-white shadow-md p-6 rounded-2xl max-w-6xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaGavel className="text-blue-600" />
        Specialized Consulting Services
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2">
              {service.icon}
              <h3 className="font-semibold text-gray-800">{service.title}</h3>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
