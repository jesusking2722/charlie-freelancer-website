import { Button, LinkDropdown } from "@/components/atoms";
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

  return (
    <IntroLayout>
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
                <Button type="primary" label="Get started" size="large" />
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
      </div>
    </IntroLayout>
  );
};

export default TalentMarketplace;
