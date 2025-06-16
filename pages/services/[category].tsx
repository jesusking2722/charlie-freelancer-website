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
import { TSEO, TServiceCard } from "@/types/components.types";
import { useRouter } from "next/router";

const ServicesCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  // marketing

  const getTitle = (): string => {
    switch (category) {
      case "design":
        return "Design";

      case "video-audio":
        return "Video & Audio";

      case "development-it":
        return "Development & IT";

      case "marketing":
        return "Marketing";

      default:
        return "";
    }
  };

  const getSubtitle = (): string => {
    switch (category) {
      case "design":
        return "Captivate your audience. (No creative prowess needed.)";

      case "video-audio":
        return "Find the perfect video or audio talent to tell your unique story.";

      case "development-it":
        return "Build, streamline, and secure your digital presence. Then test it and perfect it.";

      case "marketing":
        return "Get the word out. Create marketing systems and communications that drive sales.";

      default:
        return "";
    }
  };

  const getSEO = (): TSEO | null => {
    switch (category) {
      case "design":
        return SERVICES_DESIGN_SEO;

      case "video-audio":
        return SERVICES_VIDEO_AUDIO_SEO;

      case "development-it":
        return SERVICES_DEVELOPMENT_IT_SEO;

      case "marketing":
        return SERVICES_MARKETING_SEO;

      default:
        return null;
    }
  };

  const getServices = (): TServiceCard[] | null => {
    switch (category) {
      case "design":
        return SERVICES_DESIGN_SERVICES;

      case "video-audio":
        return SERVICES_VIDEO_AUDIO_SERVICES;

      case "development-it":
        return SERVICES_DEVELOPMENT_IT_SERVICES;

      case "marketing":
        return SERVICES_MARKETING_SERVICES;

      default:
        return null;
    }
  };

  const getProjects = (): TServiceCatLayoutProject[] | null => {
    switch (category) {
      case "design":
        return SERVICES_DESIGN_PROJECTS;

      case "video-audio":
        return SERVICES_VIDEO_AUDIO_PROJECTS;

      case "development-it":
        return SERVICES_DEVELOPMENT_IT_PROJECTS;

      case "marketing":
        return SERVICES_MARKETING_PROJECTS;

      default:
        return null;
    }
  };

  return (
    <ServicesCatLayout
      title={getTitle()}
      subtitle={getSubtitle()}
      param={category as string}
      seo={getSEO()}
      services={getServices()}
      projects={getProjects()}
    />
  );
};

export default ServicesCategory;
