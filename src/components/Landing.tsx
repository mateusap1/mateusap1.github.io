import { MutableRefObject, useRef } from "react";
import RoleSlider from "./RoleSlider";

const backgrounds = [
  "/assets/bgweb3.jpg",
  "/assets/bgai.jpg",
  "/assets/bgsoft.jpg",
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
      className={`h-screen bg-center bg-cover transition-all duration-500 ease-in-out`}
    >
      <div className="z-10 absolute h-screen inset-0 bg-black opacity-60"></div>
      <nav className="z-20 relative p-8">
        <div className="flex justify-end">
          <div
            onClick={goToAboutMe}
            className="group w-fit flex flex-row justify-center hover:cursor-pointer"
          >
            <button className="border group-hover:bg-offblue group-hover:text-white group-hover:font-semibold border-offblue px-4 py-2 text-offblue">
              About Me
            </button>
            <button className="border border-offblue group-hover:bg-transparent bg-offblue px-2 py-2">
              <img className="rotate-90 group-hover:hidden" src="assets/icons/doublearrow.svg" />
              <img className="hidden group-hover:inline rotate-90" src="assets/icons/doublearrow_offblue.svg" />
            </button>
          </div>
        </div>
      </nav>
      <div className="h-full flex p-8">
        <div className="z-20 relative h-full w-full flex px-48">
          <div className="w-full flex flex-col gap-8 text-slate-200">
            <RoleSlider onViewMyWork={goToWork} onChange={changeBackground} />
          </div>
        </div>
      </div>
    </div>
  );
};
