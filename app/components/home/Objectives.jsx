import React from "react";

const objectivesData = [
  {
    id: 1,
    title: "Provide Expert Legal Guidance",
    description:
      "Deliver professional legal advice to clients, ensuring they understand their rights and options for informed decision-making.",
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Support Government Organizations",
    description:
      "Assist government bodies in legal matters, policy drafting, and contract management with full compliance to Qatari law.",
    icon: "🏛️",
  },
  {
    id: 3,
    title: "Empower Corporate Clients",
    description:
      "Offer strategic legal solutions for corporate clients, including mergers, compliance, and risk management.",
    icon: "💼",
  },
  {
    id: 4,
    title: "Serve Individual Customers",
    description:
      "Protect individual clients’ legal rights in civil, family, property, and personal dispute cases.",
    icon: "🧑‍💼",
  },
  {
    id: 5,
    title: "Promote Justice and Fairness",
    description:
      "Uphold ethical standards while advocating for justice, fairness, and equality in every case.",
    icon: "⚖️",
  },
];

const Objectives = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Objectives
        </h1>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold text-yellow-700">Al Khaldi Law Firm</span>, 
          our mission is to provide top-tier legal services, 
          ensuring trust, transparency, and success for every client.
        </p>
      </div>

      {/* Objectives Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {objectivesData.map((obj) => (
          <div
            key={obj.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{obj.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {obj.title}
            </h2>
            <p className="text-gray-600 text-sm">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
