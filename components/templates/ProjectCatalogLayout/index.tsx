import Link from "next/link";
import IntroLayout from "../IntroLayout";
import NavLayout, { TNavItem } from "../NavLayout";
import { LinkDropdown, SEO } from "@/components/atoms";
import { TLinkDropdownItem, TSEO } from "@/types/components.types";

interface ProjectCatalogLayoutProps {
  seo: TSEO | null;
}

const ProjectCatalogLayout: React.FC<ProjectCatalogLayoutProps> = ({ seo }) => {
  const navs: TNavItem[] = [
    { label: "Development & IT", path: "/cat/dev-it" },
    { label: "AI Services", path: "/cat/ai" },
    { label: "Design & Creative", path: "/cat/design-creative" },
    { label: "Sales & Marketing", path: "/cat/sales-and-marketing" },
    { label: "Admin & Customer Support", path: "/cat/admin-customer-support" },
  ];

  const dropdowns: TLinkDropdownItem[] = [
    { label: "Writing & Translation", path: "/cat/writing-translation" },
    { label: "Finance & Accounting", path: "/cat/finance-accounting" },
    { label: "HR & Training", path: "/cat/hr-training" },
    { label: "Legal", path: "/cat/legal" },
    {
      label: "Engineering & Architecture",
      path: "/cat/engineering-architecture",
    },
    { label: "See all specializations", path: "/hire" },
  ];

  return (
    <IntroLayout>
      {/* SEO */}
      {seo && <SEO {...seo} />}

      {/* Navigation Menu */}
      <NavLayout>
        <nav role="navigation" aria-label="Main categories">
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
        </nav>
      </NavLayout>
    </IntroLayout>
  );
};

export default ProjectCatalogLayout;
