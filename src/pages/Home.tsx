import { useState, useEffect, useRef, MutableRefObject } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Presentation from "../components/Presentation";
import ProjectItem from "../components/ProjectItem";

const backgrounds = [
  "/assets/bgweb3.jpg",
  "/assets/bgai.jpg",
  "/assets/bgweb3.jpg",
];

type RoleSliderProps = {
  onChange: (idx: number) => void;
  onViewMyWork: (idx: number) => void;
};

const RoleSlider = ({ onChange, onViewMyWork }: RoleSliderProps) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      beforeChange={(_, newIndex) => onChange(newIndex)}
      className="z-20"
      {...settings}
    >
      <Presentation
        title="I create web3 applications."
        description={
          <span className="text-xl text-gray-600">
            I'm a <span className="text-[#8EA7CA]">blockchain engineer</span>{" "}
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
        }
        onViewMyWork={() => onViewMyWork(0)}
      />
      <Presentation
        title="I work with AI."
        description={
          <span className="text-xl text-gray-600">
            I'm a <span className="text-[#8EA7CA]">blockchain engineer</span>{" "}
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
        }
        onViewMyWork={() => onViewMyWork(1)}
      />
      <Presentation
        title="I create web3 applications."
        description={
          <span className="text-xl text-gray-600">
            I'm a <span className="text-[#8EA7CA]">blockchain engineer</span>{" "}
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
        }
        onViewMyWork={() => onViewMyWork(2)}
      />
    </Slider>
  );
};

export default () => {
  const [currentPage, setCurrentPage] = useState(0);

  const backgroundRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const web3Ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const changeBackground = (idx: number) => {
    if (backgroundRef.current == null) return;

    backgroundRef.current.style.backgroundImage = `url("${backgrounds[idx]}")`;
  };

  const viewMyWork = (idx: number) => {
    if (web3Ref.current == null) return;

    web3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="w-full font-display">
      <div
        ref={backgroundRef}
        style={{ backgroundImage: `url("${backgrounds[0]}")` }}
        className={`h-screen bg-center bg-cover transition-all duration-1000 ease-in-out`}
      >
        <div className="z-10 absolute h-screen inset-0 bg-black opacity-75"></div>
        <nav className="z-20 relative p-8">
          <div className="flex justify-end">
            <div
              onClick={() => changeBackground(1)}
              className="w-fit flex flex-row justify-center hover:opacity-75"
            >
              <button className="border border-[#8EA7CA] px-4 py-2 text-[#8EA7CA]">
                I also work with AI
              </button>
              <button className="border border-[#8EA7CA] bg-[#8EA7CA] px-2 py-2">
                <img src="assets/doublearrow.svg" />
              </button>
            </div>
          </div>
        </nav>
        <div className="h-full flex p-8">
          <div className="z-20 relative h-full w-full flex px-48 py-24">
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
        <div ref={web3Ref} className="flex flex-col text-start h-full items-center justify-center gap-8 col-span-1 text-white p-8">
          <span className="font-title font-semibold text-4xl">
            I developed dApps and smart contracts.
          </span>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <div ref={web3Ref} className="flex flex-col text-end h-full items-center justify-center gap-8 col-span-1 col-start-3 text-white p-8">
          <span className="font-title font-semibold text-4xl">
            I developed web3 projects.
          </span>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 px-32 py-16">
        <div ref={web3Ref} className="flex flex-col h-full items-center justify-center gap-8 col-span-1 text-white p-8">
          <span className="font-title font-semibold text-4xl">
            I developed web3 projects.
          </span>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-4 col-span-2 col-start-2 text-white p-8">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};
