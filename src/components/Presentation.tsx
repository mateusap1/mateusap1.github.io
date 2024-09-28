type PresentationProps = {
  title: string;
  description: JSX.Element;
  onViewMyWork: () => void;
};

export default ({ title, description, onViewMyWork }: PresentationProps) => {
  return (
    <div className="md:py-8 mb-8">
      <span className="md:text-lg tracking-widest text-offblue">
        Hi, my name is
      </span>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex md:gap-4 flex-col text-3xl md:text-4xl lg:text-6xl font-semibold font-title text-stone-300">
          <span className="">Mateus Santos.</span>
          <span className="opacity-60">{title}</span>
        </div>
        <div className="lg:w-1/2 md:w-3/4 flex flex-col md:text-xl text-gray-500">{description}</div>
        <button
          onClick={onViewMyWork}
          className="w-fit px-4 py-2 border border-offblue text-offblue hover:bg-offblue hover:text-white hover:font-bold"
        >
          View my work
        </button>
      </div>
    </div>
  );
};
