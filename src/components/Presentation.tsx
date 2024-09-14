type PresentationProps = {
  title: string;
  description: JSX.Element;
  onViewMyWork: () => void;
};

export default ({ title, description, onViewMyWork }: PresentationProps) => {
  return (
    <div>
      <span className="text-lg tracking-widest text-[#8EA7CA]">
        Hi, my name is
      </span>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex gap-4 flex-col text-6xl font-semibold font-title">
          <span className="">Mateus Santos.</span>
          <span className="opacity-60">{title}</span>
        </div>
        <div className="w-1/2 flex flex-col text-xl">{description}</div>
        <button
          onClick={onViewMyWork}
          className="w-fit px-4 py-2 border border-[#8EA7CA] text-[#8EA7CA] hover:opacity-75"
        >
          View my work
        </button>
      </div>
    </div>
  );
};
