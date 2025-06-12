import Link from "next/link";
import IntroLayout from "../IntroLayout";
import NavLayout from "../NavLayout";
import {
  AvatarGroup,
  Button,
  ExpandableText,
  LinkDropdown,
  Rater,
  SkillTag,
} from "@/components/atoms";
import type {
  ICatFreelancerCategory,
  IExpandableText,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
  TLinkDropdownItem,
} from "@/types/components.types";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";

import MicroSoftImage from "@/public/assets/svgs/talent-marketplace/microsoft.svg";
import AirbnbImage from "@/public/assets/svgs/talent-marketplace/airbnb.svg";
import AutomatticImage from "@/public/assets/svgs/talent-marketplace/automattic.svg";
import BissellImage from "@/public/assets/svgs/talent-marketplace/bissell.svg";
import ClouldflareImage from "@/public/assets/pngs/talent-marketplace/cloudflare.png";
import { AccordionImageViewer } from "@/components/organisms";
import HowITExpertsWorkNowImage from "@/public/assets/webps/cat/dev-it/how_it_experts_work_now.webp";
import DevProjectOverviewImage from "@/public/assets/jpgs/cat/dev-it/dev_project_overview.jpg";
import {
  DevConnectionMethodsFaq,
  DevHiringBenefitsFaq,
  HiringDevCostIntroFaq,
} from "./Faqs/DeveloperFaqs";

type TNavItem = {
  label: string;
  path: string;
};

export type TCatLayoutIntro = {
  title: string;
  description: string;
  image: StaticImageData;
};

interface CatLayoutProps {
  params: string;
  intro: TCatLayoutIntro;
  expertCategories?: TCatLayoutExpertCategory[];
  services: TAccordionImageViewerItem[];
  skills?: string[];
  freelancerCategories?: ICatFreelancerCategory[];
}

