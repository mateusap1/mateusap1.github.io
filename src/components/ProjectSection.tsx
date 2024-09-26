import { MutableRefObject, ReactNode, useState, useEffect } from "react";

import ProjectItem from "./ProjectItem";

export type ProjectInfo = {
  title: string;
  description: string;
  keywords: string[];
  date: string;
  url: string;
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
}: ProjectSectionProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProjects, setCurrentProjects] = useState<ProjectInfo[]>([]);

  const projectsPerPage = 4;
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    setCurrentProjects(projects.slice(startIndex, endIndex));
  }, [currentPage, projects, projectsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full grid grid-cols-3 px-32 py-16">
      <div
        ref={secRef}
        className="flex flex-col h-full items-center justify-center gap-8 text-white p-8 col-span-1 text-start"
      >
        <span className="font-title font-semibold text-4xl">{title}</span>

        {description}
      </div>
      <div className="p-8 col-span-2 col-start-2">
        <div className="flex flex-wrap justify-end gap-4 text-white">
          {currentProjects.map((p) => (
            <ProjectItem
              title={p.title}
              description={p.description}
              url={p.url}
              date={p.date}
              keywords={p.keywords}
            />
          ))}
          {Array.from({ length: 4 - currentProjects.length }, (_, i) => i).map(
            () => (
              <ProjectItem
                title=""
                description=""
                keywords={[]}
                url=""
                date=""
                hidden
              />
            )
          )}
        </div>
        <div className="mt-8 flex justify-end items-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
          >
            <img className="w-8" src="/assets/icons/arrow_back.svg" />
          </button>
          <span className="text-white">
            Page {currentPage + 1} of {pageCount}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pageCount - 1}
            className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
          >
            <img className="w-8" src="/assets/icons/arrow_forward.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectSectionRight = ({
  title,
  description,
  projects,
  secRef,
}: ProjectSectionProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProjects, setCurrentProjects] = useState<ProjectInfo[]>([]);

  const projectsPerPage = 4;
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    setCurrentProjects(projects.slice(startIndex, endIndex));
  }, [currentPage, projects, projectsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full grid grid-cols-3 px-32 py-16">
      <div className="p-8 col-span-2">
        <div className="flex flex-wrap justify-start gap-4 text-white">
          {currentProjects.map((p) => (
            <ProjectItem
              title={p.title}
              description={p.description}
              url={p.url}
              date={p.date}
              keywords={p.keywords}
            />
          ))}
          {Array.from({ length: 4 - currentProjects.length }, (_, i) => i).map(
            () => (
              <ProjectItem
                title=""
                description=""
                url=""
                date=""
                keywords={[]}
                hidden
              />
            )
          )}
        </div>
        <div className="mt-8 flex justify-start items-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
          >
            <img className="w-8" src="/assets/icons/arrow_back.svg" />
          </button>
          <span className="text-white">
            Page {currentPage + 1} of {pageCount}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pageCount - 1}
            className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
          >
            <img className="w-8" src="/assets/icons/arrow_forward.svg" />
          </button>
        </div>
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
};
