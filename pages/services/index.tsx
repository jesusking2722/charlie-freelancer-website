import { ServicesLayout } from "@/components/templates";
import { TSEO, TServiceCategoryCard } from "@/types/components.types";
import IntroImage from "@/public/assets/webps/services/project_catalog_intro.webp";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import {
  ProcessStep,
  ProjectCard,
  ServiceCategoryCard,
} from "@/components/molecules";
import { Slider, TabBar } from "@/components/atoms";
import HowItWorksImage from "@/public/assets/svgs/services/how_it_works.svg";
import {
  SERVICES_ALL_CATEGORIES,
  SERVICES_PROJECTS,
  SERVICES_SEO,
  SERVICES_SERVICES_CATEGORIES,
  SERVICES_SOCIAL_MEDIA_CATEGORIES,
  SERVICES_WEBSITE_SOLUCTIONS_CATEGORIES,
} from "@/static/data/services";
import { TTabItem } from "@/components/atoms/TabBar";

const Services = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);

  const categories = SERVICES_ALL_CATEGORIES[selectedTabIndex];
  const visibleCategories = showAll ? categories : categories.slice(0, 19);
  const { theme } = useTheme();

  const tabs: TTabItem[] = [
    { label: "Design", value: "design" },
    { label: "Video & Audio", value: "video" },
    { label: "Development & IT", value: "dev_it" },
    { label: "Marketing", value: "marketing" },
    { label: "Writing & Translation", value: "writing_translation" },
    { label: "More", value: "more" },
  ];

  return (
    <ServicesLayout seo={SERVICES_SEO}>
      {/* Intro Section */}
      <section className="w-full rounded-xl bg-[#1034a6] flex justify-between">
        <div className="w-2/5 p-6 flex flex-col items-start justify-between gap-6">
          <header>
            <h1 className="text-white text-2xl font-medium">
              Project Catalog™
            </h1>
            <h2 className="text-white text-4xl font-semibold mt-4">
              Clear scope.
              <br />
              Upfront price.
              <br />
              No surprises.
            </h2>
            <p className="mt-8 text-white text-base">
              Complete your most pressing work with Project Catalog. Browse and
              buy predefined projects in just a few clicks.
            </p>
          </header>

          {/* Search Bar */}
          <div className="w-full space-y-4">
            <div
              role="search"
              className="w-full bg-white rounded-lg overflow-hidden flex flex-row items-center justify-between gap-4 px-4 py-2"
            >
              <Icon icon="hugeicons:search-01" className="w-5 h-5" />
              <input
                type="search"
                name="search"
                aria-label="Search services"
                placeholder='Try "video editing" or "data entry"'
                className="outline-none border-none w-full text-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue !== "" && (
                <button
                  aria-label="Clear search"
                  className="p-[2px] rounded-full border border-black mr-2 cursor-pointer"
                  onClick={() => setSearchValue("")}
                >
                  <Icon
                    icon="mdi:times"
                    className="w-3 h-3"
                    color={theme === "dark" ? "white" : "black"}
                  />
                </button>
              )}
            </div>

            {/* Popular Search Keywords */}
            <nav
              className="w-full flex flex-row items-center gap-2"
              aria-label="Popular search keywords"
            >
              <span className="text-white font-medium">Popular:</span>
              {[
                { label: "Logo design", href: "#" },
                { label: "Articles & Blog Posts", href: "#" },
                { label: "WordPress", href: "#" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="py-1 px-2 rounded-full bg-gray-400 text-xs flex flex-row items-center gap-2 cursor-pointer"
                >
                  <Icon icon="hugeicons:search-01" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Intro Image */}
        <div className="w-2/5 overflow-hidden">
          <Image
            src={IntroImage}
            alt="Professional freelance services for your project needs"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Shop by Category */}
      <section
        className="w-full space-y-14 mt-16"
        aria-labelledby="shop-category-title"
      >
        <h2 id="shop-category-title" className="text-4xl font-semibold">
          Shop by category
        </h2>
        <Slider
          itemsPerView={{
            default: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          gap={24}
          className="mb-8"
        >
          {SERVICES_SERVICES_CATEGORIES.map((service, index) => (
            <ServiceCategoryCard
              key={index}
              image={service.image}
              label={service.label}
              path={service.path}
            />
          ))}
        </Slider>
      </section>

      {/* How It Works */}
      <section
        className="w-full flex items-center"
        aria-labelledby="how-it-works-title"
      >
        <div className="w-1/2">
          <h2 id="how-it-works-title" className="text-4xl font-semibold">
            How it works
          </h2>
          <div className="w-full flex flex-col items-start gap-8 mt-8">
            <ProcessStep
              title="Browse"
              description="Find the type of work you need, clearly defined and ready to start."
              icon="hugeicons:eye"
            />
            <ProcessStep
              title="Buy"
              description="Work begins as soon as you purchase and provide requirements."
              icon="hugeicons:shopping-cart-01"
            />
            <ProcessStep
              title="Approve"
              description="Receive your project by a set deadline. Review, approve, and pay."
              icon="hugeicons:checkmark-square-04"
            />
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={HowItWorksImage}
            alt="Steps showing how to browse, buy, and approve projects"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Social Media Solutions */}
      <section
        className="w-full space-y-10"
        aria-labelledby="social-solutions-title"
      >
        <h2 id="social-solutions-title" className="text-4xl font-semibold">
          Scale your business with social media solutions
        </h2>
        <div className="w-full grid grid-cols-4 gap-6">
          {SERVICES_SOCIAL_MEDIA_CATEGORIES.map((service, index) => (
            <ServiceCategoryCard
              key={index}
              image={service.image}
              label={service.label}
              path={service.path}
            />
          ))}
        </div>
      </section>

      {/* Website Solutions */}
      <section
        className="w-full mt-20 space-y-10"
        aria-labelledby="website-solutions-title"
      >
        <h2 id="website-solutions-title" className="text-4xl font-semibold">
          Website solutions that bring in more customers
        </h2>
        <div className="w-full grid grid-cols-4 gap-6">
          {SERVICES_WEBSITE_SOLUCTIONS_CATEGORIES.map((service, index) => (
            <ServiceCategoryCard
              key={index}
              image={service.image}
              label={service.label}
              path={service.path}
            />
          ))}
        </div>
      </section>

      {/* Project Inspiration */}
      <section
        className="w-full mt-20 space-y-10"
        aria-labelledby="project-inspiration-title"
      >
        <h2 id="project-inspiration-title" className="text-4xl font-semibold">
          Get inspired with projects like these
        </h2>
        <div className="w-full grid grid-cols-4 gap-8">
          {SERVICES_PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* All Categories with Tab Navigation */}
      <section
        className="w-full mt-20 space-y-10"
        aria-labelledby="all-categories-title"
      >
        <h2 id="all-categories-title" className="text-4xl font-semibold">
          Browse all categories
        </h2>
        <div className="w-full space-y-8">
          <TabBar
            tabs={tabs}
            selectedTabIndex={selectedTabIndex}
            onTab={(idx) => {
              setSelectedTabIndex(idx);
              setShowAll(false);
            }}
          />
          <div className="w-full grid grid-cols-4 gap-4 px-1">
            {visibleCategories.map((cat, index) => (
              <Link
                key={index}
                href={cat.path}
                className="hover:underline font-light text-sm"
              >
                {cat.label}
              </Link>
            ))}
            {!showAll && categories.length > 19 && (
              <button
                onClick={() => setShowAll(true)}
                className="text-blue-600 cursor-pointer text-left inline-block hover:underline"
                aria-label="Show more categories"
              >
                View More {categories.length - 19}
              </button>
            )}
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

export default Services;
