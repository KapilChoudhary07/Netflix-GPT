// import React from "react";
// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";

// const SecondaryContainer = () => {
//   const movies = useSelector((store) => store.movies);
//   return (
//     movies.nowPlayingMovies && (
//       <div className=" z-30 bg-black mt-5   ">
//         <div className="  md:-mt-72  relative pl-5 ">   
//         <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
//         <MovieList title={"Popular"} movies={movies.popularMovies} />
//         <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
//         <MovieList title={"Trending"} movies={movies.ontheairMovies} />
//         <MovieList title={"TV SHOW"} movies={movies.tvshow} />
//         {/* <MovieList title={"Upcoming"} movies={movies.upcomingMovies} /> */}
//       </div>
//       </div>
//     )
//   );
// };

// export default SecondaryContainer;



import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return null;

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