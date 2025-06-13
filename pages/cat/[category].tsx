import { CatLayout } from "@/components/templates";
import { useRouter } from "next/router";
import type {
  TCatLayoutExpert,
  TCatLayoutFreelancerCategory,
  TCatLayoutIntro,
  TCatLayoutProfessionals,
  TCatLayoutProjectOverview,
  TCatLayoutService,
} from "@/components/templates/CatLayout";

// Intro Images
import DevIntroImage from "@/public/assets/webps/cat/dev-it/intro.webp";
import DesignCreativeIntroImage from "@/public/assets/webps/cat/design-creative/intro.webp";
import SalesAndMarketingIntroImage from "@/public/assets/webps/cat/sale-and-marketing/intro.webp";
import AdminCustomerSupportIntroImage from "@/public/assets/webps/cat/admin-customer-support/intro.webp";
import WritingTranslationIntroImage from "@/public/assets/webps/cat/writing-translation/intro.webp";

import {
  CAT_DEVELOPER_SERVICES,
  CAT_DEVELOPERS,
  CAT_DEVELOPER_PROJECT_OVERVIEW_SKILLS,
  CAT_DEVELOPER_FREELANCER_CATEGORIES,
} from "@/static/data/cat/dev-it";
import {
  CAT_DESIGN_FREELANCER_CATEGORIES,
  CAT_DESIGN_PROJECT_OVERVIEW_SKILLS,
  CAT_DESIGNE_SERVICES,
  CAT_DESIGNERS,
} from "@/static/data/cat/design-creative";

// Project Overview Images
import DevProjectOverviewImage from "@/public/assets/jpgs/cat/dev-it/dev_project_overview.jpg";
import DesignProjectOverviewImage from "@/public/assets/pngs/cat/design-creative/project_overview.png";
import SalesAndMarketingProjectOverviewImage from "@/public/assets/jpgs/cat/sales-and-marketing/project_overview.jpg";
import AdminCustomerSupportProjectOverviewImage from "@/public/assets/jpgs/cat/admin-customer-support/project_overview.jpg";
import WritingTranslationProjectOverviewImage from "@/public/assets/pngs/cat/writing-translation/project_overview.png";

