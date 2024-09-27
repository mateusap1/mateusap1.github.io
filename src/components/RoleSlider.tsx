import { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Presentation from "../components/Presentation";
import B from "./B";

const icons = [
  "/assets/icons/web3page.svg",
  "/assets/icons/aipage.svg",
  "/assets/icons/softpage.svg",
];

type RoleSliderProps = {
  onChange: (idx: number) => void;
  onViewMyWork: (idx: number) => void;
};

export default ({ onChange, onViewMyWork }: RoleSliderProps) => {
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
        <img className="hover:cursor-pointer" src={icons[i]} alt={`Slide ${i + 1}`} />
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
            voting platform and more.
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
