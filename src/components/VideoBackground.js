
// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   useMovieTrailer(movieId);
//   return (
// <div className="w-full  h-full  ">
//   <iframe 
//     className="w-screen  aspect-video "
//     src={
//       "https://www.youtube.com/embed/" + "https://image.tmdb.org/t/p/original/bnEbWiq4loNvea0VBp75yUXhnMZ.png" +
//       trailerVideo?.key +
//       "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
//       trailerVideo?.key +
//       "&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&fs=0"
//     }
//     title="YouTube video player"
//     allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; web-share"
//     allowFullScreen={false}
//     frameBorder="0"
//   ></iframe>
// </div>

//   );
// };

// export default VideoBackground;
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  // Jab tak trailerVideo load nahi hota, iframe mat render karo
  if (!trailerVideo) return null;

  const videoKey = trailerVideo.key;

  return (
    <div className="w-full h-full">
      <iframe
        className="w-screen aspect-video"
        src={
          `https://www.youtube.com/embed/${videoKey}` +
          `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}` +
          `&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&fs=0`
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; web-share"
        allowFullScreen={false}  // agar fullscreen allow karna ho to true kar dena
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
