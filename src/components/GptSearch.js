import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        {/* Subtle red ambient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="px-4 pb-16 pt-28 sm:px-6 md:px-16">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
