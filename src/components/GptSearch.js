

import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-full">
      {/* Background Image (fixed behind everything) */}
      <div className="fixed inset-0 -z-10 brightness-50">
        <img
          src={BG_URL}
          alt="bg-image"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* CONTENT (NOT fixed → stays in correct position!) */}
      <div className="pt-28 px-4 sm:px-6 md:px-16">
        <GptSearchBar />
        <div className="mt-6">
          <GptMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
