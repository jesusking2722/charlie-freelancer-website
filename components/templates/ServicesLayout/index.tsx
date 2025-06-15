import IntroLayout from "../IntroLayout";
import { SEO } from "@/components/atoms";
import { TSEO } from "@/types/components.types";
import { NavHoverDropdown } from "@/components/organisms";
import { SERVICES_NAV_ITEMS } from "@/static/data/nav/services";

interface ServicesLayoutProps {
  seo: TSEO | null;
  children: React.ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ seo, children }) => {
  return (
    <IntroLayout>
      {/* SEO */}
      {seo && <SEO {...seo} />}

      {/* Navigation Menu */}
      <NavHoverDropdown
        title={{ label: "Project Catalog", path: "/services" }}
        navItems={SERVICES_NAV_ITEMS}
      />
      <main className="w-full py-8 mt-[150px]">{children}</main>
    </IntroLayout>
  );
};

export default ServicesLayout;
