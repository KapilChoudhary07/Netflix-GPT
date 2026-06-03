import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  // console.log(movieResults);
  if (!movieNames) return null;

  return (
    <div className=" mr-4 w-full p-4 text-white bg-black bg-opacity-50  ">
      <div>
        {movieNames.map((movieNames,index) => (
          <MovieList
            key={index}
            title={movieNames}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
