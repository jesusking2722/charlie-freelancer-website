import {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_FINANCE_ACCOUNTING_EXPERTS_CATEGORIES: TCatLayoutExpertCategory[] =
  [
    { name: "Accountants", rate: 4.8, experts: ["", "", ""], path: "#" },
    {
      name: "Financial Analysts",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
    {
      name: "Interim CFOs",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
    {
      name: "Management Consultants",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
    {
      name: "Financial Modelers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
    {
      name: "Fundraising Consultants",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
    {
      name: "Tax Consultants",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
    {
      name: "Bookkeepers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "#",
    },
  ];

export const CAT_FINANCE_ACCOUNTING_SERVICES: TAccordionImageViewerItem[] = [
  {
    id: "1",
    title: "Financial Analysis",
    description:
      "Make informed business decisions with budget forecasting, KPI tracking, pricing analysis, and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6aed63369a8b8cf5ae4_5fc15e8c50c86b5bf35aa25e_analysis.png",
  },
  {
    id: "2",
    title: "Accounting & Bookkeeping",
    description:
      "Maintain accurate financial records and get prepared for tax season with accounting and bookkeeping services.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6afaca4e53f5369bf87_5fc15b70a45e317f7b1808a0_bookkeeping.png",
  },
  {
    id: "3",
    title: "Financial Forecasting & Modeling",
    description:
      "Increase decision making confidence with detailed financial models, scenario analysis, target forecasting and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6ad1ab19c2e2a260119_5fc161011e26538f18892a4c_analysis.png",
  },
  {
    id: "4",
    title: "Tax Consulting",
    description:
      "Confidently address your tax needs with thoughtful tax planning, preparation, and consulting services.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6aca35a42a3d23fe9a2_5fc16311a34dc46782c95e26_taxes.png",
  },
  {
    id: "5",
    title: "Financial Wealth Management",
    description:
      "Improve your long-term financial success with financial wealth management services ranging from planning to asset management.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6acc2649a78d4ac1905_5fc164a605e0e25d5b3e8674_finance.jpeg",
  },
];

export const CAT_FINANCE_ACCOUNTING_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Financial Analysis",
  "Financial Modeling",
  "Financial Forecasting",
  "Budgeting",
];

export const CAT_FINANCE_ACCOUNTING_FREELANCER_CATEGORIES: ICatFreelancerCategory[] =
  [
    {
      title: "Finance & Accounting Roles",
      items: [
        { label: "Accountants", path: "#" },
        { label: "Accounts Payable Managers", path: "#" },
        { label: "Bookkeepers", path: "#" },
        { label: "Intuit QuickBooks Specialists", path: "#" },

        { label: "Business Consultants", path: "#" },
        { label: "Civil Law Lawyers & Legal Professionals", path: "#" },
        { label: "Contract Law Lawyers & Legal", path: "#" },
        { label: "CPAs", path: "#" },

        { label: "Data Entry Specialists", path: "#" },
        { label: "Excel Experts", path: "#" },
        { label: "Financial Analysts", path: "#" },
        { label: "Financial Managers", path: "#" },

        { label: "Financial Reporting Analysts", path: "#" },
        { label: "Intellectual Property Law Professionals", path: "#" },
        { label: "Intuit TurboTax Specialists", path: "#" },
        { label: "Management Consultants", path: "#" },

        { label: "Payroll Processing Specialists", path: "#" },
        { label: "Project Managers", path: "#" },
        { label: "Legal Advisors", path: "#" },
        { label: "Business Analysts", path: "#" },

        { label: "Business Development Specialists", path: "#" },
        { label: "Financial Accountants", path: "#" },
        { label: "Financial Forecasting Specialists", path: "#" },
        { label: "Financial Modelers", path: "#" },

        { label: "Financial Reporting specialists", path: "#" },
        { label: "Tax Preparers", path: "#" },
        { label: "Forex Traders", path: "#" },
        { label: "Spreadsheet Experts", path: "#" },

        { label: "Financial Planners", path: "#" },
        { label: "Wave Accounting Specialists", path: "#" },
      ],
    },

    {
      title: "Cross-functional Roles",
      items: [
        { label: "Digital Marketers", path: "#" },
        { label: "Project Managers", path: "#" },
        { label: "Content Strategists", path: "#" },
        { label: "Full Stack Developers", path: "#" },

        { label: "Web Developers", path: "#" },
        { label: "Copywriters", path: "#" },
        { label: "Business Analysts", path: "#" },
        { label: "Wave Accounting specialists", path: "#" },

        { label: "Data Analysts", path: "#" },
        { label: "Legal Consultants", path: "#" },
        { label: "Quantitative Finance Professionals", path: "#" },
      ],
    },

    {
      title: "Finance & Accounting Projects",
      items: [
        { label: "Financial Consulting", path: "#" },
        { label: "Tax Consulting", path: "#" },
        { label: "Online Trading Lessons", path: "#" },
        { label: "Personal Finance & Wealth Management", path: "#" },

        { label: "Financial Forecasting & Modeling", path: "#" },
        { label: "Accounting & Bookkeeping", path: "#" },
        { label: "Other Financial Consulting", path: "#" },
      ],
    },
  ];
