const VideoTitle = ({ title, overview }) => {
  return (
    <div className="cinema-glow absolute inset-0 z-20 flex items-end bg-gradient-to-r from-black via-black/65 to-black/10 text-white">
      <div className="w-full bg-gradient-to-t from-[#080808] via-black/20 to-transparent px-5 pb-24 pt-28 sm:px-8 md:px-20 md:pb-28">
        <div className="relative max-w-2xl">
          <div className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-100 shadow-lg shadow-red-950/30 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-red-500 ambient-pulse" />
            Featured Now
          </div>
          <h1 className="animate-fade-up-delay-1 text-4xl font-black leading-tight drop-shadow-2xl sm:text-5xl md:text-7xl">
            {title}
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 hidden max-w-xl text-lg leading-relaxed text-white/90 drop-shadow md:block">
            {overview}
          </p>
          <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap items-center gap-3">
            <button className="inline-flex h-12 min-w-[155px] items-center justify-center gap-3 rounded-md bg-white px-7 text-lg font-bold text-black shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/85 active:scale-95">
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
            <button className="inline-flex h-12 min-w-[170px] items-center justify-center gap-3 rounded-md border border-white/15 bg-white/20 px-6 text-base font-bold text-white shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/30 active:scale-95 md:text-lg">
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
