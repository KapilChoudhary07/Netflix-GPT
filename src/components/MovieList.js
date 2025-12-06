


// import React from 'react'
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log(movies);

// //   if (!movies || movies.length === 0) {
// //     return (
// //         <div >
// //           {/* <h1 >{title}</h1> */}
// //         {/* <p>No movies available</p> */}
// //       </div>
// //     );
// //   }

//   return (
//     <div className=' px-2 py-0    '>
//       <h1 className='text-2xl  text-white  py-2 px-6'>{title}</h1>
//     <div className="flex  overflow-x-scroll ">
//       <div className="flex">
//         {movies?.map((movie) => (
//           <MovieCard 
//             key={movie.id}
//             posterPath={movie.poster_path}   
//           />
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;


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
//             key={movie.id.posterPath}
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
    <div className="mb-3 ">
      <h2 className="text-white text-xl md:text-3xl font-semibold mb-4 ml-6">
        {title}
      </h2>

      <div
        className="flex gap-3 overflow-x-scroll scrollbar-hide
        py-1 "
      >
        {movies.map((movie) => (
          <MovieCardHoverIcons
            key={movie.id}                // ✅ yahi sahi hai
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
