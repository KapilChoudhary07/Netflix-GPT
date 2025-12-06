

import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genai from "../utils/genai";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const searchMoviesTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const query =
      "Act as a Movie Recommendation system and suggest some movie for the query" +
      searchText.current.value +
      "only give me name of  movies,comma seprated. ";

    const gptResults = await genai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });

    if (!gptResults.text) {
    }

    console.log(gptResults.text);
    const gptMovies = gptResults.text.split(",");

    const promiseArray = gptMovies.map((movie) => searchMoviesTMBD(movie));

    const tmbdResults = await Promise.all(promiseArray);
    console.log(tmbdResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmbdResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-full  max-w-2xl backdrop-blur-lg bg-white/10 
        border border-white/20 rounded-full shadow-xl 
        flex items-center transition-all duration-300"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Input */}
        <input
          ref={searchText}
          className="flex-1 bg-transparent text-white placeholder-gray-300 
         px-50 md:px-10 py-4 focus:outline-none text-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        {/* Button */}
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold 
          px-6 py-3 m-2 rounded-full transition-all duration-300 
          shadow-md hover:shadow-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
