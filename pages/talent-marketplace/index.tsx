import { Button, LinkDropdown, SEO } from "@/components/atoms";
import { IntroLayout, NavLayout } from "@/components/templates";
import { TLinkDropdownItem } from "@/types/components.types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Intro1Image from "@/public/assets/webps/talent-marketplace/intro1.webp";
import MicroSoftImage from "@/public/assets/svgs/talent-marketplace/microsoft.svg";
import AirbnbImage from "@/public/assets/svgs/talent-marketplace/airbnb.svg";
import AutomatticImage from "@/public/assets/svgs/talent-marketplace/automattic.svg";
import BissellImage from "@/public/assets/svgs/talent-marketplace/bissell.svg";
import ClouldflareImage from "@/public/assets/pngs/talent-marketplace/cloudflare.png";
import DevelopmentImage from "@/public/assets/pngs/icons/web-programming.png";
import MarketingImage from "@/public/assets/pngs/icons/marketing.png";
import DesignImage from "@/public/assets/pngs/icons/design-and-creative.png";
import WritingImage from "@/public/assets/pngs/icons/writing.png";
import CustomerSupportImage from "@/public/assets/pngs/icons/customer-support-simple.png";
import FinanceAccountingImage from "@/public/assets/pngs/icons/financial-analysis-valuation.png";
import PostJobImage from "@/public/assets/jpgs/talent-marketplace/post-job.jpg";
import ProjectCatalogImage from "@/public/assets/webps/talent-marketplace/project_catalog.webp";
import Head from "next/head";

type TNavItem = {
  label: string;
  path: string;
};

type TProjectCatalog = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  path: string;
};

type TBenefit = {
  title: string;
  descriptions: string[];
  icon: string;
};

