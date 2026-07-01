const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-r from-black via-black/60 to-transparent text-white">
      <div className="w-full bg-gradient-to-t from-[#080808] via-transparent to-transparent px-4 pb-20 pt-28 sm:px-6 md:px-12 md:pb-64">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 hidden max-w-xl text-base leading-relaxed text-white/85 md:block">
            {overview}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button className="inline-flex h-11 items-center gap-2 rounded bg-white px-5 text-base font-bold text-black transition hover:bg-white/80 md:px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 2v20l17-10L4 2z" />
              </svg>
              Play
            </button>
            <button className="hidden h-11 rounded bg-white/20 px-6 text-base font-semibold text-white backdrop-blur transition hover:bg-white/30 md:inline-flex md:items-center">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
