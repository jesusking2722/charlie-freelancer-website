import IntroLayout from "@/components/templates/IntroLayout";
import Image from "next/image";
import SearchSectionBgImage from "@/public/assets/jpgs/intro/intro_section1.jpg";
import { Button, Switch } from "@/components/atoms";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import EnterpriseSuiteImage from "@/public/assets/jpgs/intro/intro_enterprise_suite.jpg";
import ForClientsImage from "@/public/assets/jpgs/intro/intro_for_clients.jpg";
import FindWorkImage from "@/public/assets/jpgs/intro/intro_find_work.jpg";

type TFirstIntroSectionItem = {
  title: string;
  description: string;
  icon: string;
};

type TTalentCategory = {
  label: string;
  rate: number;
  skills: number;
  path: string;
};

type TSkillCategory = {
  label: string;
  path: string;
};

const Intro = () => {
  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number>(0);

  const firstIntroSectionItems: TFirstIntroSectionItem[] = [
    {
      title: "No cost to join",
      description:
        "Register and browse talent profiles, explore projects, or even book a consultation.",
      icon: "material-symbols:edit-square-outline-rounded",
    },
    {
      title: "Post a job and hire top talent",
      description:
        "Finding talent doesn’t have to be a chore. Post a job or we can search for you!",
      icon: "solar:pin-outline",
    },
    {
      title: "Work with the best—without breaking the bank",
      description:
        "Charlie Unicorn AI makes it affordable to up your work and take advantage of low transaction rates.",
      icon: "solar:shield-star-outline",
    },
  ];

  const talentCategories: TTalentCategory[] = [
    { label: "Development & IT", rate: 4.85, skills: 1853, path: "/" },
    { label: "AI Services", rate: 4.8, skills: 294, path: "/" },
    { label: "Design & Creative", rate: 4.91, skills: 968, path: "/" },
    { label: "Sales & Marketing", rate: 4.77, skills: 392, path: "/" },
    { label: "Writing & Translation", rate: 4.92, skills: 505, path: "/" },
    { label: "Admin & Customer Support", rate: 4.77, skills: 508, path: "/" },
    { label: "Finance & Accounting", rate: 4.79, skills: 214, path: "/" },
    { label: "Engineering & Architecture", rate: 4.85, skills: 650, path: "/" },
  ];

  const reasonsTurningToUs: TFirstIntroSectionItem[] = [
    {
      title: "Proof of quality",
      description:
        "Check any pro’s work samples, client reviews, and identity verification.",
      icon: "solar:star-circle-outline",
    },
    {
      title: "No cost until you hire",
      description:
        "Interview potential fits for your job, negotiate rates, and only pay for work you approve.",
      icon: "solar:dollar-outline",
    },
    {
      title: "Safe and secure",
      description:
        "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.",
      icon: "solar:check-circle-outline",
    },
  ];

  const adus: TFirstIntroSectionItem[] = [
    {
      title: "4.9/5",
      description: "Clients rate professionals on Charle Unicorn AI",
      icon: "solar:star-bold",
    },
    {
      title: "Award winner",
      description: "G2’s 2021 Best Software Awards",
      icon: "solar:star-circle-outline",
    },
  ];

  return (
    <IntroLayout>
      <div className="w-[70%] flex flex-col gap-14 mx-auto py-8">
        {/* Search */}
        <div className="relative w-full h-[700px]">
          <Image
            src={SearchSectionBgImage}
            alt="Search Section Background"
            className="absolute w-full h-full object-cover rounded-4xl"
          />
          <div className="absolute top-5 w-1/2 h-full flex flex-col items-center justify-center pl-8 gap-20">
            <h1 className="text-6xl text-white font-semibold">
              Connecting clients in need to freelancers who deliver
            </h1>

            {/* Search Part */}
            <div
              className="w-full rounded-4xl p-8"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Switch */}
              <Switch
                type="ghost"
                labels={["Find talent", "Browse jobs"]}
                activeIndex={activeSwitchIndex}
                onSelect={setActiveSwitchIndex}
              />

              {activeSwitchIndex === 0 ? (
                <>
                  {/* Search Input */}
                  <div className="w-full flex bg-white items-center rounded-full mt-4 overflow-hidden">
                    <input
                      type="search"
                      placeholder="Search by role, skills or keywords"
                      className="bg-transparent py-3 px-5 w-full rounded-full border-none outline-none"
                    />
                    <button className="flex items-center justify-center bg-black text-white font-semibold rounded-full py-2 px-5 mr-[2px] text-lg">
                      <Icon
                        icon="mingcute:search-line"
                        className="w-6 h-6 mr-2 text-[#d2ff00]"
                      />
                      Search
                    </button>
                  </div>

                  {/* Brands */}
                  <div className="flex flex-row items-center justify-center gap-8 mt-6 w-[80%] mx-auto">
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-microsoft-grey.svg"
                      }
                      alt="Microsoft"
                      width={100}
                      height={50}
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-airbnb-grey.svg"
                      }
                      alt="Microsoft"
                      width={70}
                      height={30}
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-bissell-grey.svg"
                      }
                      alt="Microsoft"
                      width={40}
                      height={30}
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-glassdoor.svg"
                      }
                      alt="Microsoft"
                      width={80}
                      height={30}
                    />
                  </div>
                </>
              ) : (
                <div className="w-full flex flex-col items-center justify-center mt-6">
                  <p className="text-lg font-semibold text-white text-center mb-4">
                    Build your freelancing career on Charlie Unicorn AI, with
                    thousands of jobs posted every week.
                  </p>
                  <Button
                    type="primary"
                    label="Explore recently posted jobs"
                    size="large"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Intro1 */}
        <div className="w-full flex gap-8 py-4">
          <div className="w-2/5 rounded-md bg-blue-200"></div>
          <div className="w-3/5">
            <h2 className="text-5xl font-semibold">
              Up your work game, it’s easy
            </h2>
            <div className="w-full flex flex-col items-start gap-4 mt-8">
              {firstIntroSectionItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start gap-4 w-full overflow-hidden"
                >
                  <Icon icon={item.icon} className="w-6 h-6 mt-1" />
                  <div className="w-full">
                    <h2 className="font-semibold text-lg ">{item.title}</h2>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 mb-4 mt-4">
                <Button type="primary" label="Sign up for free" size="medium" />
                <Button
                  type="outline"
                  label="Learn how to hire"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Browse talent */}
        <div className="w-full py-4">
          <h1 className="text-5xl font-semibold">Browse talent by category</h1>
          <p className="text-xl mt-4 text-gray-600">
            Looking for work?{" "}
            <Link href="/" className="text-blue-500 underline">
              Browse jobs
            </Link>
          </p>

          {/* Talent Categories Cards */}
          <div className="w-full grid grid-cols-4 gap-8 mt-8">
            {talentCategories.map((category, index) => (
              <Link
                href={category.path}
                key={index}
                className="px-4 py-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out"
              >
                <h2 className="font-semibold text-xl">{category.label}</h2>
                <div className="flex items-center gap-8 mt-4">
                  <div className="flex items-center gap-1">
                    <Icon
                      icon="solar:star-bold"
                      className="text-blue-500 w-5 h-5"
                    />
                    <span>{category.rate} / 5</span>
                  </div>
                  <span>{category.skills} skills</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Enterprise suite */}
        <div className="w-full bg-[#1034a6] flex rounded-lg">
          {/* Intro section */}
          <div className="w-[55%] p-8">
            {/* Titles */}
            <h1 className="text-white font-semibold text-2xl">
              Enterprise Suite
            </h1>
            <div>
              <h2 className="text-white font-semibold text-5xl mt-4">
                This is how
              </h2>
              <h2 className="text-blue-300 font-semibold text-5xl mt-2">
                good companies
              </h2>
              <h2 className="text-blue-300 font-semibold text-5xl mt-1">
                find good company.
              </h2>
            </div>

            {/* Description */}
            <p className="text-white font-semibold text-lg mt-6">
              Access the top 1% of talent on Charlie Unicorn AI, and a full
              suite of hybrid
              <br />
              workforce management tools. This is how innovation works now.
            </p>

            {/* Descriptions Group */}
            <div className="w-full flex flex-col items-start gap-2 mt-4">
              <div className="w-full flex items-center gap-2">
                <Icon
                  icon="material-symbols-light:handyman-outline"
                  className="w-5 h-5 text-blue-300"
                />
                <p className="text-white">
                  Access expert talent to fill your skill gaps
                </p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Icon
                  icon="material-symbols-light:work"
                  className="w-5 h-5 text-blue-300"
                />
                <p className="text-white">
                  Control your workflow: hire, classify and pay your talent
                </p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Icon
                  icon="material-symbols-light:headset-mic-rounded"
                  className="w-5 h-5 text-blue-300"
                />
                <p className="text-white">
                  Partner with Charlie Unicorn AI for end-to-end support
                </p>
              </div>
            </div>

            {/* Learn more button */}
            <button className="rounded-lg text-[#1034a6] bg-white text-base py-2 px-7 mt-4 cursor-pointer">
              Learn more
            </button>
          </div>

          {/* Image Section */}
          <div className="w-[45%]">
            <Image
              src={EnterpriseSuiteImage}
              alt="Enterprise Suite"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
        {/* For Clients */}
        <div className="w-full rounded-lg relative h-[600px]">
          <Image
            src={ForClientsImage}
            alt="For Clients"
            className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-lg"
          />

          <div className="absolute top-0 p-8 w-full">
            {/* Title */}
            <h1 className="text-white text-2xl font-semibold">For clients</h1>

            {/* Descriptions */}
            <div className="mt-10">
              <h2 className="text-white text-6xl font-semibold">
                Find talent <br /> your way
              </h2>
              <p className="mt-14 font-semibold text-xl text-white">
                Work with the largest network of independent <br />{" "}
                professionals and get things done—from <br /> quick turnarounds
                to big transformations.
              </p>
            </div>

            {/* Cards Group */}
            <div className="w-full grid grid-cols-3 gap-8 mt-8">
              <Link
                href="/"
                className="px-4 py-6 rounded-lg bg-blue-800 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white group"
              >
                <h2 className="text-white text-4xl font-semibold group-hover:text-blue-600">
                  Post a job <br />
                  and hire a pro
                </h2>
                <button className="flex items-center gap-2 text-white mt-4 group-hover:text-blue-600">
                  Talent Marketplace
                  <Icon
                    icon="solar:arrow-right-outline"
                    className="group-hover:text-blue-600 text-white"
                  />
                </button>
              </Link>
              <Link
                href="/"
                className="px-4 py-6 rounded-lg bg-blue-800 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white group"
              >
                <h2 className="text-white text-4xl font-semibold group-hover:text-blue-600">
                  Browse and
                  <br />
                  buy projects
                </h2>
                <button className="flex items-center gap-2 text-white mt-4 group-hover:text-blue-600">
                  Project Catalog
                  <Icon
                    icon="solar:arrow-right-outline"
                    className="group-hover:text-blue-600 text-white"
                  />
                </button>
              </Link>
              <Link
                href="/"
                className="px-4 py-6 rounded-lg bg-blue-800 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white group"
              >
                <h2 className="text-white text-4xl font-semibold group-hover:text-blue-600">
                  Get advice from an
                  <br />
                  industry expert
                </h2>
                <button className="flex items-center gap-2 text-white mt-4 group-hover:text-blue-600">
                  Consultations
                  <Icon
                    icon="solar:arrow-right-outline"
                    className="group-hover:text-blue-600 text-white"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Why businesses turn to us */}
        <div className="w-full relative flex gap-4">
          <div className="w-[70%] bg-gray-100 rounded-lg px-8 py-16">
            {/* Title */}
            <h1 className="text-6xl font-semibold">
              Why businesses
              <br />
              turn to Charlie Unicorn AI
            </h1>

            {/* Reasons */}
            <div className="w-[70%] flex flex-col items-start gap-8 mt-8">
              {reasonsTurningToUs.map((reason, index) => (
                <div
                  key={index}
                  className="w-full flex flex-row items-start gap-4 overflow-hidden"
                >
                  <Icon
                    icon={reason.icon}
                    color="black"
                    className="w-6 h-6 mt-2"
                  />
                  <div className="w-full">
                    <h2 className="text-3xl font-semibold">{reason.title}</h2>
                    <p className="text-base text-gray-500">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[30%] bg-blue-600 rounded-lg relative">
            <div className="absolute bottom-0 left-0 px-10 py-16">
              {/* Title */}
              <h1 className="text-3xl font-semibold text-white">
                We're
                <br />
                the world's work
                <br />
                marketplace
              </h1>

              {/* Ads */}
              <div className="w-full flex flex-col items-start gap-4 mt-8">
                {adus.map((ad, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row items-start gap-4 overflow-hidden"
                  >
                    <Icon
                      icon={ad.icon}
                      color="white"
                      className="w-6 h-6 mt-2"
                    />
                    <div className="w-full">
                      <h2 className="text-3xl font-semibold text-white">
                        {ad.title}
                      </h2>
                      <p className="text-base text-white">{ad.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Find greate work */}
        <div className="w-full flex bg-green-600 rounded-lg overflow-hidden">
          <Image
            src={FindWorkImage}
            alt="Find great work"
            className="w-1/2 h-auto object-cover"
          />
          <div className="w-1/2 p-8">
            {/* Title */}
            <h1 className="text-white text-2xl font-semibold">For talent</h1>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-white text-6xl font-semibold">
                Find great
                <br />
                work
              </h2>
              <p className="text-white text-xl mt-8">
                Meet clients you’re excited to work with and take
                <br />
                your career or business to new heights.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white mt-32"></div>
            <div className="w-full grid grid-cols-3 gap-8 mt-4">
              <p className="text-white">
                Find opportunities for
                <br />
                every stage of your <br />
                freelance career
              </p>
              <p className="text-white">
                Control when, where, <br />
                and how you work
              </p>
              <p className="text-white">
                Explore different ways
                <br /> to earn
              </p>
            </div>
            <button className="mt-10 bg-white py-3 px-7 text-green-600 rounded-lg cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out">
              Find opportunities
            </button>
          </div>
        </div>
        {/* Trusted by leading brands and startups */}

        {/* Skills categories */}
      </div>
    </IntroLayout>
  );
};

export default Intro;