const TalentMarketplace = () => {
  const navs: TNavItem[] = [
    { label: "Development & IT", path: "/" },
    { label: "AI Services", path: "/" },
    { label: "Design & Creative", path: "/" },
    { label: "Sales & Marketing", path: "/" },
    { label: "Admin & Customer Support", path: "/" },
  ];

  const dropdowns: TLinkDropdownItem[] = [
    { label: "Writing & Translation", path: "/" },
    { label: "Finance & Accounting", path: "/" },
    { label: "HR & Training", path: "/" },
    { label: "Legal", path: "/" },
    { label: "Engineering & Architecture", path: "/" },
    { label: "See all specializations", path: "/" },
  ];

  const projectCatalog: TProjectCatalog[] = [
    {
      title: "Development & IT",
      subtitle: "20K+ jobs posted weekly",
      image: DevelopmentImage,
      path: "/",
    },
    {
      title: "Sales & Marketing",
      subtitle: "10K+ jobs posted weekly",
      image: MarketingImage,
      path: "/",
    },
    {
      title: "Design & Creative",
      subtitle: "15K+ jobs posted weekly",
      image: DesignImage,
      path: "/",
    },
    {
      title: "Writing & Translation",
      subtitle: "20K+ jobs posted weekly",
      image: WritingImage,
      path: "/",
    },
    {
      title: "Admin & Customer Support",
      subtitle: "10K+ jobs posted weekly",
      image: CustomerSupportImage,
      path: "/",
    },
    {
      title: "Finance & Accounting",
      subtitle: "15K+ jobs posted weekly",
      image: FinanceAccountingImage,
      path: "/",
    },
  ];

  const companyTutorials: TNavItem[] = [
    {
      label:
        "How Flexible Talent Helps a Fast-Paced Company Improve Productivity",
      path: "/",
    },
    {
      label:
        "How On-Demand Devs Provide PGA of America Time and Budget for Testing New Ideas",
      path: "/",
    },
    {
      label:
        "Singularity University Invents Their Future with On-Demand Independent Experts",
      path: "/",
    },
  ];

  const benefits: TBenefit[] = [
    {
      title: "Discover quality talent fast",
      descriptions: [
        "Post a job and receive proposals from talent",
        "See verified work history and reviews",
        "Send 30 invitations to talent per job post",
        "Use advanced search filters",
      ],
      icon: "solar:shield-star-linear",
    },
    {
      title: "Safe, easy payments",
      descriptions: [
        "Get an extra level of security with Upwork Payment Protection",
        "Pay as you go billing for milestone and hourly contracts",
        "3-5% marketplace fee depending on billing method",
      ],
      icon: "solar:dollar-minimalistic-linear",
    },
    {
      title: "Collaboration tools for project tracking",
      descriptions: [
        "Chat, video call, and share files with talent",
        "Get advanced reporting and tracking",
        "Set coworker teams and member permission settings",
        "Customize your invoice with activity codes",
      ],
      icon: "mdi-light:pencil",
    },
    {
      title: "Account support and guidance",
      descriptions: ["Account support and guidance"],
      icon: "material-symbols-light:headset-mic-outline",
    },
  ];

  return (
    <IntroLayout>
      {/* SEO */}
      <SEO
        title="Talent Marketplace - Post a Job - Talent Marketplace | Charlie Unicorn AI"
        description="Find and hire quality freelancers in development, marketing, design, and more with Charlie Unicorn AI."
        url="/talent-marketplace"
        keywords="talent marketplace, post a job, hire freelancers, freelance developers, freelance marketers, freelance designers, find freelancers, quality freelancers, Charlie Unicorn AI, AI-powered talent marketplace, remote freelancers, freelance job posting"
      />

      {/* Nav Menu */}
      <div className="fixed top-[80px] left-0 w-full">
        <NavLayout>
          <ul className="flex flex-row items-center gap-6">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.path}
                  className="text-sm hover:text-blue-600 hover:underline"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
            <li>
              <LinkDropdown placeholder="More" items={dropdowns} />
            </li>
          </ul>
        </NavLayout>
      </div>

      {/* Main */}
      <div className="w-full flex flex-col gap-24 py-8 mt-[150px]">
        {/* Intro1 Part */}
        <div className="w-[70%] mx-auto">
          {/* Describe */}
          <div className="w-full flex gap-20">
            <div className="w-1/2 flex flex-col items-center justify-center">
              {/* Title & Description */}
              <div>
                <h1 className="text-6xl font-semibold">
                  Post a job today, hire tomorrow
                </h1>
                <p className="text-lg mt-8">
                  Connect with talent that gets you, and hire them to take your
                  business to the next level.
                </p>
              </div>

              {/* Get started Button */}
              <div className="w-full mt-8">
                <button className="bg-blue-600 hover:bg-blue-500 w-[60%] py-3 rounded-lg text-lg text-white font-semibold transition-all duration-150 ease-in-out cursor-pointer">
                  Get started
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src={Intro1Image}
                alt="Talent Marketplace - Hire Talent"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Brands */}
          <div className="w-full flex flex-row items-center justify-between mt-8">
            <p className="text-gray-500 text-sm">TRUSTED BY</p>
            <Image src={MicroSoftImage} alt="Microsoft" />
            <Image src={AirbnbImage} alt="Airbnb" />
            <Image src={AutomatticImage} alt="Automattic" />
            <Image src={BissellImage} alt="Bissell" />
            <Image
              src={ClouldflareImage}
              alt="Cloudflare"
              className="w-[150px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Best Collegues */}
        <div className="w-full py-20 bg-[#f9f9f9]">
          <div className="w-[70%] mx-auto">
            {/* Description */}
            <div className="w-full flex items-start">
              {/* Title & Description */}
              <div className="w-3/5">
                <h1 className="text-5xl font-semibold">
                  The best colleagues you’ve
                  <br />
                  never met
                </h1>
                <p className="text-xl mt-8">
                  Logo designers. App developers. Customer support gurus.
                  Marketing agencies.
                  <br />
                  Make the right connection and it’ll last a lifetime.
                </p>
              </div>

              {/* Review */}
              <div className="w-2/5 flex items-center justify-between gap-8">
                <div className="">
                  <div className="w-full flex items-center gap-2">
                    <h2 className="text-5xl font-semibold">4.9</h2>
                    {/* Star Group */}
                    <div className="flex items-center gap-0">
                      <Icon
                        icon="solar:star-bold"
                        className="w-5 h-5 text-yellow-500"
                      />
                      <Icon
                        icon="solar:star-bold"
                        className="w-5 h-5 text-yellow-500"
                      />
                      <Icon
                        icon="solar:star-bold"
                        className="w-5 h-5 text-yellow-500"
                      />
                      <Icon
                        icon="solar:star-bold"
                        className="w-5 h-5 text-yellow-500"
                      />
                      <Icon
                        icon="solar:star-bold"
                        className="w-5 h-5 text-yellow-500"
                      />
                    </div>
                  </div>
                  <p className="text-base mt-4">
                    Average rating of talent
                    <br />
                    from 2M+ reviews
                  </p>
                </div>
                <div className="">
                  <h2 className="text-5xl font-semibold">8K+</h2>

                  <p className="text-base mt-4">
                    Skills represented by talent
                    <br />
                    on Charlie Unicorn AI.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Catalog */}
            <div className="w-full grid grid-cols-3 gap-8 mt-8">
              {projectCatalog.map((ct, index) => (
                <Link
                  key={index}
                  href={ct.path}
                  className="w-full flex flex-row items-center gap-4 bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden p-6 transition-all duration-300 ease-in-out"
                >
                  <Image
                    src={ct.image}
                    alt={ct.title}
                    className="w-14 h-auto object-cover"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-semibold">{ct.title}</h2>
                    <p className="text-gray-600 mt-1">{ct.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Post a job */}
        <div className="w-[70%] mx-auto flex items-center gap-16">
          <div className="w-1/2 rounded-xl overflow-hidden">
            <Image
              src={PostJobImage}
              alt="Post a Job"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2">
            {/* Title & Description */}
            <h1 className="text-5xl font-semibold">
              Post today, hire tomorrow
            </h1>
            <p className="text-xl mt-4">
              We've got you covered from idea to delivery. Post your job and
              you'll start getting proposals. Once you've found your expert, you
              can talk timings, availability, and prices before going ahead.
            </p>

            {/* Payment protection */}
            <div className="w-full flex flex-row items-center gap-4 mt-6">
              <Icon
                icon="solar:dollar-minimalistic-linear"
                className="w-10 h-10"
                color="black"
              />
              <div className="">
                <h2 className="text-lg font-semibold">
                  Charlie Unicorn AI Payment Protection
                </h2>
                <p className="text-lg font-semibold text-gray-600">
                  Gives you security and peace of mind
                </p>
              </div>
            </div>

            {/* Post a job Button */}
            <div className="mt-6">
              <Button type="primary" label="Post a job" />
            </div>
          </div>
        </div>

        {/* You are in good company */}
        <div className="w-[70%] mx-auto">
          <h1 className="text-5xl font-semibold">You’re in good company</h1>
          <p className="text-xl mt-4">
            Millions of companies, big and small, use Charlie Unicorn AI to get
            great work done. Join them today.
          </p>
          <div className="w-full grid grid-cols-3 gap-4 mt-6">
            {companyTutorials.map((tutorial, index) => (
              <Link
                key={index}
                href={tutorial.path}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <h2 className="text-xl font-semibold">{tutorial.label}</h2>
                <div className="mt-4">
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="text-blue-600 w-6 h-6"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* What you will get */}
        <div className="w-[70%] mx-auto">
          <h1 className="text-5xl font-semibold">What you’ll get</h1>
          <div className="w-full mt-10 grid grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="w-full flex items-start gap-6 overflow-hidden"
              >
                <Icon icon={benefit.icon} className="w-12 h-12" color="black" />
                <div className="w-full">
                  <h2 className="text-2xl font-semibold">{benefit.title}</h2>
                  <ul className="mt-2 list-disc list-inside">
                    {benefit.descriptions.map((des, index) => (
                      <li key={index}>{des}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Catalog */}
        <div className="w-[70%] mx-auto bg-green-600 p-4 rounded-xl flex items-center gap-8">
          <div className="w-2/3 pl-4">
            <h1 className="text-white text-sm">PROJECT CATALOG</h1>
            <h2 className="text-white text-5xl font-semibold mt-2">
              Take the first step toward a
              <br />
              smarter talent strategy
            </h2>
            <p className="text-white text-xl mt-4">
              Browse and buy projects from talent
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="bg-white text-lg font-semibold py-3 px-8 rounded-xl"
              >
                Browse projects
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <Image
              src={ProjectCatalogImage}
              alt="Project Catalog"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </IntroLayout>
  );
};

export default TalentMarketplace;
