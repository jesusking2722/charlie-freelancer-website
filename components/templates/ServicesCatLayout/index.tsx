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
      <main className="w-full flex flex-col gap-10">
        <header className="flex items-start">
          <SearchInput placeholder="Search projects" className="w-1/2" />
        </header>

        <section className="space-y-6">
          <h1 className="text-4xl font-semibold">Shop {title} Projects</h1>
          <div className="flex items-center gap-2">
            <p>{subtitle}</p>
            <button className="flex items-center gap-1 text-blue-600 font-medium cursor-pointer">
              How it works
              <Icon icon="solar:play-circle-linear" className="w-5 h-5" />
            </button>
          </div>
        </section>

        {services && (
          <section className="w-full" aria-label="Service categories">
            <div className="w-full grid grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>
        )}

        {projects && (
          <section
            className="w-full mt-8 space-y-20"
            aria-label="Project categories"
          >
            {projects.map((project, index) => (
              <article key={index} className="w-full space-y-8">
                <h2 className="text-4xl font-semibold">{project.title}</h2>
                <div className="w-full grid grid-cols-4 gap-8">
                  {project.projects.map((pro, idx) => (
                    <ProjectCard key={idx} {...pro} />
                  ))}
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </ServicesLayout>
  );
};

export default ServicesCatLayout;
