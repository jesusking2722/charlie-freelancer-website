import { CatLayout } from "@/components/templates";
import { useRouter } from "next/router";
import type {
  TCatLayoutExpert,
  TCatLayoutFreelancerCategory,
  TCatLayoutIntro,
  TCatLayoutProjectOverview,
  TCatLayoutService,
} from "@/components/templates/CatLayout";
import DevIntroImage from "@/public/assets/webps/cat/dev-it/intro.webp";
import DesignCreativeIntroImage from "@/public/assets/webps/cat/design-creative/intro.webp";
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
import DevProjectOverviewImage from "@/public/assets/jpgs/cat/dev-it/dev_project_overview.jpg";
import DesignProjectOverviewImage from "@/public/assets/pngs/cat/design-creative/project_overview.png";
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
            label: "Average rating for work with tech talent.",
          },
          contracts: {
            value: "211",
            label: "Involving development and IT work in the past year.",
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
            label: "Average rating for work with design and creative talent.",
          },
          contracts: {
            value: "184",
            label: "Involving design and creative work in the past year.",
          },
          skills: {
            value: "468",
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
              "One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with design and creative, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your design",
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
      faqs={getFaqs()}
      seo={getSEO()}
    />
  );
};

export default Category;
