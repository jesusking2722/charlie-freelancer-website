import { ServicesCatLayout } from "@/components/templates";
import { TServiceCatLayoutProject } from "@/components/templates/ServicesCatLayout";
import {
  SERVICES_DESIGN_PROJECTS,
  SERVICES_DESIGN_SEO,
  SERVICES_DESIGN_SERVICES,
} from "@/static/data/services/design";
import {
  SERVICES_DEVELOPMENT_IT_PROJECTS,
  SERVICES_DEVELOPMENT_IT_SEO,
  SERVICES_DEVELOPMENT_IT_SERVICES,
} from "@/static/data/services/development-it";
import {
  SERVICES_MARKETING_PROJECTS,
  SERVICES_MARKETING_SEO,
  SERVICES_MARKETING_SERVICES,
} from "@/static/data/services/marketing";
import {
  SERVICES_VIDEO_AUDIO_PROJECTS,
  SERVICES_VIDEO_AUDIO_SEO,
  SERVICES_VIDEO_AUDIO_SERVICES,
} from "@/static/data/services/video-audio";
import {
  SERVICES_WRITING_TRANSLATION_PROJECTS,
  SERVICES_WRITING_TRANSLATION_SEO,
  SERVICES_WRITING_TRANSLATION_SERVICES,
} from "@/static/data/services/writing-translation";
import { useRouter } from "next/router";

const ServicesCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  // writing-translation

  const getCategoryData = (category: string) => {
    switch (category) {
      case "design":
        return {
          title: "Design",
          subtitle: "Captivate your audience. (No creative prowess needed.)",
          seo: SERVICES_DESIGN_SEO,
          services: SERVICES_DESIGN_SERVICES,
          projects: SERVICES_DESIGN_PROJECTS,
        };

      case "video-audio":
        return {
          title: "Video & Audio",
          subtitle:
            "Find the perfect video or audio talent to tell your unique story.",
          seo: SERVICES_VIDEO_AUDIO_SEO,
          services: SERVICES_VIDEO_AUDIO_SERVICES,
          projects: SERVICES_VIDEO_AUDIO_PROJECTS,
        };

      case "development-it":
        return {
          title: "Development & IT",
          subtitle:
            "Build, streamline, and secure your digital presence. Then test it and perfect it.",
          seo: SERVICES_DEVELOPMENT_IT_SEO,
          services: SERVICES_DEVELOPMENT_IT_SERVICES,
          projects: SERVICES_DEVELOPMENT_IT_PROJECTS,
        };

      case "marketing":
        return {
          title: "Marketing",
          subtitle:
            "Get the word out. Create marketing systems and communications that drive sales.",
          seo: SERVICES_MARKETING_SEO,
          services: SERVICES_MARKETING_SERVICES,
          projects: SERVICES_MARKETING_PROJECTS,
        };

      case "writing-translation":
        return {
          title: "Writing & Translation",
          subtitle: "Make your content sing — in any language.",
          seo: SERVICES_WRITING_TRANSLATION_SEO,
          services: SERVICES_WRITING_TRANSLATION_SERVICES,
          projects: SERVICES_WRITING_TRANSLATION_PROJECTS,
        };

      default:
        return {
          title: "",
          subtitle: "",
          seo: null,
          services: null,
          projects: null,
        };
    }
  };

  const data = getCategoryData(category as string);

  return (
    <ServicesCatLayout
      title={data.title}
      subtitle={data.subtitle}
      param={category as string}
      seo={data.seo}
      services={data.services}
      projects={data.projects}
    />
  );
};

export default ServicesCategory;
