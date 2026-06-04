


import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) return null;

  return (
    <div className="relative z-20 bg-black -mt-32 md:-mt-56 pb-10">
      <div className="pl-4 md:pl-8 space-y-6">
        <MovieList title="Now Playing"  movies={movies.nowPlayingMovies} />
        <MovieList title="Popular"      movies={movies.popularMovies} />
        <MovieList title="Top Rated"    movies={movies.topratedMovies} />
        <MovieList title="Trending"     movies={movies.ontheairMovies} />
        <MovieList title="TV Shows"     movies={movies.tvshow} />
      </div>
    </div>
  );
};

export default SecondaryContainer;