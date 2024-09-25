import { useRef, MutableRefObject, ReactNode, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ProjectSectionRight,
  ProjectSectionLeft,
} from "../components/ProjectSection";
import B from "../components/B";
import RoleSlider from "../components/RoleSlider";
import AboutMe from "../components/AboutMe";

const backgrounds = [
  "/assets/bgweb3.jpg",
  "/assets/bgai.jpg",
  "/assets/bgsoft.jpg",
];

export default () => {
  const backgroundRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const aboutMeRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const web3Ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const aiRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const softRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const changeBackground = (idx: number) => {
    if (backgroundRef.current == null) return;

    backgroundRef.current.style.backgroundImage = `url("${backgrounds[idx]}")`;
  };

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
      <div
        ref={backgroundRef}
        style={{ backgroundImage: `url("${backgrounds[0]}")` }}
        className={`h-screen bg-center bg-cover transition-all duration-500 ease-in-out`}
      >
        <div className="z-10 absolute h-screen inset-0 bg-black opacity-60"></div>
        <nav className="z-20 relative p-8">
          <div className="flex justify-end">
            <div
              onClick={goToAboutMe}
              className="w-fit flex flex-row justify-center hover:opacity-75"
            >
              <button className="border border-offblue px-4 py-2 text-offblue">
                About Me
              </button>
              <button className="border border-offblue bg-offblue px-2 py-2">
                <img className="rotate-90" src="assets/icons/doublearrow.svg" />
              </button>
            </div>
          </div>
        </nav>
        <div className="h-full flex p-8">
          <div className="z-20 relative h-full w-full flex px-48">
            <div className="w-full flex flex-col gap-8 text-slate-200">
              <RoleSlider
                onViewMyWork={viewMyWork}
                onChange={(idx) => changeBackground(idx)}
              />
            </div>
          </div>
        </div>
      </div>

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
