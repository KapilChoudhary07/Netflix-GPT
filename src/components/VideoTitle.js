const VideoTitle = ({ title, overview }) => {
  return (
    <div className="cinema-glow absolute inset-0 z-20 flex items-end bg-gradient-to-r from-black/50 via-black/10 to-transparent text-white">
      <div className="w-full px-5 pb-20 pt-28 sm:px-8 sm:pb-24 md:px-20 md:pb-28">
        <div className="relative max-w-2xl">
          {/* Featured badge */}
          <div className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/35 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-red-100 shadow-lg shadow-red-950/30 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-red-500 ambient-pulse" />
            Featured Now
          </div>

          {/* Title */}
          <h1 className="animate-fade-up-delay-1 text-4xl font-black leading-[1.05] drop-shadow-2xl sm:text-5xl md:text-[4.5rem]">
            {title}
          </h1>

          {/* Overview */}
          <p className="animate-fade-up-delay-2 mt-5 hidden max-w-xl text-base leading-relaxed text-white/80 drop-shadow sm:block md:text-lg">
            {overview?.length > 180 ? overview.slice(0, 180) + "…" : overview}
          </p>

          {/* Action buttons */}
          <div className="animate-fade-up-delay-3 mt-7 flex flex-wrap items-center gap-3">
            {/* Play */}
            <button className="group inline-flex h-12 min-w-[145px] items-center justify-center gap-2.5 rounded-lg bg-white px-7 text-base font-bold text-black shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-2xl active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 2v20l17-10L4 2z" />
              </svg>
              Play
            </button>

            {/* More Info */}
            <button className="group inline-flex h-12 min-w-[155px] items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/20 px-6 text-base font-bold text-white shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/30 hover:border-white/35 active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 10v7" />
                <path d="M12 7h.01" />
              </svg>
              More Info
            </button>

            {/* Add to List */}
            <button aria-label="Add to My List" className="group inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
