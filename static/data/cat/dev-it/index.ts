import type {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_DEVELOPERS: TCatLayoutExpertCategory[] = [
  { name: "Java Developers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "PHP Developers", rate: 4.8, experts: ["", "", ""], path: "#" },
  {
    name: "JavaScript Developers",
    rate: 4.8,
    experts: ["", "", ""],
    path: "#",
  },
  { name: "iOS Developers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "QA Engineers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "Data Scientists", rate: 4.8, experts: ["", "", ""], path: "#" },
  {
    name: "Infrastructure Engineers",
    rate: 4.8,
    experts: ["", "", ""],
    path: "#",
  },
  { name: "SQL Developers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "Generative AI", rate: 4.8, experts: ["", "", ""], path: "#" },
];

export const CAT_DEVELOPER_SERVICES: TAccordionImageViewerItem[] = [
  {
    id: "1",
    title: "Mobile App Development",
    description:
      "A mobile presence is a necessity for any business. Get a custom mobile app experience that meets your needs.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/6083c31a1e503f9feea2c743_6037dd41158a857b3f7a659f_Mobile%20App%20Design.png",
  },
  {
    id: "2",
    title: "Shopify Development",
    description:
      "Start and grow your Shopify business with ecommerce development projects—from initial store setup to page-speed performance and security enhancements.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6aac2649a2a4bac1901_602417b72d00b61022f2aaee_Shopify%2520Development-Sarfraz%2520I..jpeg",
  },
  {
    id: "3",
    title: "WordPress Development",
    description:
      "Get a WordPress site built from scratch or improve stability, speed, and functionality of your existing site with these WordPress development projects.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6aa5b1b304a30e1c0dc_60241880a4a7e805f22f1a6a_WordPress-Development-Md.%2520Mojahidul%2520I..png",
  },
  {
    id: "4",
    title: "Data Visualization",
    description:
      "Bring your data to life with interactive dashboards, graphs, charts, infographics, and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a91dba1a4de62b773c_6037de09e14c6c786b358b58_Data%2520Vis.png",
  },
  {
    id: "5",
    title: "Machine Learning",
    description:
      "Create breakthrough results and drive operational growth with predictive models, NLP analysis, image detection, and more AI projects.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a8ab8c984429d6f797_603d6e2b55469ea04bd60477_shutterstock_618887135.jpeg",
  },
  {
    id: "6",
    title: "Cybersecurity & Data Protection",
    description:
      "Protect data and manage cybersecurity risks with penetration testing, vulnerability assessments, compliance audits, and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a7249985f99913f9eb_60241ade7cc3017818314d64_Cybersecurity_shutterstock_1669642384-smaller.jpeg",
  },
];

export const CAT_DEVELOPER_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Sketch",
  "Swift",
  "iOS Development",
  "Cocoa",
];

export const CAT_DEVELOPER_FREELANCER_CATEGORIES: ICatFreelancerCategory[] = [
  {
    title: "Development & IT Roles",
    items: [
      { label: "Developers", path: "#" },
      { label: "Web Developers", path: "#" },
      { label: "Mobile App Developers", path: "#" },
      { label: "Software Developers", path: "#" },
      { label: "Java Developers", path: "#" },
      { label: "Full Stack Developers", path: "#" },

      { label: "Python Developers", path: "#" },
      { label: "JavaScript Developers", path: "#" },
      { label: "HTML5 Developers", path: "#" },
      { label: "MySQL Developers", path: "#" },
      { label: "Vue JS Developers", path: "#" },
      { label: "DevOps Engineers", path: "#" },

      { label: "Golang Developers", path: "#" },
      { label: "Magento 2 Developers", path: "#" },
      { label: "iOS Developers", path: "#" },
      { label: "PHP Developers", path: "#" },
      { label: "Software Engineers", path: "#" },
      { label: "HTML Developers", path: "#" },

      { label: "Ruby on Rails Developers", path: "#" },
      { label: "Software QA Testers", path: "#" },
      { label: "CSS Developers", path: "#" },
      { label: "WordPress Developers", path: "#" },
      { label: "Shopify Developers", path: "#" },
      { label: "Front End Developers", path: "#" },

      { label: "Angular JS Developers", path: "#" },
      { label: "C++ Developers", path: "#" },
      { label: "React Native Developers", path: "#" },
      { label: "Rust Developers", path: "#" },
      { label: "Magento Developers", path: "#" },
      { label: "Ruby Developers", path: "#" },

      { label: "Scala Developers", path: "#" },
      { label: "C# Developers", path: "#" },
    ],
  },

  {
    title: "Cross-functional Roles",
    items: [
      { label: "AI & Machine Learning", path: "#" },
      { label: "Desktop Apps", path: "#" },
      { label: "Generative AI", path: "#" },
      { label: "Other Development & IT", path: "#" },
      { label: "Blockchain, NFT & Cryptocurrency", path: "#" },
      { label: "Development", path: "#" },

      { label: "Machine Learning", path: "#" },
      { label: "Web Programming", path: "#" },
      { label: "Chatbots", path: "#" },
      { label: "Ecommerce Development", path: "#" },
      { label: "Mobile Apps", path: "#" },
      { label: "Website Builders & CMS", path: "#" },

      { label: "Databases", path: "#" },
      { label: "Game Development", path: "#" },
      { label: "Online Coding Lessons", path: "#" },
      { label: "WordPress", path: "#" },
    ],
  },

  {
    title: "Development & IT Projects",
    items: [
      { label: "AI & Machine Learning", path: "#" },
      { label: "Desktop Apps", path: "#" },
      { label: "Other Development & IT", path: "#" },
      { label: "Blockchain, NFT & Cryptocurrency", path: "#" },
      { label: "Development", path: "#" },

      { label: "Machine Learning", path: "#" },
      { label: "Web Programming", path: "#" },
      { label: "Chatbots", path: "#" },
      { label: "Ecommerce Development", path: "#" },
      { label: "Mobile Apps", path: "#" },
      { label: "Website Builders & CMS", path: "#" },

      { label: "Databases", path: "#" },
      { label: "Game Development", path: "#" },
      { label: "Online Coding Lessons", path: "#" },
      { label: "WordPress", path: "#" },
    ],
  },
];
