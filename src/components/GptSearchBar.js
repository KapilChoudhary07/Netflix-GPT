


import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genai from "../utils/genai";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

// const PLACEHOLDERS_KEY = "gptSearchHistory";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

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
    setIsLoading(true);

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

    setIsLoading(false);
  };

  return (
    <div className="w-full">
      {/* AI label */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-red-500 text-sm animate-pulse">✦</span>
        <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
          AI-Powered Search
        </p>
        <span className="text-red-500 text-sm animate-pulse">✦</span>
      </div>

      {/* Search form */}
      <form
        className={`
          relative w-full max-w-2xl mx-auto
          flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0
          rounded-2xl sm:rounded-full
          backdrop-blur-xl p-1.5
          transition-all duration-500
          ${isFocused
            ? "shadow-[0_0_40px_rgba(220,38,38,0.35)] bg-white/15 border border-red-500/50"
            : "bg-white/10 border border-white/20 shadow-xl"
          }
        `}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Search icon */}
        <div
          className={`hidden sm:flex items-center pl-5 transition-all duration-300 ${
            isFocused ? "text-red-400" : "text-white/30"
          }`}
        >
          {isLoading ? (
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          )}
        </div>

        {/* Input */}
        <input
          ref={searchText}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            flex-1 bg-transparent text-white placeholder-white/35
            px-4 sm:px-5 py-3.5
            focus:outline-none text-sm sm:text-base
            rounded-xl sm:rounded-none
            border border-white/10 sm:border-0
          "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); searchText.current.value = ""; }}
            className="hidden sm:flex items-center pr-2 text-white/30 hover:text-white/70 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Search button */}
        <button
          disabled={isLoading}
          className={`
            relative overflow-hidden
            text-white font-bold text-sm
            px-6 py-3.5 m-0 sm:m-1
            rounded-xl sm:rounded-full
            transition-all duration-300
            ${isLoading
              ? "bg-red-800 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500 active:scale-95 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]"
            }
            shadow-lg
          `}
          onClick={handleGptSearchClick}
        >
          {/* Shimmer sweep on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          <span className="relative flex items-center gap-2">
            {isLoading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Searching...
              </>
            ) : lang[langKey].search}
          </span>
        </button>
      </form>

      {/* Quick suggestion chips */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {["Sci-Fi 90s", "Nolan films", "Sad endings", "Feel-good"].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setQuery(tag);
              if (searchText.current) searchText.current.value = tag;
            }}
            className="px-3 py-1 text-xs rounded-full bg-white/8 border border-white/15 text-white/50 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-200 active:scale-95"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GptSearchBar;