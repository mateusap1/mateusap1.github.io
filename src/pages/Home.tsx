import { useRef, MutableRefObject } from "react";

import {
  ProjectSectionRight,
  ProjectSectionLeft,
} from "../components/ProjectSection";
import B from "../components/B";
import AboutMe from "../components/AboutMe";
import Landing from "../components/Landing";

export default () => {
  const aboutMeRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const web3Ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const aiRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const softRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const viewMyWork = (idx: number) => {
    if (web3Ref.current == null) return;
    if (aiRef.current == null) return;
    if (softRef.current == null) return;

    if (idx === 0) {
      web3Ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (idx === 1) {
      aiRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      softRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const goToAboutMe = () => {
    if (aboutMeRef.current == null) return;
    aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="w-full font-display">
      <Landing goToAboutMe={goToAboutMe} goToWork={viewMyWork} />

      <AboutMe secRef={aboutMeRef} />

      <ProjectSectionLeft
        secRef={web3Ref}
        title={"I developed dApps and smart contracts."}
        description={
          <p className="opacity-60">
            I am a <B>blockchain engineer</B> with over 3 years of work
            experience in the web3 space. While at MSVN, I developed over 20
            projects, including custom dApps, smart contracts, NFT sites, a
            voting platform and more. I can quickly integrate browser wallets,
            develop websites, generate NFTs and design smart-contracts. Don't
            believe me?
          </p>
        }
      />

      <ProjectSectionRight
        secRef={aiRef}
        title={"I work closely with AI specialists at university."}
        description={
          <p className="opacity-60">
            I have worked in over 5 data related projects, including
            web-scraping, web-crawling, data analysis, cleaning and parsing. I
            have also worked in two AI projects at university and 1 as a
            personal project. I have good knowledge of Machine Learning
            algorithms, Neural Networks, State Of The Art Computer Vision
            techniques and more. Don't believe me?
          </p>
        }
        isSideRight
      />

      <ProjectSectionLeft
        secRef={softRef}
        title={"I can handle highly technical programming tasks."}
        description={
          <p className="opacity-60">
            I am a <B>software engineer</B> and <B>web developer</B>. While at
            MSVN, I developed over 20 sites with focus on high-quality
            mantainable code by making use of proper sofware engineering
            practices. As a computer science undergraduate, I am capable of
            handling highly technical programming tasks, such as functional
            programing techniques, maximum efficiency programs and
            domain-specific tasks. Don't believe me?
          </p>
        }
      />
    </div>
  );
};
