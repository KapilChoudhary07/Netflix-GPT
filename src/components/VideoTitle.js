const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-r from-black via-black/60 to-transparent text-white">
      <div className="w-full bg-gradient-to-t from-[#080808] via-black/10 to-transparent px-5 pb-24 pt-28 sm:px-8 md:px-20 md:pb-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-5 hidden max-w-xl text-lg leading-relaxed text-white/90 md:block">
            {overview}
          </p>
          <div className="mt-7 flex items-center gap-3">
            <button className="inline-flex h-12 min-w-[155px] items-center justify-center gap-3 rounded-md bg-white px-7 text-lg font-bold text-black shadow-lg transition hover:bg-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 2v20l17-10L4 2z" />
              </svg>
              Play
            </button>
            <button className="hidden h-12 min-w-[180px] items-center justify-center gap-3 rounded-md bg-white/25 px-7 text-lg font-bold text-white backdrop-blur transition hover:bg-white/35 md:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 10v7" />
                <path d="M12 7h.01" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
