import { useRef, MutableRefObject, ReactNode, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Presentation from "../components/Presentation";
import ProjectItem from "../components/ProjectItem";

const backgrounds = [
  "/assets/bgweb3.jpg",
  "/assets/bgai.jpg",
  "/assets/bgsoft.jpg",
];

type BProps = {
  children: ReactNode;
};

const B = ({ children }: BProps) => (
  <span className="text-offblue font-semibold">{children}</span>
);

type RoleSliderProps = {
  onChange: (idx: number) => void;
  onViewMyWork: (idx: number) => void;
};

const RoleSlider = ({ onChange, onViewMyWork }: RoleSliderProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    customPaging: (i: number) => (
      <div
        className={`${
          i === currentPage && "bg-offblue"
        } rounded-lg flex items-center justify-center hover:opacity-75 hover:cursor-pointer`}
      >
        <img
          src={
            i === 0
              ? "assets/icons/web3page.svg"
              : i === 1
              ? "assets/icons/aipage.svg"
              : "assets/icons/softpage.svg"
          }
          alt={`Slide ${i + 1}`}
        />
      </div>
    ),
  };

  return (
    <Slider
      beforeChange={(_, newIndex) => {
        setCurrentPage(newIndex);
        onChange(newIndex);
      }}
      className="z-20"
      {...settings}
    >
      <Presentation
        title="I create web3 applications."
        description={
          <span className="">
            I am a <B>blockchain engineer</B> with over 3 years of work
            experience in the web3 space. While at MSVN, I developed over 20
            projects, including custom dApps, smart contracts, NFT sites, a
            voting platform and more. I can quickly integrate browser wallets,
            develop websites, generate NFTs and design smart-contracts.
          </span>
        }
        onViewMyWork={() => onViewMyWork(0)}
      />
      <Presentation
        title="I work with data & AI."
        description={
          <span>
            I have worked in over 5 data related projects, including
            web-scraping, web-crawling, data analysis, cleaning and parsing. I
            have good knowledge of Machine Learning algorithms, Neural Networks,
            State Of The Art Computer Vision techniques and more.
          </span>
        }
        onViewMyWork={() => onViewMyWork(1)}
      />
      <Presentation
        title="I create high-quality software."
        description={
          <span>
            I am a <B>software engineer</B> and <B>web developer</B>. While at
            MSVN, I developed over 20 sites with focus on high-quality
            mantainable code by making use of proper sofware engineering
            practices.
          </span>
        }
        onViewMyWork={() => onViewMyWork(2)}
      />
    </Slider>
  );
};

export default () => {
  const backgroundRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

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
              onClick={() => changeBackground(1)}
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

      <div className="w-full grid grid-cols-3 px-32 py-16">
        <div className="flex flex-wrap justify-center items-center gap-4 col-span-1 text-white p-8">
          <img className="w-64" src="/assets/profile.png" />
        </div>
        <div className="flex flex-col text-start h-full items-start gap-8 col-start-2 col-span-2 text-white p-8">
          <span className="font-title font-semibold text-4xl">About me.</span>
          <div className="flex flex-col gap-4 opacity-60">
            <p>
              Hi, I’m Mateus! I’m a 6th-semester Computer Science student at the
              Universidade de Brasília with over 3 years of experience as a
              software developer. I have a strong interest in functional
              programming, smart contracts, AI, and data science.
            </p>
            <p>
              My journey in tech began at the age of 14, creating games using
              the Construct 2 engine. By 16, I was diving into more advanced
              topics through Harvard’s CS50x online course, where I gained
              proficiency in C and Python, along with foundational computer
              science concepts. At 17, I started freelancing on platforms like
              Fiverr, further honing my skills in web scraping and data parsing.
            </p>
            <p>
              I later joined the Canadian software company MSVN, where I spent 3
              years developing websites, smart contracts, and building Web3/NFT
              platforms.
            </p>
          </div>
          <span className="text-start font-title font-semibold text-2xl">
            University Experience.
          </span>
          <div className="flex flex-col gap-4 opacity-60">
            <p>
              I joined the Universidade de Brasília at 18, and I’m currently
              involved in two scientific research projects. One focuses on AI,
              specifically detecting ramularia disease in plants, while the
              other involves implementing Behavior-Driven Development (BDD) in
              robotic missions through a custom-built simulator.
            </p>
            <p>
              During my time at university, I’ve developed key skills including
              understanding how CPUs and memory work, AI and computer vision
              concepts, network and Internet protocols, software engineering
              best practices, and scientific thinking and writing.
            </p>
          </div>
          {/* <p className="opacity-60">
            Hi, I am Mateus! I am a 6th semester CS undergraduate student at
            Universidade de Brasília with more than 3 years of work experience
            as a software developer. I enjoy areas such as functional
            programming, smart contracts, AI and Data Science. I started my
            journey when I was 14 by creating games with a game engine called
            Construct 2. At 16, I started learning more advanced concepts
            through the CS50x Harvard online course where I learned the C and
            Python programming languages as well as basic Computer Science
            concepts. At 17, I started working as a freelancer in platforms like
            Fiverr where I gained more experience and reinforced my web-scraping
            and data parsing skills. I then joined the canadian software company
            MSVN where I spent 3 years building websites, smart contracts and
            web3 / NFT platforms. 
          </p> */}
        </div>
      </div>

      <div className="w-full grid grid-cols-3 px-32 py-16">
        <div
          ref={web3Ref}
          className="flex flex-col text-start h-full items-center justify-center gap-8 col-span-1 text-white p-8"
        >
          <span className="font-title font-semibold text-4xl">
            I developed dApps and smart contracts.
          </span>
          <p className="opacity-60">
            I am a <B>blockchain engineer</B> with over 3 years of work
            experience in the web3 space. While at MSVN, I developed over 20
            projects, including custom dApps, smart contracts, NFT sites, a
            voting platform and more. I can quickly integrate browser wallets,
            develop websites, generate NFTs and design smart-contracts. Don't
            believe me?
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-4 col-span-2 col-start-2 text-white p-8">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>

      <div className="w-full grid grid-cols-3 px-32 py-16">
        <div className="flex flex-wrap justify-start gap-4 col-span-2 text-white p-8">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
        <div
          ref={aiRef}
          className="flex flex-col text-end h-full items-center justify-center gap-8 col-span-1 col-start-3 text-white p-8"
        >
          <span className="font-title font-semibold text-4xl">
            I work closely with AI specialists at university.
          </span>
          <p className="opacity-60">
            I have worked in over 5 data related projects, including
            web-scraping, web-crawling, data analysis, cleaning and parsing. I
            have also worked in two AI projects at university and 1 as a
            personal project. I have good knowledge of Machine Learning
            algorithms, Neural Networks, State Of The Art Computer Vision
            techniques and more. Don't believe me?
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 px-32 py-16">
        <div
          ref={softRef}
          className="flex flex-col h-full items-center justify-center gap-8 col-span-1 text-white p-8"
        >
          <span className="font-title font-semibold text-4xl">
            I can handle highly technical programming tasks.
          </span>
          <p className="opacity-60">
            I am a <B>software engineer</B> and <B>web developer</B>. While at
            MSVN, I developed over 20 sites with focus on high-quality
            mantainable code by making use of proper sofware engineering
            practices. As a computer science undergraduate, I am capable of
            handling highly technical programming tasks, such as functional
            programing techniques, maximum efficiency programs and
            domain-specific tasks. Don't believe me?
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-4 col-span-2 col-start-2 text-white p-8">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>

      {/* <div className="fixed inset-0 w-full h-screen p-8 bg-slate-200">

      </div> */}
    </div>
  );
};
