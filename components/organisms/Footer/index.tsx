import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/atoms";

type TNavItem = {
  label: string;
  path: string;
};

const Footer = () => {
  const forClientsNavs: TNavItem[] = [
    { label: "How to hire", path: "/" },
    { label: "Talent Marketplace", path: "/" },
    { label: "Project Catalog", path: "/" },
    { label: "Hire an agency", path: "/" },
    { label: "Enterprise", path: "/" },
    { label: "Business Plus", path: "/" },
    { label: "Any Hire", path: "/" },
    { label: "Contract-to-hire", path: "/" },
    { label: "Direct Contracts", path: "/" },
    { label: "Hire worldwide", path: "/" },
  ];

  const forTalentNavs: TNavItem[] = [
    { label: "How to find work", path: "/" },
    { label: "Direct Contracts", path: "/" },
    { label: "Find freelance jobs worldwide", path: "/" },
    { label: "Win work with ads", path: "/" },
    { label: "Exclusive resources with Freelancer Plus", path: "/" },
  ];

  const resourcesNavs: TNavItem[] = [
    { label: "Help & support", path: "/" },
    { label: "Success stories", path: "/" },
    { label: "Our reviews", path: "/" },
    { label: "Resources", path: "/" },
    { label: "Blog", path: "/" },
    { label: "Affiliate programme", path: "/" },
    { label: "Free Business Tools", path: "/" },
    { label: "Release notes", path: "/" },
  ];

  const companyNavs: TNavItem[] = [
    { label: "About us", path: "/" },
    { label: "Leadership", path: "/" },
    { label: "Investor relations", path: "/" },
    { label: "Careers", path: "/" },
    { label: "Our impact", path: "/" },
    { label: "Press", path: "/" },
    { label: "Contact us", path: "/" },
    { label: "Partners", path: "/" },
    { label: "Trust, safety & security", path: "/" },
    { label: "Modern slavery statement", path: "/" },
  ];

  return (
    <footer className="w-full mt-14 mb-8">
      <div className="w-[80%] mx-auto rounded-lg bg-zinc-900 px-28 py-14">
        {/* Navs Group */}
        <div className="w-full flex gap-10">
          {/* For clients */}
          <div className="w-1/4">
            <h1 className="text-[#a5a5a5] text-sm">For Clients</h1>
            <ul className="flex flex-col items-start gap-4 mt-6">
              {forClientsNavs.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.path}
                    className="text-white hover:underline text-sm"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For talent */}
          <div className="w-1/4">
            <h1 className="text-[#a5a5a5] text-sm">For Talent</h1>
            <ul className="flex flex-col items-start gap-4 mt-6">
              {forTalentNavs.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.path}
                    className="text-white hover:underline text-sm"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="w-1/4">
            <h1 className="text-[#a5a5a5] text-sm">Resources</h1>
            <ul className="flex flex-col items-start gap-4 mt-6">
              {resourcesNavs.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.path}
                    className="text-white hover:underline text-sm"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="w-1/4">
            <h1 className="text-[#a5a5a5] text-sm">Company</h1>
            <ul className="flex flex-col items-start gap-4 mt-6">
              {companyNavs.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.path}
                    className="text-white hover:underline text-sm"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow us & download mobile app */}
        <div className="w-full flex flex-row items-center justify-between mt-8">
          <div className="flex flex-row items-center gap-4">
            <h3 className="text-[#a5a5a5] text-base">Follow us</h3>

            {/* Social buttons */}
            <div className="flex flex-row items-center gap-4">
              <Button type="icon" icon="entypo-social:twitter" size="medium" />
              <Button type="icon" icon="entypo-social:facebook" size="medium" />
              <Button type="icon" icon="fa6-brands:telegram" size="medium" />
              <Button type="icon" icon="entypo-social:youtube" size="medium" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <h3 className="text-[#a5a5a5] text-base">Mobile app</h3>

            {/* Download buttons */}
            <div className="flex flex-row items-center gap-2">
              <Button type="icon" icon="fa-brands:apple" size="medium" />
              <Button type="icon" icon="fa6-brands:android" size="medium" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#333333] mt-6"></div>

        {/* Information */}
        <div className="w-full flex flex-row items-center gap-14 mt-4">
          <h1 className="text-[#a5a5a5] text-sm">
            © 2024 - {new Date().getFullYear()} Charlie Unicorn AI.
          </h1>

          {/* Navs Group */}
          <ul className="flex flex-row items-center gap-4">
            <li>
              <Link href="/" className="text-white hover:underline text-sm">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:underline text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:underline text-sm">
                CA Notice at Collection
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:underline text-sm">
                Cookie Settings
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:underline text-sm">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
