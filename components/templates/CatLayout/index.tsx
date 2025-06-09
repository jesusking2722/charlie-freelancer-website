import Link from "next/link";
import IntroLayout from "../IntroLayout";
import NavLayout from "../NavLayout";
import { LinkDropdown } from "@/components/atoms";
import type { TLinkDropdownItem } from "@/types/components.types";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";

import MicroSoftImage from "@/public/assets/svgs/talent-marketplace/microsoft.svg";
import AirbnbImage from "@/public/assets/svgs/talent-marketplace/airbnb.svg";
import AutomatticImage from "@/public/assets/svgs/talent-marketplace/automattic.svg";
import BissellImage from "@/public/assets/svgs/talent-marketplace/bissell.svg";
import ClouldflareImage from "@/public/assets/pngs/talent-marketplace/cloudflare.png";

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
}

const CatLayout: React.FC<CatLayoutProps> = ({ params, intro }) => {
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
          </div>
        </div>
      </div>
    </IntroLayout>
  );
};

export default CatLayout;
