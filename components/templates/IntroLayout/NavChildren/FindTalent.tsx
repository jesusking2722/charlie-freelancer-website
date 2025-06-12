import { useTheme } from "@/contexts/ThemeContext";
import type { TFindTalentNavItem } from "@/types/components.types";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import LogoDesignImage from "@/public/assets/jpgs/intro/intro_logo_design.jpg";
import WritingArticlesImage from "@/public/assets/jpgs/intro/intro_wrting_articles.jpg";
import WordPressImage from "@/public/assets/jpgs/intro/intro_wordpress.jpg";
import SocialMediaManagementImage from "@/public/assets/jpgs/intro/intro_socialmedia.jpg";
import VideoEditingImage from "@/public/assets/jpgs/intro/intro_video_editing.jpg";
import SEOImage from "@/public/assets/jpgs/intro/intro_seo.jpg";
import WebProgramingImage from "@/public/assets/jpgs/intro/intro_webprograming.jpg";
import AIMarchineLearningImage from "@/public/assets/jpgs/intro/intro_ai_marchine.jpg";
import MarketingStrategyImage from "@/public/assets/jpgs/intro/intro_marketing_strategy.jpg";
import SocialMediaMarketingImage from "@/public/assets/jpgs/intro/intro_social_media_marketing.jpg";
import WebsiteBuildersImage from "@/public/assets/jpgs/intro/intro_websitebuilder.jpg";

type TTalentMarketplaceCatalog = {
  label: string;
  path: string;
};

type TProjectCatalog = {
  label: string;
  path: string;
  image: StaticImageData;
};