import { IExpandableText, TSEO } from "@/types/components.types";
import {
  DevConnectionMethodsFaq,
  DevHiringBenefitsFaq,
  HiringDevCostIntroFaq,
} from "@/components/templates/CatLayout/Faqs/DeveloperFaqs";
import {
  DesignCreativeConnectionMethodsFaq,
  DesignCreativeHiringBenefitsFaq,
  HiringDesignCostIntroFaq,
} from "@/components/templates/CatLayout/Faqs/DesignCreativeFaqs";
import { getMonthName } from "@/utils/date";
import {
  CAT_SALES_AND_MARKETING_EXPERTS_CATEGORIES,
  CAT_SALES_AND_MARKETING_FREELANCER_CATEGORIES,
  CAT_SALES_AND_MARKETING_PROJECT_OVERVIEW_SKILLS,
  CAT_SALES_AND_MARKETING_SERVICES,
} from "@/static/data/cat/sales-and-marketing";
import {
  HiringSalesMarketingCostIntroFaq,
  SalesMarketingConnectionMethodsFaq,
  SalesMarketingHiringBenefitsFaq,
} from "@/components/templates/CatLayout/Faqs/SalesMarketingFaqs";
import {
  CAT_ADMIN_CUSTOMER_SUPPORT_EXPERTS_CATEGORIES,
  CAT_ADMIN_CUSTOMER_SUPPORT_FREELANCER_CATEGORIES,
  CAT_ADMIN_CUSTOMER_SUPPORT_PROFESSIONALS,
  CAT_ADMIN_CUSTOMER_SUPPORT_PROJECT_OVERVIEW_SKILLS,
  CAT_ADMIN_CUSTOMER_SUPPORT_SERVICES,
} from "@/static/data/cat/admin-customer-support";
import {
  AdminCustomerSupportConnectionMethodsFaq,
  AdminCustomerSupportHiringBenefitsFaq,
  HiringAdminCustomerSupportCostIntroFaq,
} from "@/components/templates/CatLayout/Faqs/AdminCustomerSupportFaqs";
import {
  CAT_WRITING_TRANSLATION_EXPERTS_CATEGORIES,
  CAT_WRITING_TRANSLATION_FREELANCER_CATEGORIES,
  CAT_WRITING_TRANSLATION_PROJECT_OVERVIEW_SKILLS,
  CAT_WRITING_TRANSLATION_SERVICES,
} from "@/static/data/cat/writing-translation";
import {
  HiringWritingTranslationCostIntroFaq,
  WritingTranslationConnectionMethodsFaq,
  WritingTranslationHiringBenefitsFaq,
} from "@/components/templates/CatLayout/Faqs/WritingTranslationFaqs";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const now = new Date();

  if (!category && typeof category !== "string") {
    <div>Page Not Found</div>;
  }

  const getIntro = (): TCatLayoutIntro | null => {
    switch (category) {
      case "dev-it":
        return {
          title: "Dev and IT experts to scale your org",
          description:
            "Hire independent professionals to shorten development cycles, bury backlogs, and drive product growth.",
          image: DevIntroImage,
        };

      case "design-creative":
        return {
          title: "Hire freelance design and creative experts to help you scale",
          description:
            "Thousands of pros ready to kick-start your creative overhaul from day one.",
          image: DesignCreativeIntroImage,
        };

      case "sales-and-marketing":
        return {
          title: "Scale when you need to with marketing and sales experts",
          description:
            "Build some buzz around your business with professionals from the world’s work marketplace.",
          image: SalesAndMarketingIntroImage,
        };

      case "admin-customer-support":
        return {
          title: "Exceptional customer service creates happy customers",
          description:
            "Work with Charlie Unicorn AI - Freelancer to manage your organization’s customer service needs big or small.",
          image: AdminCustomerSupportIntroImage,
        };

      case "writing-translation":
        return {
          title: "Hire freelance writing and translation experts in moments",
          description:
            "Thousands of pros are ready to finesse your language and help you go global.",
          image: WritingTranslationIntroImage,
        };
      default:
        return null;
    }
  };

  const getExpert = (): TCatLayoutExpert | null => {
    switch (category) {
      case "dev-it":
        return {
          title: "Trusted remote development and IT experts",
          categories: CAT_DEVELOPERS,
          rate: {
            value: "4.91",
            label: "Average rating for work with tech talent",
          },
          contracts: {
            value: "211",
            label: "Involving development and IT work in the past year",
          },
          skills: {
            value: "1,665",
            label: "Represented by talent on Charlie Unicorn AI - Freelancer",
          },
        };

      case "design-creative":
        return {
          title: "Specialized design and creative experts you can count on",
          categories: CAT_DESIGNERS,
          rate: {
            value: "4.92",
            label: "Average rating for work with design and creative talent",
          },
          contracts: {
            value: "184",
            label: "Involving design and creative work in the past year",
          },
          skills: {
            value: "468",
            label: "Represented by talent on Charlie Unicorn AI - Freelancer",
          },
        };

      case "sales-and-marketing":
        return {
          title:
            "Specialized sales experts and marketing professionals you can count on",
          categories: CAT_SALES_AND_MARKETING_EXPERTS_CATEGORIES,
          rate: {
            value: "4.78",
            label:
              "Average client rating for work with sales and marketing talent",
          },
          contracts: {
            value: "65",
            label: "Involving sales and marketing work in the past year",
          },
          skills: {
            value: "358",
            label: "Represented by talent on Charlie Unicorn AI - Freelancer",
          },
        };

      case "admin-customer-support":
        return {
          title:
            "Specialized admin and customer support professionals you can count on",
          categories: CAT_ADMIN_CUSTOMER_SUPPORT_EXPERTS_CATEGORIES,
          rate: {
            value: "4.87",
            label:
              "Average rating for work with admin and customer support talent",
          },
          contracts: {
            value: "60",
            label: "Involving admin and customer support work in the past year",
          },
          skills: {
            value: "332",
            label: "Represented by talent on Charlie Unicorn AI - Freelancer",
          },
        };

      case "writing-translation":
        return {
          title:
            "Specialized writing experts and translation professionals you can count on",
          categories: CAT_WRITING_TRANSLATION_EXPERTS_CATEGORIES,
          rate: {
            value: "4.86",
            label:
              "Average rating for work with writing and translation talent",
          },
          contracts: {
            value: "146",
            label: "Involving writing and translation work in the past year",
          },
          skills: {
            value: "331",
            label: "Represented by talent on Charlie Unicorn AI - Freelancer",
          },
        };
      default:
        return null;
    }
  };

  const getServices = (): TCatLayoutService | null => {
    switch (category) {
      case "dev-it":
        return {
          title: "Development and IT projects for your most pressing work",
          items: CAT_DEVELOPER_SERVICES,
        };

      case "design-creative":
        return {
          title: "Design and creative projects for your most pressing work",
          items: CAT_DESIGNE_SERVICES,
        };

      case "sales-and-marketing":
        return {
          title: "Sales and marketing projects for your most pressing work",
          items: CAT_SALES_AND_MARKETING_SERVICES,
        };

      case "admin-customer-support":
        return {
          title:
            "Admin and customer support projects for your most pressing work",
          items: CAT_ADMIN_CUSTOMER_SUPPORT_SERVICES,
        };

      case "writing-translation":
        return {
          title: "Writing and translation projects for your most pressing work",
          items: CAT_WRITING_TRANSLATION_SERVICES,
        };
      default:
        return null;
    }
  };

  const getProjectOverview = (): TCatLayoutProjectOverview | null => {
    switch (category) {
      case "dev-it":
        return {
          title: "Dev expertise at your fingertips",
          description:
            "An iOS/Android developer saved his client money, time, and stress",
          message:
            "Igor has great knowledge in mobile application development [and] always suggests a better and cost-effective solution. Superfast turnaround. Thank you Igor!",
          rate: 5,
          budget: 14520,
          skills: CAT_DEVELOPER_PROJECT_OVERVIEW_SKILLS,
          image: DevProjectOverviewImage,
        };

      case "design-creative":
        return {
          title: "The brand book your creatives need",
          description:
            "A graphic designer quickly created a robust brand guide for visual identity",
          message:
            "Working with Kostadin is incredible and I value him as an important member of my digital team.",
          rate: 5,
          budget: 4637,
          skills: CAT_DESIGN_PROJECT_OVERVIEW_SKILLS,
          image: DesignProjectOverviewImage,
        };

      case "sales-and-marketing":
        return {
          title: "How Charlie Unicorn AI - Freelancer works for clients",
          description:
            "A graphic design pro creates a logo, branding, and style guide",
          message:
            "If you have an opportunity to hire Felice, don't delay! He has great ideas, but is open to feedback and changes. He was always well prepared, kept me informed, met his timelines, and delivered what he said and more. My best experience on Charlie Unicorn AI - Freelancer. In fact, I've started up another project with him and am still working with him.",
          rate: 5,
          budget: 4637,
          skills: CAT_SALES_AND_MARKETING_PROJECT_OVERVIEW_SKILLS,
          image: SalesAndMarketingProjectOverviewImage,
        };

      case "admin-customer-support":
        return {
          title: "Project managers who make it look easy",
          description:
            "A project management pro aced a massive rebranding project",
          message:
            "Elham was exceptional in every way. Her project management is a 10 out of 10. Her communication is the same. She managed a highly complex project and made it look easy and it was not. She always had a positive attitude and kept her cool even during highly stressful periods in the project. Her team loved her. The project was on-time, on-budget and very profitable!",
          rate: 5,
          budget: 36000,
          skills: CAT_ADMIN_CUSTOMER_SUPPORT_PROJECT_OVERVIEW_SKILLS,
          image: AdminCustomerSupportProjectOverviewImage,
        };

      case "writing-translation":
        return {
          title: "Translation that connects cultures",
          description:
            "A translator works her way up to community support lead",
          message:
            "Angelica is a very professional translator and is committed to successfully delivering quality work. After working for us as a Latin Spanish translator for over a year, she is now leading our community support in Latin America. It's always a pleasure to work with her and I can strongly recommend Angelica.",
          rate: 5,
          budget: 6426,
          skills: CAT_WRITING_TRANSLATION_PROJECT_OVERVIEW_SKILLS,
          image: WritingTranslationProjectOverviewImage,
        };

      default:
        return null;
    }
  };

  const getProfessionals = (): TCatLayoutProfessionals | null => {
    switch (category) {
      case "admin-customer-support":
        return {
          title:
            "Professionals on Charlie Unicorn AI - Freelancer help the world’s best companies with customer service needs.",
          professionals: CAT_ADMIN_CUSTOMER_SUPPORT_PROFESSIONALS,
        };
      default:
        return null;
    }
  };

  const getFaqs = (): IExpandableText[] | null => {
    switch (category) {
      case "dev-it":
        return [
          {
            title:
              "What is the first step to hiring development and IT talent and determining the project cost?",
            description:
              "One of the first steps in hiring any talent is to determine which skills you need for your project. Charlie Unicorn AI - Freelancer matches you with proven remote talent who can help you with all your development and IT needs, including:",
            children: <HiringDevCostIntroFaq />,
          },
          {
            title:
              "What are the various ways I can connect with development and IT talent through Charlie Unicorn AI - Freelancer?",
            description:
              "Charlie Unicorn AI - Freelancer gives you the flexibility you need to find the right talent for your development and IT projects.",
            children: <DevConnectionMethodsFaq />,
          },
          {
            title:
              "Why should I use Charlie Unicorn AI - Freelancer to find talent for development and IT services?",
            description:
              "When it comes to development and IT, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for development and IT projects include:",
            children: <DevHiringBenefitsFaq />,
          },
        ];

      case "design-creative":
        return [
          {
            title:
              "What is the first step to hiring design and creative talent and determining the project cost?",
            description:
              "One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with design and creative, but what specific things are you trying to do? Charlie Unicorn AI - Freelancer matches you with proven remote talent who can help you with all your design and creative needs, including: ",
            children: <HiringDesignCostIntroFaq />,
          },
          {
            title:
              "What are the various ways I can connect with design and creative talent through Charlie Unicorn AI - Freelancer?",
            description:
              "Charlie Unicorn AI - Freelancer gives you the flexibility you need to find the right talent for your design and creative services projects.",
            children: <DesignCreativeConnectionMethodsFaq />,
          },
          {
            title:
              "Why should I use Charlie Unicorn AI - Freelancer to find talent for design and creative services?",
            description:
              "When it comes to development and IT, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for development and IT projects include:",
            children: <DesignCreativeHiringBenefitsFaq />,
          },
        ];

      case "sales-and-marketing":
        return [
          {
            title:
              "What is the first step to hiring sales and marketing talent and determining the project cost?",
            description:
              "One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with sales and marketing, but what specific things are you trying to do? Charlie Unicorn AI - Freelancer matches you with proven remote talent who can help you with all your sales and marketing needs, including:",
            children: <HiringSalesMarketingCostIntroFaq />,
          },
          {
            title:
              "What are the various ways I can connect with sales and marketing talent through Charlie Unicorn AI - Freelancer?",
            description:
              "If you need help finding talent for your marketing project, Charlie Unicorn AI - Freelancer gives you the flexibility you need to succeed.",
            children: <SalesMarketingConnectionMethodsFaq />,
          },
          {
            title:
              "Why should I use Charlie Unicorn AI - Freelancer to find talent for sales and marketing services?",
            description:
              "When it comes to sales and marketing, you may need a multidisciplinary team of talent to handle the various components of your project. Examples of professionals you might need for a sales and marketing projects include:",
            children: <SalesMarketingHiringBenefitsFaq />,
          },
        ];

      case "admin-customer-support":
        return [
          {
            title:
              "What is the first step to hiring admin and customer support talent and determining the project cost?",
            description:
              "One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with admin and customer support, but what specific things are you trying to do? Charlie Unicorn AI - Freelancer matches you with proven remote talent who can help you with all your admin and customer support needs, including:",
            children: <HiringAdminCustomerSupportCostIntroFaq />,
          },
          {
            title:
              "What are the various ways I can connect with admin and customer support talent through Charlie Unicorn AI - Freelancer?",
            description:
              "Charlie Unicorn AI - Freelancer gives you the flexibility you need to find the right talent for your admin and customer support projects.",
            children: <AdminCustomerSupportConnectionMethodsFaq />,
          },
          {
            title:
              "Why should I use Charlie Unicorn AI - Freelancer to find talent for admin and customer support services?",
            description:
              "When it comes to admin and customer support, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for admin and customer support projects include:",
            children: <AdminCustomerSupportHiringBenefitsFaq />,
          },
        ];

      case "writing-translation":
        return [
          {
            title:
              "What is the first step to hiring writing and translation talent and determining the project cost?",
            description:
              "One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with writing and translation, but what specific things are you trying to do? Charlie Unicorn AI - Freelancer matches you with proven remote talent who can help you with all your writing and translation needs, including:",
            children: <HiringWritingTranslationCostIntroFaq />,
          },
          {
            title:
              "What are the various ways you can connect with writing and translation talent through Charlie Unicorn AI - Freelancer?",
            description:
              "Charlie Unicorn AI - Freelancer gives you the flexibility you need to find the right talent for your writing and translation projects.",
            children: <WritingTranslationConnectionMethodsFaq />,
          },
          {
            title:
              "Why should I use Charlie Unicorn AI - Freelancer to find talent for writing and translation services?",
            description:
              "When it comes to writing and translation, you may need a multidisciplinary team of talent to handle the various components of your project. Examples of professionals you might need for writing and translation projects include:",
            children: <WritingTranslationHiringBenefitsFaq />,
          },
        ];
      default:
        return null;
    }
  };

  const getFreelancerCategory = (): TCatLayoutFreelancerCategory | null => {
    switch (category) {
      case "dev-it":
        return {
          title: "Find freelancers with the dev and IT skills you need",
          categories: CAT_DEVELOPER_FREELANCER_CATEGORIES,
        };

      case "design-creative":
        return {
          title:
            "Find freelancers with the design and creative skills you need",
          categories: CAT_DESIGN_FREELANCER_CATEGORIES,
        };

      case "sales-and-marketing":
        return {
          title: "Find freelancers with the sales & marketing skills you need",
          categories: CAT_SALES_AND_MARKETING_FREELANCER_CATEGORIES,
        };

      case "admin-customer-support":
        return {
          title:
            "Find freelancers with the admin and customer support skills you need",
          categories: CAT_ADMIN_CUSTOMER_SUPPORT_FREELANCER_CATEGORIES,
        };

      case "writing-translation":
        return {
          title:
            "Find freelancers with the writing and translation skills you need",
          categories: CAT_WRITING_TRANSLATION_FREELANCER_CATEGORIES,
        };

      default:
        return null;
    }
  };

  const getSEO = (): TSEO | null => {
    switch (category) {
      case "dev-it":
        return {
          title: `Top Development & IT Experts for Hire in ${getMonthName(
            now.getMonth()
          )} ${now.getFullYear()} | Charlie Unicorn AI - Freelancer`,
          description: `Discover and hire top Development & IT experts on Charlie Unicorn AI - Freelancer. From web and mobile development to DevOps and data science, find the right freelancer for your project with ease. Learn how to get started, explore expert services, and streamline your development process.`,
          keywords:
            "development freelancers, IT experts for hire, web developers, mobile app developers, DevOps freelancers, hire developers, freelance IT services, software engineers, Charlie Unicorn AI, top development talent, remote developers, full-stack developers, freelance development services",
          url: "/cat/dev-it",
        };

      case "design-creative":
        return {
          title: `Top Designers & Creatives for Hire in ${getMonthName(
            now.getMonth()
          )} ${now.getFullYear()} | Charlie Unicorn AI - Freelancer`,
          description: `Find and hire top design and creative talent on Charlie Unicorn AI - Freelancer. From graphic design and branding to video editing and UX/UI design, connect with skilled freelancers to bring your vision to life. Learn how to start your project and explore our expert services today.`,
          keywords:
            "design freelancers, creative talent, graphic designers, UX UI designers, video editors, logo designers, branding experts, hire creatives, freelance design services, Charlie Unicorn AI, top designers for hire, digital artists, animation freelancers, web design freelancers",
          url: "/cat/design-creative",
        };

      case "sales-and-marketing":
        return {
          title: `Top Sales People & Marketers for Hire in ${getMonthName(
            now.getMonth()
          )} ${now.getFullYear()} | Charlie Unicorn AI - Freelancer`,
          description: `Connect with top freelance sales and marketing experts on Charlie Unicorn AI - Freelancer. From digital marketing and SEO to lead generation and brand strategy, find professionals to grow your business. Explore services, learn how to hire, and get started with proven sales and marketing talent.`,
          keywords:
            "sales freelancers, marketing experts, SEO specialists, digital marketing, social media managers, lead generation, email marketing, content marketing, hire sales professionals, freelance marketers, brand strategy consultants, PPC experts, Charlie Unicorn AI, top marketing talent",
          url: "/cat/sales-and-marketing",
        };

      case "admin-customer-support":
        return {
          title: `Top Admin & Customer Support Talent for Hire in ${getMonthName(
            now.getMonth()
          )} ${now.getFullYear()} | Charlie Unicorn AI - Freelancer`,
          description: `Hire top-rated admin support and customer service freelancers on Charlie Unicorn AI - Freelancer. From virtual assistants and data entry to email support and customer service management, find professionals who keep your business running smoothly. Explore services and start hiring today.`,
          keywords:
            "admin support freelancers, virtual assistants, data entry experts, customer service freelancers, email support, remote admin professionals, administrative tasks, customer support specialists, hire virtual assistant, freelance admin services, back-office support, Charlie Unicorn AI, top admin talent",
          url: "/cat/admin-customer-support",
        };

      case "writing-translation":
        return {
          title: `Top Writers & Translators for Hire in ${getMonthName(
            now.getMonth()
          )} ${now.getFullYear()} | Charlie Unicorn AI - Freelancer`,
          description: `Hire expert writers, editors, and translators on Charlie Unicorn AI - Freelancer. From blog and article writing to technical documents, resumes, and localization, find top freelance talent to meet all your content and translation needs. Start your writing or translation project today.`,
          keywords:
            "freelance writers, content writers, SEO writers, article writers, blog writers, technical writers, copywriters, creative writers, resume writers, translators, localization experts, proofreaders, ghostwriters, eBook writers, speech writers, Charlie Unicorn AI, hire writers and translators",
          url: "/cat/writing-translation",
        };

      default:
        return null;
    }
  };

  return (
    <CatLayout
      intro={getIntro()}
      params={category as string}
      expert={getExpert()}
      services={getServices()}
      projectOverview={getProjectOverview()}
      freelancerCategory={getFreelancerCategory()}
      professionals={getProfessionals()}
      faqs={getFaqs()}
      seo={getSEO()}
    />
  );
};

export default Category;
