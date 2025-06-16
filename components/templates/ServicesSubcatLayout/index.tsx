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
import RadioGroup, { IRadioOption } from "@/components/molecules/RadioGroup";
import CheckboxGroup, {
  ICheckboxOption,
} from "@/components/molecules/CheckboxGroup";

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
  const [selectedDeliveryTimeOption, setSelectedDeliveryTimeOption] =
    useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "top-rated-plus",
  ]);
  const [selectedEnglishLevelOption, setSelectedEnglishLevelOption] =
    useState("");

  const deliveryOptions: IRadioOption[] = [
    {
      id: "anytime",
      label: "Any time",
      count: 67316,
      color: "blue",
    },
    {
      id: "extra-fast",
      label: "Extra fast 24 hour delivery",
      count: 25993,
      color: "blue",
    },
    {
      id: "less-7-days",
      label: "Less than 7 days",
      count: 63730,
      color: "blue",
    },
    {
      id: "less-21-days",
      label: "Less than 21 days",
      count: 66745,
      color: "blue",
    },
  ];

  const englishLevelOptions: IRadioOption[] = [
    {
      id: "anylevel",
      label: "Any level",
      count: 67254,
      color: "blue",
    },
    {
      id: "basic",
      label: "Basic",
      count: 67254,
      color: "blue",
    },
    {
      id: "conversational",
      label: "Conversational",
      count: 61886,
      color: "blue",
    },
    {
      id: "fluent",
      label: "Fluent",
      count: 49536,
      color: "blue",
    },
    {
      id: "native",
      label: "Native or bilingual",
      count: 13430,
      color: "blue",
    },
  ];

  const ratingOptions: ICheckboxOption[] = [
    {
      id: "top-rated-plus",
      label: "Top Rated Plus",
      count: 1050,
      iconUrl:
        "https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e89079cf27c1b6bfc0aeb_top-rated-plus%20(1).svg",
    },
    {
      id: "top-rated",
      label: "Top Rated",
      count: 3605,
      iconUrl:
        "https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e89079cf27c1b6bfc0aeb_top-rated-plus%20(1).svg",
    },
    {
      id: "rising-talent",
      label: "Rising Talent",
      count: 609,
      iconUrl:
        "https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e89079cf27c1b6bfc0aeb_top-rated-plus%20(1).svg",
    },
  ];

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
          {/* Price */}
          <FilterDropdown placeholder="Price">
            <div className="w-[400px]">
              <h1 className="mb-4 px-1 text-lg font-semibold">Price</h1>
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

          {/* Delivery Time */}
          <FilterDropdown placeholder="Delivery Time">
            <div className="w-[400px]">
              <h1 className="mb-4 px-1 text-lg font-semibold">Delivery Time</h1>
              <RadioGroup
                options={deliveryOptions}
                defaultValue="anytime"
                onChange={(value: string) => {
                  setSelectedDeliveryTimeOption(value);
                }}
                name="delivery-options"
              />
            </div>
          </FilterDropdown>

          {/* Talent Details */}
          <FilterDropdown placeholder="Talent Details">
            <div className="min-w-[600px]">
              {/* Title */}
              <h1 className="mb-6 px-1 text-lg font-semibold">
                Talent Details
              </h1>

              {/* Talent Quality & English Level */}
              <div className="w-full flex px-1">
                {/* Talent Quality */}
                <div className="w-1/2 space-y-4">
                  <h2>Talent Quality</h2>
                  <CheckboxGroup
                    options={ratingOptions}
                    defaultValues={["top-rated-plus"]}
                    onChange={(values) => {
                      setSelectedOptions(values);
                      console.log("Selected:", values);
                    }}
                  />
                </div>

                {/* English Level */}
                <div className="w-1/2 space-y-4">
                  <h2>English Level</h2>
                  <RadioGroup
                    options={englishLevelOptions}
                    defaultValue="anylevel"
                    onChange={(value: string) => {
                      setSelectedEnglishLevelOption(value);
                    }}
                    name="english-level-options"
                    hiddenBtns={true}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-full px-1 bg-gray-200 h-[1px] mt-14"></div>
            </div>
          </FilterDropdown>
        </section>
      </div>
    </ServicesLayout>
  );
};

export default ServicesSubcatLayout;