const TalentMarketplace = () => {
  const catalogs: TTalentMarketplaceCatalog[] = [
    { label: "Development & IT", path: "/cat/dev-it" },
    { label: "Design & Creative", path: "/" },
    { label: "Sales & Marketing", path: "/" },
    { label: "Writing & Translation", path: "/" },
    { label: "Admin & Customer Support", path: "/" },
    { label: "Finance & Accounting", path: "/" },
    { label: "HR & Training", path: "/" },
    { label: "Legal", path: "/" },
    { label: "Engineering & Architecture", path: "/" },
    { label: "Hire Freelancers", path: "/" },
  ];

  return (
    <div className="w-full px-8 flex gap-8">
      <div className="w-1/3">
        <h1 className="text-base font-semibold">Talent Marketplace</h1>
        <p className="mt-4 text-sm">
          Learn about working with talent or explore your specific hiring needs.
        </p>
        <Link
          href="/"
          className="flex items-center gap-1 mt-4 text-blue-500 underline hover:no-underline text-xs"
        >
          Hire on Talent Marketplace
          <Icon
            icon="solar:arrow-right-outline"
            className="text-blue-500 w-4 h-4"
          />
        </Link>
      </div>

      {/* Marketplace Catalog */}
      <div className="w-2/3 flex items-center justify-center mt-4">
        <ul className="w-full">
          {catalogs.map((catalog, index) => (
            <li
              key={index}
              className="w-full py-2 px-4 rounded-lg hover:bg-gray-200 cursor-pointer"
            >
              <Link href={catalog.path} className="text-sm w-full">
                {catalog.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectCatalog = () => {
  const catalogs: TProjectCatalog[] = [
    { label: "Logo Design", path: "/", image: LogoDesignImage },
    { label: "Articles & Blog Posts", path: "/", image: WritingArticlesImage },
    {
      label: "WordPress",
      path: "/",
      image: WordPressImage,
    },
    {
      label: "Social Media Management",
      path: "/",
      image: SocialMediaManagementImage,
    },
    { label: "Video Editing", path: "/", image: VideoEditingImage },
    { label: "SEO", path: "/", image: SEOImage },
  ];

  return (
    <div className="w-full px-8 flex gap-8">
      <div className="w-1/4">
        <h1 className="text-base font-semibold">Project Catalog</h1>
        <p className="mt-4 text-sm">
          Browse and buy projects that have a clear scope and price.
        </p>
        <Link
          href="/"
          className="flex items-center gap-1 mt-4 text-blue-500 underline hover:no-underline text-xs"
        >
          Browse Project Catalog
          <Icon
            icon="solar:arrow-right-outline"
            className="text-blue-500 w-4 h-4"
          />
        </Link>
      </div>

      {/* Marketplace Catalog */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {catalogs.map((catalog, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg hover:bg-gray-300 w-[200px] h-[200px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
          >
            <Link href={catalog.path}>
              <Image
                src={catalog.image}
                alt={catalog.label}
                className="w-full h-[150px] object-cover object-center"
              />
              <div className="flex items-center justify-center h-[50px]">
                <h2 className="text-sm">{catalog.label}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Consultations = () => {
  const catalogs: TProjectCatalog[] = [
    { label: "Web Programming", path: "/", image: WebProgramingImage },
    {
      label: "AI & Machine Learning",
      path: "/",
      image: AIMarchineLearningImage,
    },
    { label: "Marketing Strategy", path: "/", image: MarketingStrategyImage },
    {
      label: "Social Media Marketing",
      path: "/",
      image: SocialMediaMarketingImage,
    },
    { label: "Website Builders & CMS", path: "/", image: WebsiteBuildersImage },
  ];

  return (
    <div className="w-full px-8 flex gap-8">
      <div className="w-1/4">
        <h1 className="text-base font-semibold">Consultations</h1>
        <p className="mt-4 text-sm">
          Explore what is possible with an industry expert. See their
          availability and book a time that works for you.
        </p>
        <Link
          href="/"
          className="flex items-center gap-1 mt-4 text-blue-500 underline hover:no-underline text-xs"
        >
          Explore all categories
          <Icon
            icon="solar:arrow-right-outline"
            className="text-blue-500 w-4 h-4"
          />
        </Link>
      </div>

      {/* Marketplace Catalog */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {catalogs.map((catalog, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg hover:bg-gray-300 w-[200px] h-[200px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
          >
            <Link href={catalog.path}>
              <Image
                src={catalog.image}
                alt={catalog.label}
                className="w-full h-[150px] object-cover"
              />
              <div className="flex items-center justify-center h-[50px]">
                <h2 className="text-sm">{catalog.label}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const FindTalent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const { theme } = useTheme();

  const navItems: TFindTalentNavItem[] = [
    {
      title: "Post a job and hire a pro",
      subtitle: "Talent Marketplace",
      path: "/talent-marketplace",
      children: <TalentMarketplace />,
    },
    {
      title: "Browse and buy projects",
      subtitle: "Project Catalog",
      path: "/",
      children: <ProjectCatalog />,
    },
    {
      title: "Get advice from an industry expert",
      subtitle: "Consultations",
      path: "/",
      children: <Consultations />,
    },
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <div className="w-full flex gap-6">
      {/* NavGroup */}
      <div className="w-1/3">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`p-4 hover:bg-gray-200 ${
              hoveredIndex === index && "bg-gray-200"
            } cursor-pointer flex flex-row items-center justify-between transition-all duration-300 ease-in-out rounded-lg`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <Link href={item.path} className="">
              <h2 className="text-sm">{item.title}</h2>
              <p className="text-blue-500 text-xs mt-2">{item.subtitle}</p>
            </Link>
            <Icon
              icon="solar:alt-arrow-right-line-duotone"
              className="w-4 h-4 text-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-[1px] bg-gray-400"></div>

      {/* NavChildren */}

      <div className="w-2/3">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            {/* Top Divider */}
            <div className="h-1 w-full mb-8">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <div className="w-[60px] h-1 bg-blue-500 ml-8"></div>
              </div>
            </div>

            {/* Nav children */}
            {navItems[hoveredIndex].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FindTalent;