const CatLayout: React.FC<CatLayoutProps> = ({
  params,
  intro,
  expertCategories,
  services,
  skills,
  freelancerCategories,
}) => {
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

  const faqs: IExpandableText[] | null =
    params === "dev-it"
      ? [
          {
            title:
              "What is the first step to hiring development and IT talent and determining the project cost?",
            description:
              "One of the first steps in hiring any talent is to determine which skills you need for your project. Upwork matches you with proven remote talent who can help you with all your development and IT needs, including:",
            children: <HiringDevCostIntroFaq />,
          },
          {
            title:
              "What is the first step to hiring development and IT talent and determining the project cost?",
            description:
              "Charlie Unicorn AI - Freelancer gives you the flexibility you need to find the right talent for your development and IT projects.",
            children: <DevConnectionMethodsFaq />,
          },
          {
            title:
              "What is the first step to hiring development and IT talent and determining the project cost?",
            description:
              "When it comes to development and IT, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for development and IT projects include:",
            children: <DevHiringBenefitsFaq />,
          },
        ]
      : null;

  return (
    <IntroLayout>
      {/* Nav Menu */}
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

      {/* Main */}
      <div className="w-full flex flex-col gap-16 py-8 mt-[150px]">
        {/* Intro Part */}
        <div className="w-[70%] mx-auto">
          {/* Describe */}
          <div className="w-full flex gap-20">
            <div className="w-1/2 flex flex-col items-center justify-center">
              {/* Title & Description */}
              <div>
                <h1 className="text-6xl font-semibold">{intro.title}</h1>
                <p className="text-xl mt-8">{intro.description}</p>
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
                src={intro.image}
                alt={intro.title}
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

        {/* Experts */}
        <div className="w-full py-20 bg-[#f9f9f9]">
          <div className="w-[70%] mx-auto">
            <h1 className="text-5xl font-semibold">
              Trusted remote development and IT experts
            </h1>

            {/* Rate */}
            <div className="w-full flex flex-row items-center justify-between mt-16">
              <div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:star-bold"
                    className="w-8 h-8 text-yellow-500"
                  />
                  <h2 className="text-4xl font-semibold">4.91</h2>
                </div>
                <p className="mt-2">
                  Average rating for work with tech talent.
                </p>
              </div>
              <div className="px-4 border-l-[1px] border-gray-300">
                <h2 className="text-4xl font-semibold">211K+ contracts</h2>
                <p className="mt-2">
                  Involving development and IT work in the past year.
                </p>
              </div>
              <div className="px-4 border-l-[1px] border-gray-300">
                <h2 className="text-4xl font-semibold">1,665 skills</h2>
                <p className="mt-2">
                  Represented by talent on Charlie Unicorn AI Freelancer.
                </p>
              </div>
            </div>

            {/* Experts category */}
            {expertCategories && (
              <>
                <div className="w-full grid grid-cols-4 gap-6 mt-14">
                  {expertCategories.map((cat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 transition-all duration-300 ease-in-out"
                    >
                      <Link href={cat.path}>
                        {/* Title */}
                        <h2 className="text-lg font-semibold">{cat.name}</h2>

                        {/* Average rating */}
                        <div className="w-full flex items-center gap-2 mt-6">
                          <Icon
                            icon="solar:star-bold"
                            className="text-yellow-500 w-5 h-5"
                          />
                          <span>{cat.rate} average rating</span>
                        </div>

                        {/* Experts Avatars Group */}
                        <div className="w-full flex items-center justify-between mt-4">
                          <AvatarGroup avatars={cat.experts} />
                          <Icon
                            icon="solar:arrow-right-linear"
                            className="text-blue-600 w-8 h-8"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button type="outline" label="See more skills" size="large" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Service Descriptions */}
        <div className="w-[70%] mx-auto">
          {/* Title */}
          <h1 className="text-5xl font-semibold">
            Development and IT projects for your most
            <br />
            pressing work
          </h1>

          {/* Accordian image viewer */}
          <div className="mt-14">
            <AccordionImageViewer items={services} defaultSelected="1" />
            <div className="mt-10">
              <Button type="outline" label="Browse projects" size="large" />
            </div>
          </div>
        </div>

        {/* How works */}
        <div className="w-[70%] mx-auto rounded-2xl bg-zinc-900 flex p-4">
          {/* Title & Descriptions */}
          <div className="w-1/2 p-6 flex flex-col items-start gap-4">
            <h2 className="text-sm font-semibold text-white">
              ENTERPRISE SUITE
            </h2>
            <h3 className="text-5xl font-semibold text-white mt-2">
              This is how IT Experts
              <br />
              work now
            </h3>
            <p className="text-white mt-4">
              Build an agile workforce that moves faster than the pace of
              <br />
              business with Enterprise Suite.
            </p>
            <div className="mt-6 mb-4">
              <Link
                href="/enterprise"
                className="bg-[#95df00] rounded-xl py-3 px-10 text-xl hover:bg-white transition-all duration-300 ease-in-out"
              >
                Find out how
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 rounded-2xl overflow-auto">
            <Image
              src={HowITExpertsWorkNowImage}
              alt="How IT experts work now"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Expert's project overview */}
        <div className="w-[70%] mx-auto flex gap-10 mt-14">
          {/* Project overview */}
          <div className="w-1/2 flex flex-col items-start justify-center">
            <h1 className="text-5xl font-semibold">
              Dev expertise at your
              <br />
              fingertips
            </h1>

            {/* Overview title & description */}
            <h2 className="text-xl font-semibold mt-6">
              An iOS/Android developer saved his client money, time, and stress
            </h2>
            <p className="mt-8">
              "Igor has great knowledge in mobile application development [and]
              always suggests a<br />
              better and cost-effective solution. Superfast turnaround. Thank
              you Igor!"
            </p>

            {/* Rate & Budget */}
            <div className="mt-6 flex flex-row items-center gap-6">
              <Rater rate={5} />
              <span className="text-lg text-[#001e00]">
                <strong>Budget: $14,520</strong>
              </span>
            </div>

            <div className="flex flex-row items-center gap-2 mt-4">
              <h3 className="text-lg">Skills: </h3>
              {skills &&
                skills.map((skill, index) => (
                  <SkillTag label={skill} value={skill} />
                ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 rounded-2xl overflow-hidden">
            <Image
              src={DevProjectOverviewImage}
              alt="Dev project overview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* FAQ */}
        {faqs && (
          <div className="w-[70%] mx-auto flex gap-10 mt-14 bg-[#f9f9f9] rounded-2xl p-10">
            {/* Title */}
            <div className="w-1/3">
              <h1 className="text-5xl font-semibold">
                Frequently asked
                <br />
                questions
              </h1>
            </div>

            {/* FAQs */}
            <div className="w-2/3">
              {faqs.map((faq, index) => (
                <ExpandableText key={index} {...faq}>
                  {faq.children}
                </ExpandableText>
              ))}
            </div>
          </div>
        )}

        {/* Freelancers Category */}
        {freelancerCategories && (
          <div className="w-[70%] mx-auto mt-14">
            {/* Title */}
            <div className="w-2/3">
              <h1 className="text-5xl font-semibold text-blue-950">
                Find freelancers with the dev and IT skills you need
              </h1>
            </div>

            {/* Category */}
            {freelancerCategories.map((cat, index) => (
              <div key={index} className="w-full mt-10">
                <h1 className="text-3xl font-semibold text-blue-950">
                  {cat.title}
                </h1>
                <div className="w-full grid grid-cols-4 gap-4 mt-6">
                  {cat.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </IntroLayout>
  );
};

export default CatLayout;
