import {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_LEGAL_EXPERTS_CATEGORIES: TCatLayoutExpertCategory[] = [
  {
    name: "Contract Law Professionals",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Corporate Law Professionals",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Employment & Labor Law Professionals",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Intellectual Property Law Professionals",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Legal Researchers",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Paralegals",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Tax Law Professionals",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
  {
    name: "Regulatory Compliance Specialists",
    rate: 4.8,
    experts: ["", "", ""],
    path: "/",
  },
];

export const CAT_LEGAL_SERVICES: TAccordionImageViewerItem[] = [
  {
    id: "1",
    title: "Legal Consulting",
    description: "Get advice on all things legal.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60c99140be79a843fe39dc01_image_large%20(6).jpg",
  },
  {
    id: "2",
    title: "Trademark Registration",
    description:
      "Protect your IP with a legal professional who’ll guide you through trademark searches, applications, and registration across just about every territory on the planet.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60b9b9913f16e40117e688d0_609641d79f570c8ec2e1fb44_2_postajob%402x.jpeg",
  },
  {
    id: "3",
    title: "Legal Writing",
    description: "Create wills, contracts, NDAs, and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60c9922a1a50abc349226169_image_large%20(10).jpg",
  },
  {
    id: "4",
    title: "Documentation & Contract Review",
    description:
      "Get an expert to cut through the legal jargon and give you a crystal clear opinion on exactly what you’re signing up for.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60c9925c82dffe3e8a8de859_image_large%20(11).jpg",
  },
  {
    id: "5",
    title: "Legal Translation",
    description:
      "Have any kind of legal documents translated from and into any language you like, with experts who know that every single word matters.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60c993321a50ab9d6c226538_image_large%20(12).jpg",
  },
];

export const CAT_LEGAL_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Business & Corporate Law",
  "Limited Liability Company",
  "Partnership Agreements",
];

export const CAT_LEGAL_FREELANCER_CATEGORIES: ICatFreelancerCategory[] = [
  {
    title: "Legal Roles",
    items: [
      { label: "Arbitration Law Professionals", path: "/" },
      { label: "Employment Law Professionals", path: "/" },
      { label: "Intellectual Property Law Professionals", path: "/" },
      { label: "Medical Law Professionals", path: "/" },

      { label: "Contract Drafters", path: "/" },
      { label: "Environmental Law Professionals", path: "/" },
      { label: "International Law Professionals", path: "/" },
      { label: "Patent Law Professionals", path: "/" },

      { label: "Corporate Law Professionals", path: "/" },
      { label: "Family Law Professionals", path: "/" },
      { label: "Legal Assistants", path: "/" },
      { label: "Real Estate Law Professionals", path: "/" },

      { label: "Criminal Law Professionals", path: "/" },
      { label: "Immigration Law Professionals", path: "/" },
      { label: "Legal Consultants", path: "/" },
      { label: "Tax Law Professionals", path: "/" },
    ],
  },

  {
    title: "Cross-functional Roles",
    items: [
      { label: "Legal Transcriptionist", path: "/" },
      { label: "Legal Translators", path: "/" },
      { label: "Section 508 Compliance Specialists", path: "/" },
      { label: "Legal Writers", path: "/" },

      { label: "Property Tax Specialists", path: "/" },
      { label: "GDPR Freelancers", path: "/" },
      { label: "Management Consultants", path: "/" },
      { label: "Legal Researchers", path: "/" },

      { label: "Fraud Analysts", path: "/" },
      { label: "Legal Assistants", path: "/" },
      { label: "Legal Consultants", path: "/" },
    ],
  },

  {
    title: "Legal Projects",
    items: [
      { label: "Translation Services", path: "/" },
      { label: "Contracts & Agreement Writing", path: "/" },
      { label: "Privay Policy Writing", path: "/" },
      { label: "Terms of Service Writing", path: "/" },

      { label: "Business & Corporate Legal Consulting", path: "/" },
      { label: "Intellectual Property Consulting", path: "/" },
      { label: "Tax Legal Consulting", path: "/" },
      { label: "Commercial Legal Consulting", path: "/" },

      { label: "Legal Assistance", path: "/" },
      { label: "Cybersecurity & Data Protection Services", path: "/" },
      { label: "Virtual Assistant Services", path: "/" },
      { label: "See all projects", path: "/" },
    ],
  },
];
