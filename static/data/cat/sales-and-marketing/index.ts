import {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_SALES_AND_MARKETING_EXPERTS_CATEGORIES: TCatLayoutExpertCategory[] =
  [
    { name: "SEM Specialists", rate: 4.8, experts: ["", "", ""], path: "/" },
    { name: "SEO Specialists", rate: 4.8, experts: ["", "", ""], path: "/" },
    {
      name: "Social Media Managers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    { name: "Paid Media Experts", rate: 4.8, experts: ["", "", ""], path: "/" },
    { name: "Email Marketers", rate: 4.8, experts: ["", "", ""], path: "/" },
    { name: "Marketing Analysts", rate: 4.8, experts: ["", "", ""], path: "/" },
    {
      name: "Market Researchers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Sales Representatives",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
  ];

export const CAT_SALES_AND_MARKETING_SERVICES: TAccordionImageViewerItem[] = [
  {
    id: "1",
    title: "Social Media Management",
    description:
      "Grow your following on Facebook, Instagram, and LinkedIn with a full range of social media management services.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a14fc50c2616d26040_6037e4351262357f253d8423_Social_Media-Marketing_shutterstock_701002669-sm.jpeg",
  },
  {
    id: "2",
    title: "Lead Generation",
    description:
      "Develop robust prospect lists, nurture your leads, and grow your business with a full range of lead generation services.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a0813f94c8215a6650_6037e4c6432f57f6e8fa06ba_lead_generation_shutterstock_711609931-sm.jpeg",
  },
  {
    id: "3",
    title: "SEO",
    description:
      "Increase your traffic and search engine rankings with a suite of SEO services ranging from competitor analysis and keyword research to technical SEO.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a0f9cdce504154891e_6037e5b57675ceb8b8b42f77_SEO_photo-1600469984476-c713650f1b1b.jpeg",
  },
  {
    id: "4",
    title: "Facebook Advertising",
    description:
      "Grow your business with Facebook advertising services from expert marketers — from developing a robust strategy, to ad setup and campaign management.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca69fab8c9807add6f78a_5f063f40376553a6d51d5125_T3_FB_Advertising_Stephanie_D.png",
  },
  {
    id: "5",
    title: "Marketing Strategy",
    description:
      "Get a marketing blueprint for growth with expert consultation services, marketing audits, marketing plans, and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca69eab8c9806dcd6f786_6037e6786f31558688248c19_Marketing_Strategy_shutterstock_707850235-sm.jpeg",
  },
  {
    id: "6",
    title: "Video Marketing",
    description:
      "Captivate audiences and get results with video marketing services ranging from video promotion and distribution to video search engine optimization and consultation.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca69d1a63f046054ede9f_6037e70871cb6ee274a83716_Video_Marketing_shutterstock_1170107968-sm.jpeg",
  },
];

export const CAT_SALES_AND_MARKETING_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Brand Identity",
  "Logo Design",
  "Graphic Design",
];

export const CAT_SALES_AND_MARKETING_FREELANCER_CATEGORIES: ICatFreelancerCategory[] =
  [
    {
      title: "Sales & Marketing Roles",
      items: [
        { label: "Marketing Managers", path: "/" },
        { label: "Mobile Marketers", path: "/" },
        { label: "Copywriters", path: "/" },
        { label: "Sales Copywriters", path: "/" },
      ],
    },

    {
      title: "Cross-functional Roles",
      items: [
        { label: "Brand Strategists", path: "/" },
        { label: "Data Analysts", path: "/" },
        { label: "Marketing Managers", path: "/" },
        { label: "Content Strategists", path: "/" },
        { label: "Mobile Marketers", path: "/" },
        { label: "Web Developers", path: "/" },
        { label: "Sales Copywriters", path: "/" },
      ],
    },

    {
      title: "Sales & Marketing Projects",
      items: [
        { label: "Content Marketing Services", path: "/" },
        { label: "Marketing Services", path: "/" },
        { label: "Analytics & Strategy", path: "/" },
        { label: "Music Promotion", path: "/" },
        { label: "Email Marketing Services", path: "/" },
        { label: "Digital Marketing & PR", path: "/" },
        { label: "Other Marketing", path: "/" },
        { label: "Podcast Marketing", path: "/" },

        { label: "Influencer Marketing Services", path: "/" },
        { label: "Social Media Marketing", path: "/" },
        { label: "Video Marketing", path: "/" },
        { label: "Email Marketing", path: "/" },
        { label: "Lead Generation Services", path: "/" },
        { label: "Search Marketing", path: "/" },
        { label: "Lead Generation", path: "/" },
        { label: "Social Media Management", path: "/" },
      ],
    },
  ];
