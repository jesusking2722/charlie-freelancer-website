import Link from "next/link";
import IntroLayout from "../IntroLayout";
import NavLayout from "../NavLayout";
import {
  Avatar,
  AvatarGroup,
  Button,
  ExpandableText,
  LinkDropdown,
  Rater,
  SEO,
  SkillTag,
} from "@/components/atoms";
import type {
  ICatFreelancerCategory,
  IExpandableText,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
  TFreelancerBadge,
  TLinkDropdownItem,
  TSEO,
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
import { formatNumberWithCommas } from "@/utils/math";

import ReadArticleImage from "@/public/assets/pngs/cat/admin-customer-support/read_article.png";

type TNavItem = {
  label: string;
  path: string;
};

export type TCatLayoutIntro = {
  title: string;
  description: string;
  image: StaticImageData;
};

export type TCatLayoutExpert = {
  title: string;
  categories?: TCatLayoutExpertCategory[];
  rate: {
    value: string;
    label: string;
  };
  contracts: {
    value: string;
    label: string;
  };
  skills: {
    value: string;
    label: string;
  };
};

export type TCatLayoutService = {
  title: string;
  items: TAccordionImageViewerItem[];
};

export type TCatLayoutProjectOverview = {
  title: string;
  description: string;
  message: string;
  rate: number;
  budget: number;
  skills: string[];
  image: StaticImageData;
};

export type TCatLayoutFreelancerCategory = {
  title: string;
  categories: ICatFreelancerCategory[];
};

export type TCatLayoutProfessionalCardItem = {
  message: string;
  user: {
    name: string;
    pic: string;
    badge: TFreelancerBadge;
    profession: string;
  };
};

export type TCatLayoutProfessionals = {
  title: string;
  professionals: TCatLayoutProfessionalCardItem[];
};

interface CatLayoutProps {
  params: string;
  intro: TCatLayoutIntro | null;
  expert: TCatLayoutExpert | null;
  services: TCatLayoutService | null;
  freelancerCategory: TCatLayoutFreelancerCategory | null;
  projectOverview: TCatLayoutProjectOverview | null;
  professionals: TCatLayoutProfessionals | null;
  faqs: IExpandableText[] | null;
  seo: TSEO | null;
}

export const navs: TNavItem[] = [
  { label: "Development & IT", path: "/cat/dev-it" },
  { label: "AI Services", path: "/cat/ai" },
  { label: "Design & Creative", path: "/cat/design-creative" },
  { label: "Sales & Marketing", path: "/cat/sales-and-marketing" },
  { label: "Admin & Customer Support", path: "/cat/admin-customer-support" },
];

export const dropdowns: TLinkDropdownItem[] = [
  { label: "Writing & Translation", path: "/cat/writing-translation" },
  { label: "Finance & Accounting", path: "/" },
  { label: "HR & Training", path: "/" },
  { label: "Legal", path: "/" },
  { label: "Engineering & Architecture", path: "/" },
  { label: "See all specializations", path: "/" },
];

const CatLayout: React.FC<CatLayoutProps> = ({
  params,
  intro,
  expert,
  services,
  freelancerCategory,
  projectOverview,
  professionals,
  faqs,
  seo,
}) => {
  return (
    <IntroLayout>
      {seo && <SEO {...seo} />}
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
        {intro && (
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
        )}

        {/* Experts */}
        {expert && (
          <div className="w-full py-20 bg-[#f9f9f9]">
            <div className="w-[70%] mx-auto">
              <div className="w-4/5">
                <h1 className="text-5xl font-semibold text-[#0e183d]">
                  {expert.title}
                </h1>
              </div>

              {/* Rate & Experience */}
              <div className="w-full flex flex-row items-center justify-between mt-16 gap-10">
                {/* Rate */}
                <div>
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="solar:star-bold"
                      className="w-8 h-8 text-yellow-500"
                    />
                    <h2 className="text-4xl font-semibold text-[#0e183d]">
                      {expert.rate.value}
                    </h2>
                  </div>
                  <p className="mt-2 text-[#0e183d]">{expert.rate.label}</p>
                </div>

                {/* Experience */}
                <div className="px-6 border-l-[1px] border-gray-300">
                  <h2 className="text-4xl font-semibold text-[#0e183d]">
                    {expert.contracts.value}K+ contracts
                  </h2>
                  <p className="mt-2 text-[#0e183d]">
                    {expert.contracts.label}
                  </p>
                </div>
                <div className="px-6 border-l-[1px] border-gray-300">
                  <h2 className="text-4xl font-semibold text-[#0e183d]">
                    {expert.skills.value} skills
                  </h2>
                  <p className="mt-2 text-[#0e183d]">{expert.skills.label}</p>
                </div>
              </div>

              {/* Experts category */}
              {expert.categories && (
                <>
                  <div className="w-full grid grid-cols-4 gap-6 mt-14">
                    {expert.categories.map((cat, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 transition-all duration-300 ease-in-out"
                      >
                        <Link href={cat.path}>
                          {/* Title */}
                          <h2 className="text-lg font-semibold text-[#0e183d]">
                            {cat.name}
                          </h2>

                          {/* Average rating */}
                          <div className="w-full flex items-center gap-2 mt-6">
                            <Icon
                              icon="solar:star-bold"
                              className="text-yellow-500 w-5 h-5"
                            />
                            <span className="text-[#0e183d]">
                              {cat.rate} average rating
                            </span>
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
                    <Button
                      type="outline"
                      label="See more skills"
                      size="large"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Service Descriptions */}
        {services && (
          <div className="w-[70%] mx-auto">
            {/* Title */}
            <div className="w-4/5">
              <h1 className="text-5xl font-semibold text-[#0e183d]">
                {services.title}
              </h1>
            </div>

            {/* Accordian image viewer */}
            <div className="mt-14">
              <AccordionImageViewer
                items={services.items}
                defaultSelected="1"
              />
              <div className="mt-10">
                <Button type="outline" label="Browse projects" size="large" />
              </div>
            </div>
          </div>
        )}

        {/* How works */}
        <div className="w-[70%] mx-auto rounded-2xl bg-zinc-900 flex p-4 mt-10">
          {/* Title & Descriptions */}
          <div className="w-1/2 p-6 flex flex-col items-start gap-4">
            <h2 className="text-sm font-semibold text-white">
              ENTERPRISE SUITE
            </h2>
            <h3 className="text-5xl font-semibold text-white mt-2">
              This is how{" "}
              {params === "dev-it"
                ? "IT Experts"
                : params === "sales-and-marketing"
                ? "Sales & Marketing"
                : params === "admin-customer-support"
                ? "Administrators"
                : "Creatives"}{" "}
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
                className="bg-[#51a8fa] rounded-xl py-3 px-10 text-xl hover:bg-white transition-all duration-300 ease-in-out"
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
        {projectOverview && (
          <div className="w-[70%] mx-auto flex gap-10 mt-14">
            {/* Project overview */}
            <div className="w-1/2 flex flex-col items-start justify-center">
              <div className="w-4/5">
                <h1 className="text-5xl font-semibold text-[#0e183d]">
                  {projectOverview.title}
                </h1>
              </div>

              {/* Overview title & description */}
              <h2 className="text-xl font-semibold mt-6 text-[#0e183d]">
                {projectOverview.description}
              </h2>
              <p className="mt-8">"{projectOverview.message}"</p>

              {/* Rate & Budget */}
              <div className="mt-6 flex flex-row items-center gap-6">
                <Rater rate={projectOverview.rate} />
                <span className="text-lg text-[#0e183d]">
                  <strong>
                    Budget: ${formatNumberWithCommas(projectOverview.budget)}
                  </strong>
                </span>
              </div>

              <div className="flex flex-row items-start gap-2 mt-4">
                <h3 className="text-lg font-semibold text-[#0e183d]">
                  Skills:{" "}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {projectOverview.skills.map((skill, index) => (
                    <SkillTag key={index} label={skill} value={skill} />
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-1/2 rounded-2xl overflow-hidden">
              <Image
                src={projectOverview.image}
                alt="Dev project overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Professionals Intro */}
        {professionals && (
          <div className="w-full py-20 bg-[#f9f9f9]">
            <div className="w-[70%] mx-auto">
              {/* Title */}
              <div className="w-4/5">
                <h1 className="text-5xl font-semibold text-[#0e183d]">
                  {professionals.title}
                </h1>
              </div>

              {/* Professionals Cards */}
              <div className="w-full grid grid-cols-2 gap-8 mt-14">
                {professionals.professionals.map((pro, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white p-8 flex flex-col items-start justify-between gap-16"
                  >
                    {/* Message */}
                    <h2 className="text-3xl">“{pro.message}”</h2>

                    {/* User */}
                    <div className="">
                      {/* Avatar & Badge */}
                      <Avatar {...pro.user} />

                      {/* Profession Title */}
                      <h4 className="mt-4">{pro.user.profession}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Read article */}
        {params === "admin-customer-support" && (
          <div className="w-[70%] mx-auto rounded-2xl bg-[#053b8d] px-12 flex flex-row items-center justify-between gap-14">
            {/* Title & Button */}
            <div className="w-3/4 flex flex-col items-start justify-between gap-8">
              <h2 className="text-4xl font-semibold text-white">
                Discover how you can build a virtual Customer Service team to
                help unlock new levels of productivity within your organization.
              </h2>
              <Link
                href="/"
                className="bg-white text-[#0e183d] py-3 px-10 rounded-xl text-lg"
              >
                Read article
              </Link>
            </div>

            {/* Image */}
            <div className="w-1/4">
              <Image
                src={ReadArticleImage}
                alt="Discover how you can build a virtual Customer Service team to
                help unlock new levels of productivity within your organization."
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* FAQ */}
        {faqs && (
          <div className="w-[70%] mx-auto flex gap-10 mt-14 bg-[#f9f9f9] rounded-2xl p-10">
            {/* Title */}
            <div className="w-1/3">
              <h1 className="text-5xl font-semibold text-[#0e183d]">
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
        {freelancerCategory && (
          <div className="w-[70%] mx-auto mt-14">
            {/* Title */}
            <div className="w-2/3">
              <h1 className="text-5xl font-semibold text-[#0e183d]">
                {freelancerCategory.title}
              </h1>
            </div>

            {/* Category */}
            {freelancerCategory.categories.map((cat, index) => (
              <div key={index} className="w-full mt-10">
                <h1 className="text-3xl font-semibold text-[#0e183d]">
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
