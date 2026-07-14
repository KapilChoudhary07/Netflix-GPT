import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return null;

  return (
    <div className="relative z-30 bg-[#080808] pb-20">
      {/* Top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      {/* Section label */}
      <div className="px-4 pt-8 sm:px-6 md:px-12 md:pt-10">
        <div className="mb-8 flex items-center gap-3 animate-fade-in">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 shadow-lg shadow-red-950/50">
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 2v20l17-10L4 2z" />
            </svg>
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Browse Content
          </span>
        </div>
      </div>

      {/* Movie rows */}
      <div className="space-y-8 px-4 sm:px-6 md:px-12">
        <MovieList title="Now Playing 🎬" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular 🔥"     movies={movies.popularMovies} />
        <MovieList title="Top Rated ⭐"   movies={movies.topRatedMovies} />
        <MovieList title="Trending 📈"    movies={movies.onTheAirMovies} />
        <MovieList title="TV Shows 📺"    movies={movies.tvShowMovies} />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default SecondaryContainer;
