

import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_Options
      );

      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results));
    };

    !nowPlayingMovies && getNowPlayingMovies();
  }, [nowPlayingMovies, dispatch]);
};

export default useNowPlayingMovies;