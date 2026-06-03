// import { useDispatch, useSelector } from "react-redux";
// import { addtopratedMovies } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import { API_Options } from "../utils/constants";



// const useTopRatedMovies = () => {

//       const dispatch = useDispatch();
//              const top_ratedMovies = useSelector((store) => store.movies.top_ratedMovies);


//   const getTopRatedMovies = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/top_rated?page=1",
//       API_Options
//     );

//     const json = await data.json();
//     // console.log(json.results);---------
//     dispatch(addtopratedMovies(json.results));
//   };
//   useEffect(() => {
//    !top_ratedMovies && getTopRatedMovies();
//   // }, [top_ratedMovies]);
//   }, [top_ratedMovies, getTopRatedMovies]);
// }


// export default useTopRatedMovies;

import { useDispatch, useSelector } from "react-redux";
import { addtopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const top_ratedMovies = useSelector(
    (store) => store.movies.top_ratedMovies
  );

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_Options
      );

      const json = await data.json();

      dispatch(addtopratedMovies(json.results));
    };

    !top_ratedMovies && getTopRatedMovies();
  }, [top_ratedMovies, dispatch]);
};

export default useTopRatedMovies;