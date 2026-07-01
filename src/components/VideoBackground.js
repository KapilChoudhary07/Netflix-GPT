import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  const videoKey = trailerVideo.key;

  return (
    <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <iframe
        className="aspect-video h-full min-h-full w-[177.78vh] min-w-full max-w-none"
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-black/5" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] via-[#080808]/55 to-transparent" />
    </div>
  );
};

export default VideoBackground;
