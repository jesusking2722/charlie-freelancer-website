import { TProjectCard, TSEO, TServiceCard } from "@/types/components.types";
import ServicesLayout from "../ServicesLayout";
import { ProjectCard, SearchInput, ServiceCard } from "@/components/molecules";
import { Icon } from "@iconify/react";

export type TServiceCatLayoutProject = {
  title: string;
  projects: TProjectCard[];
};

interface ServicesCatLayoutProps {
  title: string;
  subtitle: string;
  param: string;
  seo: TSEO | null;
  services: TServiceCard[] | null;
  projects: TServiceCatLayoutProject[] | null;
}

const ServicesCatLayout: React.FC<ServicesCatLayoutProps> = ({
  title,
  subtitle,
  param,
  seo,
  services,
  projects,
}) => {
  return (
    <ServicesLayout seo={seo}>
      <div className="w-full flex flex-col gap-10">
        <div className="flex items-start">
          <SearchInput placeholder="Search projects" className="w-1/2" />
        </div>

        {/* Page Title by param */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold">Shop {title} Projects</h1>
          <div className="flex items-center gap-2">
            <p>{subtitle}</p>
            <button className="flex items-center gap-1 text-blue-600 font-medium cursor-pointer">
              How it works
              <Icon icon="solar:play-circle-linear" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Categories */}
        {services && (
          <div className="w-full">
            <div className="w-full grid grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        )}

        {/* Projects Categories */}
        {projects && (
          <div className="w-full mt-8 space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="w-full space-y-8">
                <h1 className="text-4xl font-semibold">{project.title}</h1>
                <div className="w-full grid grid-cols-4 gap-8">
                  {project.projects.map((pro, idx) => (
                    <ProjectCard key={idx} {...pro} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ServicesLayout>
  );
};

export default ServicesCatLayout;
