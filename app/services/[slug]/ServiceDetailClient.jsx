"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceDetail from "../../components/services/ServiceDetail";

export default function ServiceDetailClient({ servicesData }) {
  const { t } = useTranslation("home/home");

  const translated = {
    "corporate-services": {
      id: "corporate-services",
      title: "Corporate Services",
      subtitle: "Business Legal Solutions",
      description:
        "Comprehensive legal services for corporations including company incorporation, intellectual property protection, foreign investments, governance consultations, tax law advice, and commercial dispute resolution.",
      category: "Business",
      image: "/about/corporate.jpeg",
      heroImage: "/corporates.jpg",
      overview:
        "Our corporate legal services are designed to support businesses of all sizes, from startups to multinational corporations. We provide end-to-end legal solutions that ensure your business operates within legal frameworks while maximizing growth opportunities.",
      services: [
        {
          title: "Company Incorporation",
          description:
            "Providing legal consultations for the incorporation of companies across the GCC region with complete compliance support.",
          features: [
            "Business registration",
            "Legal structure setup",
            "Compliance documentation",
            "Regulatory approvals",
          ],
        },
        {
          title: "Intellectual Property Protection",
          description:
            "Providing consultations on the protection of intellectual property rights, patents, trademarks, copyrights, and others.",
          features: [
            "Patent applications",
            "Trademark registration",
            "Copyright protection",
            "IP litigation support",
          ],
        },
        {
          title: "Foreign Investments & Subsidiaries",
          description:
            "Providing legal consultations on the company's foreign investments and setting up subsidiaries abroad.",
          features: [
            "Investment structuring",
            "Cross-border transactions",
            "Subsidiary establishment",
            "Regulatory compliance",
          ],
        },
        {
          title: "Governance & Transparency",
          description:
            "Providing consultations on the best practices for governance and transparency in corporate operations.",
          features: [
            "Corporate governance frameworks",
            "Board advisory",
            "Compliance programs",
            "Risk management",
          ],
        },
        {
          title: "Tax Law Consultations",
          description:
            "Providing legal consultations on tax laws for the company to ensure compliance and optimization.",
          features: [
            "Tax planning",
            "Compliance review",
            "Tax dispute resolution",
            "International tax matters",
          ],
        },
        {
          title: "Commercial Litigation",
          description:
            "Providing legal representation before all levels of courts for commercial disputes, involving the creation of defense memoranda and lawsuit pleadings.",
          features: [
            "Court representation",
            "Dispute resolution",
            "Contract litigation",
            "Commercial arbitration",
          ],
        },
        {
          title: "Contract Drafting & Review",
          description:
            "Preparing and drafting commercial contracts and agreements in both Arabic and English languages.",
          features: [
            "Commercial agreements",
            "Partnership contracts",
            "Merger & acquisition agreements",
            "Employment contracts",
          ],
        },
        {
          title: "Financial & Banking Support",
          description:
            "Preparing financing contracts for financial institutions and providing comprehensive banking legal support.",
          features: [
            "Loan agreements",
            "Banking contracts",
            "Financial compliance",
            "Investment documentation",
          ],
        },
      ],
      benefits: [
        "Expert legal guidance for business operations",
        "Comprehensive compliance support",
        "Risk mitigation strategies",
        "Growth-oriented legal solutions",
        "International business support",
        "Multi-jurisdictional expertise",
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description:
            "We begin with a comprehensive consultation to understand your business needs and legal requirements.",
        },
        {
          step: 2,
          title: "Legal Assessment",
          description:
            "Our team conducts a thorough legal assessment of your business structure and compliance status.",
        },
        {
          step: 3,
          title: "Strategy Development",
          description:
            "We develop a customized legal strategy that aligns with your business objectives and growth plans.",
        },
        {
          step: 4,
          title: "Implementation",
          description:
            "We execute the legal strategy with precision, ensuring all documentation and compliance requirements are met.",
        },
        {
          step: 5,
          title: "Ongoing Support",
          description:
            "We provide continuous legal support to ensure your business remains compliant and protected.",
        },
      ],
    },
    "government-services": {
      id: "government-services",
      title: "Government & Quasi-Government Services",
      subtitle: "Public Sector Legal Excellence",
      description:
        "Specialized legal counsel for government institutions including legislative consultations, governance practices, regulatory compliance, tendering procedures, and institutional dispute resolution.",
      category: "Public Sector",
      image: "/about/govt.jpeg",
      heroImage: "/semi-gov.jpg",
      overview:
        "Our government services are tailored to meet the unique needs of public sector institutions. We provide specialized legal counsel that ensures compliance with regulatory frameworks while supporting efficient government operations.",
      services: [
        {
          title: "Legislative Consultations",
          description:
            "Providing legal consultations on the latest developments in relevant legislation and regulatory frameworks.",
          features: [
            "Legislative drafting",
            "Regulatory analysis",
            "Policy development",
            "Legal compliance review",
          ],
        },
        {
          title: "Governance & Transparency",
          description:
            "Providing consultations on best practices for governance and transparency in government institutions.",
          features: [
            "Governance frameworks",
            "Transparency protocols",
            "Accountability systems",
            "Public sector ethics",
          ],
        },
        {
          title: "Regulatory Compliance",
          description:
            "Providing legal consultations in dealing with inquiries from regulatory bodies, such as the Audit Bureau and administrative investigation committees.",
          features: [
            "Regulatory compliance",
            "Audit support",
            "Investigation assistance",
            "Risk management",
          ],
        },
        {
          title: "Government Tendering & Bidding",
          description:
            "Ensuring legal compliance by providing legal consultations, reviewing, and auditing government tendering and bidding procedures.",
          features: [
            "Tender documentation",
            "Bidding process review",
            "Compliance auditing",
            "Procurement law",
          ],
        },
        {
          title: "Asset Investment Consultations",
          description:
            "Providing legal consultations on investing assets by government institutions with regulatory compliance.",
          features: [
            "Investment strategies",
            "Asset management",
            "Regulatory compliance",
            "Due diligence",
          ],
        },
        {
          title: "Policy & Regulation Drafting",
          description:
            "Ensuring compliance with legislation in force by reviewing and drafting executive regulations and internal policies of institutions.",
          features: [
            "Policy drafting",
            "Regulatory frameworks",
            "Internal procedures",
            "Compliance protocols",
          ],
        },
        {
          title: "International Agreements",
          description:
            "Preparation of drafts of judicial and international agreements and human resources regulations of the institution.",
          features: [
            "International treaties",
            "Bilateral agreements",
            "Diplomatic protocols",
            "Cross-border legal matters",
          ],
        },
        {
          title: "Institutional Litigation",
          description:
            "Providing legal representation before all courts in institutional disputes, including drafting defense memoranda and lawsuit pleadings.",
          features: [
            "Court representation",
            "Administrative litigation",
            "Dispute resolution",
            "Legal advocacy",
          ],
        },
      ],
      benefits: [
        "Specialized public sector expertise",
        "Regulatory compliance assurance",
        "Transparent governance support",
        "Risk mitigation for institutions",
        "International legal cooperation",
        "Administrative efficiency enhancement",
      ],
      process: [
        {
          step: 1,
          title: "Institutional Assessment",
          description:
            "We conduct a comprehensive assessment of your institution's legal needs and regulatory environment.",
        },
        {
          step: 2,
          title: "Compliance Review",
          description:
            "Our team reviews current compliance status and identifies areas for improvement or risk mitigation.",
        },
        {
          step: 3,
          title: "Legal Framework Development",
          description:
            "We develop customized legal frameworks that ensure compliance and support institutional objectives.",
        },
        {
          step: 4,
          title: "Implementation Support",
          description:
            "We provide hands-on support during implementation, ensuring smooth transition and compliance.",
        },
        {
          step: 5,
          title: "Ongoing Advisory",
          description:
            "We offer continuous legal advisory services to maintain compliance and address emerging issues.",
        },
      ],
    },
    "individual-services": {
      id: "individual-services",
      title: "Individual Customer Services",
      subtitle: "Personal Legal Protection",
      description:
        "Comprehensive personal legal services covering family law, criminal and civil cases, business incorporation, bankruptcy assistance, immigration matters, and personal legal protection.",
      category: "Personal Legal",
      image: "/about/individual.jpeg",
      heroImage: "/individuals.jpg",
      overview:
        "Our individual services are designed to protect and support individuals through various legal challenges. We provide personalized legal solutions that address your specific needs with compassion and expertise.",
      services: [
        {
          title: "Family & Criminal Law",
          description:
            "Providing legal consultations for all kinds of civil, criminal, and family cases with expert representation.",
          features: [
            "Family dispute resolution",
            "Criminal defense",
            "Civil litigation",
            "Mediation services",
          ],
        },
        {
          title: "Business Incorporation",
          description:
            "Providing legal consultations in incorporation and managing sole proprietorships for individuals.",
          features: [
            "Business registration",
            "Sole proprietorship setup",
            "Legal compliance",
            "Regulatory guidance",
          ],
        },
        {
          title: "Bankruptcy & Financial Settlements",
          description:
            "Providing assistance and legal consultations for individuals facing bankruptcy and financial settlements.",
          features: [
            "Debt restructuring",
            "Bankruptcy proceedings",
            "Financial mediation",
            "Creditor negotiations",
          ],
        },
        {
          title: "Intellectual Property",
          description:
            "Providing legal consultations on intellectual property law and patents for individual inventors and creators.",
          features: [
            "Patent applications",
            "Trademark registration",
            "Copyright protection",
            "IP enforcement",
          ],
        },
        {
          title: "Labor Law Issues",
          description:
            "Providing legal assistance and consultations for labor-related issues such as compensation claims and disputes related to employment termination.",
          features: [
            "Employment disputes",
            "Compensation claims",
            "Labor rights",
            "Workplace mediation",
          ],
        },
        {
          title: "Immigration & Visa Services",
          description:
            "Providing consultations on visa and residency applications for studying or working abroad.",
          features: [
            "Visa applications",
            "Residency permits",
            "Immigration compliance",
            "Documentation support",
          ],
        },
        {
          title: "Consumer Protection",
          description:
            "Providing consultation regarding consumer protection laws and defective services.",
          features: [
            "Consumer rights",
            "Product liability",
            "Service disputes",
            "Compensation claims",
          ],
        },
        {
          title: "Estate Planning",
          description:
            "Drafting wills, estates, and inheritance cases, and assisting in resolving any disputes to reach satisfactory solutions.",
          features: [
            "Will drafting",
            "Estate planning",
            "Inheritance disputes",
            "Succession planning",
          ],
        },
        {
          title: "Personal Legal Representation",
          description:
            "Representation at all types of civil, criminal, commercial, labor, family, arbitration, leasing, and labor dispute resolution committees and before all levels of courts.",
          features: [
            "Court representation",
            "Legal advocacy",
            "Dispute mediation",
            "Legal consultation",
          ],
        },
      ],
      benefits: [
        "Personalized legal attention",
        "Comprehensive individual protection",
        "Expert family law guidance",
        "Immigration support",
        "Financial legal assistance",
        "Consumer rights protection",
      ],
      process: [
        {
          step: 1,
          title: "Personal Consultation",
          description:
            "We begin with a confidential consultation to understand your personal legal situation and concerns.",
        },
        {
          step: 2,
          title: "Case Assessment",
          description:
            "Our team conducts a thorough assessment of your case and explains your legal options.",
        },
        {
          step: 3,
          title: "Legal Strategy",
          description:
            "We develop a personalized legal strategy that best serves your interests and objectives.",
        },
        {
          step: 4,
          title: "Legal Action",
          description:
            "We take appropriate legal action on your behalf, keeping you informed throughout the process.",
        },
        {
          step: 5,
          title: "Resolution & Follow-up",
          description:
            "We work towards resolution and provide follow-up support to ensure your interests are protected.",
        },
      ],
    },
    "legal-support": {
      id: "legal-support",
      title: "Legal Support Services",
      subtitle: "Specialized Legal Framework",
      description:
        "Full-spectrum legal support including banking legal services, arbitration, risk management consultations, anti-money laundering compliance, governance consultations, and debt collection services.",
      category: "Specialized Support",
      image: "/about/legalsprt.jpeg",
      heroImage: "/about/ab4.jpeg",
      overview:
        "Our legal support services provide specialized expertise in complex legal areas that require advanced knowledge and experience. We offer comprehensive support for banking, compliance, and specialized legal matters.",
      services: [
        {
          title: "Banking Legal Services",
          description:
            "Providing all legal and advisory services to all banks through communicating with customers for the purpose of finding solutions and collecting amounts for the benefit of banks.",
          features: [
            "Banking contracts",
            "Loan agreements",
            "Debt collection",
            "Financial compliance",
          ],
        },
        {
          title: "Arbitration Services",
          description:
            "The office has a specialized work team and certified arbitrators who provide all services related to arbitration inside and outside the State of Qatar.",
          features: [
            "Domestic arbitration",
            "International arbitration",
            "Dispute resolution",
            "Mediation services",
          ],
        },
        {
          title: "Risk Management",
          description:
            "Preparation of risk policy and procedures, evaluating the risk management system in companies and providing recommendations to improve the system.",
          features: [
            "Risk assessment",
            "Policy development",
            "System evaluation",
            "Compliance frameworks",
          ],
        },
        {
          title: "Anti-Money Laundering",
          description:
            "Evaluating the anti-money laundering and terrorist financing system and providing recommendations to improve the system.",
          features: [
            "AML compliance",
            "System evaluation",
            "Policy preparation",
            "Regulatory compliance",
          ],
        },
        {
          title: "Corporate Governance",
          description:
            "Preparing governance policies and procedures, evaluating the corporate governance system, and setting up a corporate governance system.",
          features: [
            "Governance frameworks",
            "Policy development",
            "System setup",
            "Compliance monitoring",
          ],
        },
        {
          title: "Compliance Management",
          description:
            "Consulting in the field of compliance with the requirements of laws and regulations, evaluating the compliance system in companies.",
          features: [
            "Regulatory compliance",
            "System evaluation",
            "Policy preparation",
            "Training programs",
          ],
        },
        {
          title: "Fraud Investigation",
          description:
            "Research into irregularities, management, and job fraud, assessing and reviewing controls in the field of financial crimes.",
          features: [
            "Fraud investigation",
            "Financial crime assessment",
            "Control review",
            "Prevention programs",
          ],
        },
        {
          title: "Debt Collection",
          description:
            "Specialized department in the execution of civil judgments and debt collection in all sectors.",
          features: [
            "Judgment execution",
            "Debt recovery",
            "Legal collection",
            "Asset recovery",
          ],
        },
      ],
      benefits: [
        "Specialized legal expertise",
        "Compliance assurance",
        "Risk mitigation",
        "Professional arbitration",
        "Advanced legal solutions",
        "Comprehensive support",
      ],
      process: [
        {
          step: 1,
          title: "Specialized Assessment",
          description:
            "We conduct a specialized assessment of your legal support needs and compliance requirements.",
        },
        {
          step: 2,
          title: "Expert Analysis",
          description:
            "Our specialized team analyzes your situation using advanced legal frameworks and methodologies.",
        },
        {
          step: 3,
          title: "Custom Solution",
          description:
            "We develop customized legal solutions that address your specific specialized legal needs.",
        },
        {
          step: 4,
          title: "Implementation",
          description:
            "We implement the solution with precision, ensuring all specialized requirements are met.",
        },
        {
          step: 5,
          title: "Ongoing Support",
          description:
            "We provide ongoing specialized support to maintain compliance and address emerging issues.",
        },
      ],
    },
  };

  return <ServiceDetail serviceData={translated} />;
}
