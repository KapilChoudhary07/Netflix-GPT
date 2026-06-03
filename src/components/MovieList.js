



import React from "react";
import MovieCardHoverIcons from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-2">
      <h2 className="text-white text-lg md:text-2xl font-semibold mb-3 ml-2">
        {title}
      </h2>
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2
                      scrollbar-hide scroll-smooth">
        {movies.map((movie) => (
          <MovieCardHoverIcons
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;