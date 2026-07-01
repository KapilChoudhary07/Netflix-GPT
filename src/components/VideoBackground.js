import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  const videoKey = trailerVideo.key;

  return (
    <div className="absolute inset-0 z-10 h-full w-full">
      <iframe
        className="h-full w-full scale-125 object-cover md:scale-110"
        src={
          `https://www.youtube.com/embed/${videoKey}` +
          `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}` +
          `&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&fs=0`
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; web-share"
        allowFullScreen={false}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
