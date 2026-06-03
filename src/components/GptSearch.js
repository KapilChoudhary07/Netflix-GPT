


import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10 brightness-50">
        <img
          src={BG_URL}
          alt="bg-image"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Gradient overlay — better readability on all screens */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      {/* CONTENT */}
      <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10 lg:px-16 pb-10">

        {/* Search bar — glass card wrapper */}
        <div className="w-full max-w-2xl mx-auto mb-8 sm:mb-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
          <GptSearchBar />
        </div>

        {/* Movie suggestions */}
        <div className="mt-2">
          <GptMovieSuggestion />
        </div>

      </div>
    </div>
  );
};

export default GptSearch;