


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end pb-[20%] md:justify-center md:pb-0
                    pl-4 md:pl-16 pr-4
                    bg-gradient-to-r from-black/90 via-black/50 to-transparent
                    bg-gradient-to-t md:bg-gradient-to-r">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-xl leading-tight">
        {title}
      </h1>

      <p className="hidden md:block text-sm md:text-base text-gray-200 mt-4 mb-6 max-w-md leading-relaxed">
        {overview}
      </p>

      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <button className="flex items-center gap-2 bg-white hover:bg-white/85 text-black
                           font-bold text-sm md:text-base
                           px-5 md:px-8 py-2 md:py-3 rounded-md
                           transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2v20l17-10L4 2z" />
          </svg>
          Play
        </button>

        <button className="flex items-center gap-2 bg-gray-500/60 hover:bg-gray-500/40 text-white
                           font-bold text-sm md:text-base
                           px-5 md:px-8 py-2 md:py-3 rounded-md
                           backdrop-blur-sm transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;