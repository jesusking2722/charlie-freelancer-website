import { ServicesCatLayout } from "@/components/templates";
import {
  SERVICES_DESIGN_PROJECTS,
  SERVICES_DESIGN_SEO,
  SERVICES_DESIGN_SERVICES,
} from "@/static/data/services/design";
import { useRouter } from "next/router";

const ServicesCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <ServicesCatLayout
      title="Design"
      param={category as string}
      seo={SERVICES_DESIGN_SEO}
      services={SERVICES_DESIGN_SERVICES}
      projects={SERVICES_DESIGN_PROJECTS}
    />
  );
};

export default ServicesCategory;
