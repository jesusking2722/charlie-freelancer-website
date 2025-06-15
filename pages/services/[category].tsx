import { ServicesCatLayout } from "@/components/templates";
import { TServiceCatLayoutProject } from "@/components/templates/ServicesCatLayout";
import {
  SERVICES_DESIGN_PROJECTS,
  SERVICES_DESIGN_SEO,
  SERVICES_DESIGN_SERVICES,
} from "@/static/data/services/design";
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

  const getTitle = (): string => {
    switch (category) {
      case "design":
        return "Design";

      case "video-audio":
        return "Video & Audio";

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

      default:
        return null;
    }
  };

  return (
    <ServicesCatLayout
      title={getTitle()}
      param={category as string}
      seo={getSEO()}
      services={getServices()}
      projects={getProjects()}
    />
  );
};

export default ServicesCategory;
