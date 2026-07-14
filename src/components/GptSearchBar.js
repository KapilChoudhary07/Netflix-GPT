import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genai from "../utils/genai";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const searchMoviesTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value?.trim();
    if (!query) return;

    setLoading(true);
    try {
      const prompt =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        query +
        ". Only give me names of movies, comma separated, no numbering, no extra text.";

      const gptResults = await genai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const gptMovies = gptResults.text
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMoviesTMBD(movie))
      );

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (err) {
      console.error("GPT Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleGptSearchClick();
  };

  return (
    <div className="flex flex-col items-center pt-6 animate-fade-up">
      {/* Label */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 shadow-lg shadow-purple-950/50 animate-float">
          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <p className="text-sm font-bold uppercase tracking-widest text-white/50">
          AI-Powered Movie Search
        </p>
      </div>

      {/* Search form */}
      <form
        className={`search-glow w-full max-w-2xl flex items-center rounded-full border transition-all duration-300 ${
          focused
            ? "border-purple-500/50 bg-black/70 backdrop-blur-xl"
            : "border-white/20 bg-white/10 backdrop-blur-lg"
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Search icon inside input */}
        <div className="pl-5 pr-2 text-white/40">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z" />
          </svg>
        </div>

        <input
          ref={searchText}
          className="flex-1 bg-transparent py-4 pr-3 text-base text-white placeholder-white/30 outline-none"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder || "What would you like to watch today?"}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
        />

        <button
          type="button"
          disabled={loading}
          onClick={handleGptSearchClick}
          className="m-1.5 flex h-10 min-w-[90px] items-center justify-center gap-2 rounded-full bg-purple-600 px-5 text-sm font-bold text-white shadow-lg shadow-purple-950/40 transition-all duration-300 hover:bg-purple-500 hover:shadow-purple-900/50 active:scale-95 disabled:opacity-60"
        >
          {loading ? (
            <svg className="h-4 w-4 animate-spin-slow" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              {lang[langKey]?.search || "Search"}
            </>
          )}
        </button>
      </form>

      {/* Hint chips */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 animate-fade-up-delay-1">
        {["Action thriller", "Romantic comedy", "Sci-fi epic", "Based on true story"].map((hint) => (
          <button
            key={hint}
            onClick={() => {
              if (searchText.current) searchText.current.value = hint;
            }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50 transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-950/30 hover:text-white/80"
          >
            {hint}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GptSearchBar;
