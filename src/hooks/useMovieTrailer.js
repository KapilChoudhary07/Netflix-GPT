// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";
// import { API_Options } from "../utils/constants";
// import { useEffect } from "react";

// const useMovieTrailer = (movieId) => {
//   const dispatch = useDispatch();

//          const trailerVideo = useSelector((store) => store.movies.trailerVideo);

//   const getMovieVideos = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
//       API_Options
//     );
//     const json = await data.json();


//     const filterData = json.results.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];
  
//     dispatch(addTrailerVideo(trailer));
//   };
//   useEffect(() => {
//     !trailerVideo && getMovieVideos();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
// };
// export default useMovieTrailer;



import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Options
    );

    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer =
      filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  // }, [trailerVideo]);
  }, [trailerVideo, getMovieVideos]);
};

export default useMovieTrailer;