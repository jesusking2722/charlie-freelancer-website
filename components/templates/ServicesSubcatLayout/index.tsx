import { TSEO, TServiceCard } from "@/types/components.types";
import ServicesLayout from "../ServicesLayout";
import { SearchInput, ServiceCard } from "@/components/molecules";
import { TNavItem } from "../NavLayout";
import { Breadcrumbs } from "@/components/organisms";
import { Icon } from "@iconify/react";
import { Slider } from "@/components/atoms";

interface ServicesSubcatLayoutProps {
  title: string;
  subtitle: string;
  category: TNavItem[];
  seo: TSEO | null;
  services: TServiceCard[];
}

const ServicesSubcatLayout: React.FC<ServicesSubcatLayoutProps> = ({
  seo,
  title,
  subtitle,
  category,
  services,
}) => {
  return (
    <ServicesLayout seo={seo}>
      <div className="w-full flex flex-col gap-10">
        {/* Header */}
        <header className="w-full space-y-8">
          {/* Search bar */}
          <div className="flex items-start">
            <SearchInput placeholder="Search projects" className="w-1/2" />
          </div>

          {/* Breadcrumbs */}
          <Breadcrumbs homePath="/services" navs={category} />
        </header>

        {/* Main */}

        {/* Title & Description */}
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <div className="flex items-center gap-2">
            <p>{subtitle}</p>
            <button className="flex items-center gap-1 text-blue-600 font-medium cursor-pointer">
              How it works
              <Icon icon="solar:play-circle-linear" className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Services */}
        <section className="w-full">
          <Slider
            itemsPerView={{
              default: 1,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 6,
            }}
            gap={24}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} size="small" />
            ))}
          </Slider>
        </section>
      </div>
    </ServicesLayout>
  );
};

export default ServicesSubcatLayout;
