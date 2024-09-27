type NavbarProps = {
  goToAboutMe: () => void;
}


export default ({ goToAboutMe }: NavbarProps) => (
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
          <img
            className="rotate-90 group-hover:hidden"
            src="assets/icons/doublearrow.svg"
          />
          <img
            className="hidden group-hover:inline rotate-90"
            src="assets/icons/doublearrow_offblue.svg"
          />
        </button>
      </div>
    </div>
  </nav>
);
