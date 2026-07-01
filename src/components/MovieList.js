import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);

  if (!movies?.length) return null;

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 520, behavior: "smooth" });
    }
  };

  return (
    <section className="row-shell group/row relative">
      {/* Row header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-red-600 shadow-lg shadow-red-900/60" />
          <h2 className="text-lg font-bold tracking-wide text-white sm:text-xl md:text-2xl">
            {title}
          </h2>
          <span className="hidden items-center gap-1 text-xs font-semibold text-red-500 opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 md:flex">
            Explore all
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        <span className="text-xs font-medium text-white/30 md:hidden">Swipe →</span>
      </div>

      {/* Scroll container wrapper */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-xl shadow-black/40 backdrop-blur opacity-0 transition-all duration-300 group-hover/row:opacity-100 hover:bg-red-600 hover:border-red-600 active:scale-90 md:-translate-x-3"
          aria-label="Scroll left"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div
          ref={rowRef}
          className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-visible px-1 pb-5 pt-1 md:gap-4"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              rating={movie.vote_average}
              title={movie.original_title || movie.name}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-xl shadow-black/40 backdrop-blur opacity-0 transition-all duration-300 group-hover/row:opacity-100 hover:bg-red-600 hover:border-red-600 active:scale-90 md:translate-x-3"
          aria-label="Scroll right"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#080808] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#080808] to-transparent" />
      </div>
    </section>
  );
};

export default MovieList;
