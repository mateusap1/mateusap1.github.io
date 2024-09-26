import { MutableRefObject, ReactNode } from "react";

import ProjectItem from "./ProjectItem";

export type ProjectInfo = {
  title: string;
  description: string;
  keywords: string[];
  url?: string;
};

type ProjectSectionProps = {
  secRef: MutableRefObject<HTMLDivElement | null>;
  title: string;
  description: ReactNode;
  projects: ProjectInfo[];
  isSideRight?: boolean;
};

export const ProjectSectionLeft = ({
  title,
  description,
  projects,
  secRef,
}: ProjectSectionProps) => (
  <div className="w-full grid grid-cols-3 px-32 py-16">
    <div
      ref={secRef}
      className="flex flex-col h-full items-center justify-center gap-8 text-white p-8 col-span-1 text-start"
    >
      <span className="font-title font-semibold text-4xl">{title}</span>

      {description}
    </div>
    <div className="flex flex-wrap gap-4 text-white p-8 col-span-2 col-start-2 justify-end">
      {projects.slice(0, 4).map((p) => (
        <ProjectItem
          title={p.title}
          description={p.description}
          keywords={p.keywords}
        />
      ))}
      {/* <ProjectItem
        title="Integrating Algolia Search with WordPress Multisite"
        description="Building a custom multisite compatible WordPress plugin to build global search with Algolia."
        keywords={["Algolia", "WordPress", "PHP"]}
      /> */}
    </div>
  </div>
);

export const ProjectSectionRight = ({
  title,
  description,
  secRef,
}: ProjectSectionProps) => (
  <div className="w-full grid grid-cols-3 px-32 py-16">
    <div className="flex flex-wrap gap-4 text-white p-8 col-span-2 justify-start">
      <ProjectItem
        title="Integrating Algolia Search with WordPress Multisite"
        description="Building a custom multisite compatible WordPress plugin to build global search with Algolia."
        keywords={["Algolia", "WordPress", "PHP"]}
      />
      <ProjectItem
        title="Integrating Algolia Search with WordPress Multisite"
        description="Building a custom multisite compatible WordPress plugin to build global search with Algolia."
        keywords={["Algolia", "WordPress", "PHP"]}
      />
      <ProjectItem
        title="Integrating Algolia Search with WordPress Multisite"
        description="Building a custom multisite compatible WordPress plugin to build global search with Algolia."
        keywords={["Algolia", "WordPress", "PHP"]}
      />
      <ProjectItem
        title="Integrating Algolia Search with WordPress Multisite"
        description="Building a custom multisite compatible WordPress plugin to build global search with Algolia."
        keywords={["Algolia", "WordPress", "PHP"]}
      />
    </div>
    <div
      ref={secRef}
      className="flex flex-col h-full items-center justify-center gap-8 text-white p-8 col-start-3 col-span-1 text-end"
    >
      <span className="font-title font-semibold text-4xl">{title}</span>

      {description}
    </div>
  </div>
);
