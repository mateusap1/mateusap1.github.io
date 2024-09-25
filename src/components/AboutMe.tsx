import { MutableRefObject } from "react";

type AboutMeProps = {
  secRef: MutableRefObject<HTMLDivElement | null>;
};

export default ({ secRef }: AboutMeProps) => (
  <div ref={secRef} className="w-full grid grid-cols-3 px-32 py-16">
    <div className="flex flex-wrap justify-center items-center gap-4 col-span-1 text-white p-8">
      <div className="group hover:cursor-pointer hover:bg-slate-300 hover:border-0 relative rounded-lg border-4 border-gray-400 flex items-end w-72 h-72">
        <img
          className="absolute grayscale group-hover:grayscale-0 h-72"
          src="/assets/profile.png"
        />
      </div>
    </div>
    <div className="flex flex-col text-start h-full items-start gap-8 col-start-2 col-span-2 text-white p-8">
      <span className="font-title font-semibold text-4xl">About me.</span>
      <div className="flex flex-col gap-4 opacity-60">
        <p>
          Hi, I’m Mateus! I’m a 6th-semester Computer Science student at the
          Universidade de Brasília with over 3 years of experience as a software
          developer. I have a strong interest in functional programming, smart
          contracts, AI, and data science.
        </p>
        <p>
          My journey in tech began at the age of 14, creating games using the
          Construct 2 engine. By 16, I was diving into more advanced topics
          through Harvard’s CS50x online course, where I gained proficiency in C
          and Python, along with foundational computer science concepts. At 17,
          I started freelancing on platforms like Fiverr, further honing my
          skills in web scraping and data parsing.
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
          specifically detecting ramularia disease in plants, while the other
          involves implementing Behavior-Driven Development (BDD) in robotic
          missions through a custom-built simulator.
        </p>
        <p>
          During my time at university, I’ve developed key skills including
          understanding how CPUs and memory work, AI and computer vision
          concepts, network and Internet protocols, software engineering best
          practices, and scientific thinking and writing.
        </p>
      </div>
    </div>
  </div>
);
