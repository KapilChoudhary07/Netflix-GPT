import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="relative z-30 bg-[#080808] pb-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/45 to-transparent" />
        <div className="space-y-10 px-4 pt-8 sm:px-6 md:px-12 md:pt-10">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top Rated" movies={movies.topratedMovies} />
          <MovieList title="Trending" movies={movies.ontheairMovies} />
          <MovieList title="TV Shows" movies={movies.tvshow} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
