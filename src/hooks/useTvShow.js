import { useDispatch, useSelector } from "react-redux";
import { addtvshow } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";



const useTvShow = () => {

      const dispatch = useDispatch();
       const tvshowMovies = useSelector((store) => store.movies.tvshow);

  useEffect(() => {
    if (tvshowMovies) return;

    const getTvShow = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/tv?page=1",
        API_Options
      );

      const json = await data.json();
      dispatch(addtvshow(json.results));
    };

    getTvShow();
  }, [dispatch, tvshowMovies]);
}


export default useTvShow;
