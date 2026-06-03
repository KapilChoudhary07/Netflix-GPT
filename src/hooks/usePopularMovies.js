import { useDispatch, useSelector } from "react-redux";
import { addpopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";



const usePopularMovies = () => {

      const dispatch = useDispatch();
       const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_Options
    );

    const json = await data.json();
    // console.log(json.results);---------
    dispatch(addpopularMovies(json.results));
  };
  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, [popularMovies]);
}


export default usePopularMovies;