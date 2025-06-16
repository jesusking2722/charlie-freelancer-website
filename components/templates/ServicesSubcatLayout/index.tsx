import { TSEO, TServiceCard } from "@/types/components.types";
import ServicesLayout from "../ServicesLayout";
import {
  PriceRangeSlider,
  SearchInput,
  ServiceCard,
} from "@/components/molecules";
import { TNavItem } from "../NavLayout";
import { Breadcrumbs } from "@/components/organisms";
import { Icon } from "@iconify/react";
import { FilterDropdown, Slider } from "@/components/atoms";
import { useState } from "react";

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
  const [minPrice, setMinPrice] = useState<number>(5);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleOnPriceClear = (min: number, max: number) => {
    setMinPrice(5);
    setMaxPrice(1000);
  };

  const handleOnPriceApply = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

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

        {/* Filters Group */}
        <section className="w-full flex flex-row items-center gap-4">
          <FilterDropdown placeholder="Price">
            <div className="w-[400px]">
              <h1 className="mb-4 px-1 text-lg">Price</h1>
              <PriceRangeSlider
                minValue={minPrice}
                maxValue={maxPrice}
                minLimit={5}
                maxLimit={1000}
                onMinValue={setMinPrice}
                onMaxValue={setMaxPrice}
                onClear={handleOnPriceClear}
                onApply={handleOnPriceApply}
              />
            </div>
          </FilterDropdown>
        </section>
      </div>
    </ServicesLayout>
  );
};

export default ServicesSubcatLayout;
