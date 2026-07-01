import React from "react";
import MovieCardHoverIcons from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold tracking-wide text-white sm:text-xl md:text-2xl">
        {title}
      </h2>

      <div className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden pb-4 pt-1 md:gap-4">
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
