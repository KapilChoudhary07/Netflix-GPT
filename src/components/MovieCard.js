import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCardHoverIcons = ({ posterPath, rating, title }) => {
  if (!posterPath) return null;

  const formattedRating =
    typeof rating === "number" && rating > 0 ? rating.toFixed(1) : "N/A";

  return (
    <div className="poster-shine group relative aspect-[2/3] w-[128px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg bg-zinc-900 shadow-lg shadow-black/30 ring-1 ring-white/5 transition duration-300 hover:z-20 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-red-950/30 hover:ring-red-500/40 sm:w-[150px] md:w-[178px]">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title || "Movie poster"}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/75 px-2 py-1 text-[11px] font-bold text-white shadow-lg backdrop-blur transition group-hover:bg-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-yellow-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m12 2 2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.4-6 3.4 1.3-6.7-5-4.6 6.8-.8L12 2Z" />
        </svg>
        {formattedRating}
      </div>

      <div className="absolute right-3 top-3 rounded-full bg-black/65 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
        TMDB
      </div>

      <div className="absolute inset-x-3 bottom-3 translate-y-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {title && (
          <p className="mb-3 line-clamp-2 text-sm font-bold leading-tight text-white drop-shadow">
            {title}
          </p>
        )}
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-white/80">
          <span className="rounded bg-yellow-400 px-1.5 py-0.5 font-black text-black">
            TMDB
          </span>
          <span>{formattedRating}/10</span>
        </div>
        <button
          className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-sm font-bold text-black shadow-lg transition hover:bg-red-600 hover:text-white"
          aria-label={`Play ${title || "movie"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 2v20l17-10L4 2z" />
          </svg>
          Play
        </button>
      </div>
    </div>
  );
};

export default MovieCardHoverIcons;
