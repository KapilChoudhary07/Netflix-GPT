import { useDispatch, useSelector } from "react-redux";
import { addontheairMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";



const useOnTheAirMovies = () => {

      const dispatch = useDispatch();
      const on_the_air = useSelector((store) => store.movies.on_the_air);


  const getOnTheAirMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_Options
    );

    const json = await data.json();
    // console.log(json.results);---------
    dispatch(addontheairMovies(json.results));
  };

  useEffect(() => {
   !on_the_air && getOnTheAirMovies();
  // }, [on_the_air]);
  }, [on_the_air, getOnTheAirMovies]);
}


export default useOnTheAirMovies;