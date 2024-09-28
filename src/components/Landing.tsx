import { MutableRefObject, useRef } from "react";
import RoleSlider from "./RoleSlider";
import Navbar from "./Navbar";

const backgrounds = [
  "/portifolio/assets/bgweb3.jpg",
  "/portifolio/assets/bgai.jpg",
  "/portifolio/assets/bgsoft.jpg",
];

type LandingProps = {
  goToAboutMe: () => void;
  goToWork: (idx: number) => void;
};

export default ({ goToAboutMe, goToWork }: LandingProps) => {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const changeBackground = (idx: number) => {
    if (ref.current == null) return;

    ref.current.style.backgroundImage = `url("${backgrounds[idx]}")`;
  };

  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url("${backgrounds[0]}")` }}
      className={`h-screen bg-center bg-contain bg-no-repeat bg-center md:bg-cover transition-all duration-500 ease-in-out`}
    >
      <div className="absolute h-screen inset-0 bg-black opacity-60"></div>
      <Navbar goToAboutMe={goToAboutMe} />
      <div className="absolute inset-0 flex items-center px-8 md:p-8 z-10">
        <div className="w-full md:px-48">
          <div className="w-full flex flex-col gap-8 text-slate-200">
            <RoleSlider onViewMyWork={goToWork} onChange={changeBackground} />
          </div>
        </div>
      </div>
    </div>
  );
};
