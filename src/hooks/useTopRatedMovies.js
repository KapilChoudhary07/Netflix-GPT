import { useDispatch, useSelector } from "react-redux";
import { addtopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";



const useTopRatedMovies = () => {

      const dispatch = useDispatch();
      const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    if (topRatedMovies) return;

    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_Options
      );

      const json = await data.json();
      dispatch(addtopratedMovies(json.results));
    };

    getTopRatedMovies();
  }, [dispatch, topRatedMovies]);
}


export default useTopRatedMovies;
