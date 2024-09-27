import { useRef, useState, MutableRefObject, useEffect } from "react";

import {
  ProjectSectionRight,
  ProjectSectionLeft,
  ProjectInfo,
} from "../components/ProjectSection";
import B from "../components/B";
import AboutMe from "../components/AboutMe";
import Landing from "../components/Landing";

type ProjectJSON = {
  web3: ProjectInfo[];
  ai: ProjectInfo[];
  software: ProjectInfo[];
};

export default () => {
  const aboutMeRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const web3Ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const aiRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const softRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const [projects, setProjects] = useState<ProjectJSON | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const viewMyWork = (idx: number) => {
    if (web3Ref.current == null) return;
    if (aiRef.current == null) return;
    if (softRef.current == null) return;

    let scrollMode: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: isMobile ? "start" : "center",
    };

    if (idx === 0) {
      web3Ref.current.scrollIntoView(scrollMode);
    } else if (idx === 1) {
      aiRef.current.scrollIntoView(scrollMode);
    } else {
      softRef.current.scrollIntoView(scrollMode);
    }
  };

  const goToAboutMe = () => {
    if (aboutMeRef.current == null) return;

    aboutMeRef.current.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "start" : "center",
    });
  };

  const loadProjects = async () => {
    try {
      const response = await fetch("/data/projects.json");
      if (!response.ok) {
        return Promise.reject("Network response was not ok");
      }

      const data: ProjectJSON = await response.json();
      setProjects(data);
    } catch (error) {
      return Promise.reject(`Error loading projects: ${error}`);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="w-full font-display">
      <Landing goToAboutMe={goToAboutMe} goToWork={viewMyWork} />

      <AboutMe secRef={aboutMeRef} />

      {projects ? (
        <>
          <ProjectSectionLeft
            secRef={web3Ref}
            title={"I developed dApps and smart contracts."}
            projects={projects.web3}
            description={
              <p className="opacity-60">
                I am a <B>blockchain engineer</B> with over 3 years of work
                experience in the web3 space. While at MSVN, I developed over 20
                projects, including custom dApps, smart contracts, NFT sites, a
                voting platform and more. I can quickly integrate browser
                wallets, develop websites, generate NFTs and design
                smart-contracts.
              </p>
            }
            isMobile={isMobile}
          />

          <ProjectSectionRight
            secRef={aiRef}
            title={"I work closely with AI specialists at university."}
            projects={projects.ai}
            description={
              <p className="opacity-60">
                I have worked in over 5 data related projects, including
                web-scraping, web-crawling, data analysis, cleaning and parsing.
                I have also worked in two AI projects at university and 1 as a
                personal project. I have good knowledge of Machine Learning
                algorithms, Neural Networks, State Of The Art Computer Vision
                techniques and more.
              </p>
            }
            isMobile={isMobile}
          />

          <ProjectSectionLeft
            secRef={softRef}
            title={"I can handle highly technical programming tasks."}
            projects={projects.software}
            description={
              <p className="opacity-60">
                I am a <B>software engineer</B> and <B>web developer</B>. While
                at MSVN, I developed over 20 sites with focus on high-quality
                mantainable code by making use of proper sofware engineering
                practices. As a computer science undergraduate, I am capable of
                handling highly technical programming tasks, such as functional
                programing techniques, maximum efficiency programs and
                domain-specific tasks.
              </p>
            }
            isMobile={isMobile}
          />
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};
