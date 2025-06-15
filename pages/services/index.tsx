import { ServicesLayout } from "@/components/templates";
import { TSEO } from "@/types/components.types";

const Services = () => {
  const seo: TSEO = {
    title:
      "Project Catalog - Freelance Services for Your Business | Charlie Unicorn AI - Freelancer",
    description: "",
    keywords: "",
    url: "/services",
  };

  return (
    <ServicesLayout seo={seo}>
      <div></div>
    </ServicesLayout>
  );
};

export default ServicesLayout;
