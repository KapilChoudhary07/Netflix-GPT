
// import React from "react";
// import MovieCardHoverIcons from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   if (!movies) return null;

//   return (
//     <div className="mb-3 ">
//       <h2 className="text-white text-xl md:text-3xl font-semibold mb-4 ml-6">
//         {title}
//       </h2>

//       <div
//         className="flex gap-3 overflow-x-scroll scrollbar-hide
//         py-1 "
//       >
//         {movies.map((movie) => (
//           <MovieCardHoverIcons
//             key={movie.id}                // ✅ yahi sahi hai
//             posterPath={movie.poster_path}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;



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