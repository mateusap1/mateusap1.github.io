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
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = isMobile ? 1 : 4;
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-16 xl:px-32 md:py-16">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-0">
        <div
          ref={secRef}
          className="flex flex-col items-start md:items-center justify-center gap-8 text-white p-4 md:p-8 md:col-span-1 text-start"
        >
          <h2 className="font-title font-semibold text-3xl md:text-4xl">
            {title}
          </h2>
          <div className="text-sm md:text-base">{description}</div>
        </div>
        <div className="md:col-span-2 md:col-start-2">
          <div className="flex flex-col sm:flex-row flex-wrap items-center md:justify-end gap-4 text-white">
            {currentProjects.map((p, index) => (
              <ProjectItem
                key={index}
                title={p.title}
                description={p.description}
                url={p.url}
                date={p.date}
                keywords={p.keywords}
              />
            ))}
            {Array.from(
              { length: projectsPerPage - currentProjects.length },
              (_, i) => (
                <ProjectItem
                  key={`empty-${i}`}
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
          <div className="mt-8 flex justify-center md:justify-end items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
              aria-label="Previous page"
            >
              <img
                className="w-6 md:w-8"
                src="/assets/icons/arrow_back.svg"
                alt="Previous"
              />
            </button>
            <span className="text-white text-sm md:text-base">
              Page {currentPage + 1} of {pageCount}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
              aria-label="Next page"
            >
              <img
                className="w-6 md:w-8"
                src="/assets/icons/arrow_forward.svg"
                alt="Next"
              />
            </button>
          </div>
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
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = isMobile ? 1 : 4;
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-16 xl:px-32 md:py-16">
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-8 md:gap-0">
        <div className="md:col-span-2">
          <div className="flex flex-col sm:flex-row flex-wrap items-center md:justify-start gap-4 text-white">
            {currentProjects.map((p, index) => (
              <ProjectItem
                key={index}
                title={p.title}
                description={p.description}
                url={p.url}
                date={p.date}
                keywords={p.keywords}
              />
            ))}
            {!isMobile &&
              Array.from(
                { length: projectsPerPage - currentProjects.length },
                (_, i) => (
                  <ProjectItem
                    key={`empty-${i}`}
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
          <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
              aria-label="Previous page"
            >
              <img
                className="w-6 md:w-8"
                src="/assets/icons/arrow_back.svg"
                alt="Previous"
              />
            </button>
            <span className="text-white text-sm md:text-base">
              Page {currentPage + 1} of {pageCount}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50"
              aria-label="Next page"
            >
              <img
                className="w-6 md:w-8"
                src="/assets/icons/arrow_forward.svg"
                alt="Next"
              />
            </button>
          </div>
        </div>
        <div
          ref={secRef}
          className="flex flex-col items-center md:items-end justify-center gap-8 text-white p-4 md:p-8 md:col-start-3 md:col-span-1 text-end"
        >
          <h2 className="font-title font-semibold text-3xl md:text-4xl">
            {title}
          </h2>
          <div className="text-sm md:text-base">{description}</div>
        </div>
      </div>
    </div>
  );
};
