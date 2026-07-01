import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[4] || movies[0];
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-black sm:min-h-[620px] md:h-[82vh] md:min-h-[680px]">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </section>
  );
};

export default MainContainer;
