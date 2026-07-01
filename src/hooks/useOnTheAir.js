import { useDispatch, useSelector } from "react-redux";
import { addontheairMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";



const useOnTheAirMovies = () => {

      const dispatch = useDispatch();
      const onTheAirMovies = useSelector((store) => store.movies.ontheairMovies);

  useEffect(() => {
    if (onTheAirMovies) return;

    const getOnTheAirMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?page=1",
        API_Options
      );

      const json = await data.json();
      dispatch(addontheairMovies(json.results));
    };

    getOnTheAirMovies();
  }, [dispatch, onTheAirMovies]);
}


export default useOnTheAirMovies;
