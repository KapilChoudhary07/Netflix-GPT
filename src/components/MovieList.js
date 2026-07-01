import React from "react";
import MovieCardHoverIcons from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <section className="row-shell">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-7 w-1 rounded-full bg-red-600 shadow-lg shadow-red-900/60" />
          <h2 className="text-xl font-bold tracking-wide text-white sm:text-2xl md:text-3xl">
            {title}
          </h2>
        </div>
        <span className="hidden text-sm font-semibold text-white/45 transition hover:text-white md:block">
          Swipe to explore
        </span>
      </div>

      <div className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden px-1 pb-6 pt-2 md:gap-4">
        {movies.map((movie) => (
          <MovieCardHoverIcons
            key={movie.id}
            title={movie.title || movie.name || movie.original_title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
