export default () => {
  return (
    <div className="w-80 h-80 gap-4 flex flex-col border-2 border-offblue rounded-lg">
      <div className="px-8 pt-4 flex justify-between">
        <img className="w-8" src="assets/icons/folder.svg" />

        <img className="w-4" src="assets/icons/github.svg" />
      </div>
      <div className="px-8 pb-4 pt-4 h-full flex flex-col gap-4 border-t-2 border-offblue hover:bg-offblue hover:cursor-pointer transition duration-150 ease-in-out">
        <div className="flex flex-col gap-2 h-full">
          <span className="font-title font-bold text-xl">
            Integrating Algolia Search with WordPress Multisite
          </span>
          <span className="text-sm opacity-75">
            Building a custom multisite compatible WordPress plugin to build
            global search with Algolia.
          </span>
        </div>
        <div className="flex flex-row gap-2 text-xs opacity-50">
          <span>Algolia</span>
          <span>WordPress</span>
          <span>PHP</span>
        </div>
      </div>
    </div>
  );
};
