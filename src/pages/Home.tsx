import { useState, useEffect, useRef, MutableRefObject } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Presentation from "../components/Presentation";

const backgrounds = [
  "/assets/bgweb3.jpg",
  "/assets/bgai.jpg",
  "/assets/bgweb3.jpg",
];

type RoleSliderProps = {
  onChange: (idx: number) => void;
};

const RoleSlider = ({ onChange }: RoleSliderProps) => {
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
        onViewMyWork={() => {}}
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
        onViewMyWork={() => {}}
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
        onViewMyWork={() => {}}
      />
    </Slider>
  );
};

export default () => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const changeBackground = (idx: number) => {
    if (ref.current == null) return;

    ref.current.style.backgroundImage = `url("${backgrounds[idx]}")`;
  };

  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url("${backgrounds[0]}")` }}
      className={`h-screen bg-center bg-cover font-display`}
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
            <RoleSlider onChange={(idx) => changeBackground(idx)} />
          </div>
        </div>
      </div>
    </div>
  );
};
