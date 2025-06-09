import { Footer, Header } from "@/components/organisms";
import { INavItem } from "@/types/components.types";
import { FindTalent, FindWork, WhatNew, WhyCharlie } from "./NavChildren";
import Head from "next/head";

const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems: INavItem[] = [
    {
      label: "Find talent",
      path: "/",
      active: false,
      children: <FindTalent />,
    },
    {
      label: "Find work",
      path: "/",
      active: false,
      children: <FindWork />,
    },
    {
      label: "Why Charlie",
      path: "/",
      active: false,
      children: <WhyCharlie />,
    },
    {
      label: "What's new",
      path: "/",
      active: false,
      children: <WhatNew />,
    },
    {
      label: "Enterprise",
      path: "/",
      active: false,
    },
    {
      label: "Pricing",
      path: "/",
      active: false,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Charlie Unicorn AI Freelancer — Find Freelancers & Jobs</title>
        <meta
          name="description"
          content="Join Charlie Unicorn AI Freelancer to find skilled freelancers or discover new job opportunities powered by AI."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://charlieunicornai-freelancer.com/" />
        <meta
          property="og:title"
          content="Charlie Unicorn AI Freelancer — Find Freelancers & Jobs"
        />
        <meta
          property="og:description"
          content="Join Charlie Unicorn AI Freelancer to find skilled freelancers or discover new job opportunities powered by AI."
        />
        <meta
          property="og:url"
          content="https://charlieunicornai-freelancer.com/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header navItems={navItems} />
      {children}
      <Footer />
    </div>
  );
};

export default IntroLayout;
