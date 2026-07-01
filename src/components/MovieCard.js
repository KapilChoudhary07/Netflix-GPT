import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, rating, title }) => {
  if (!posterPath) return null;

  const formattedRating =
    typeof rating === "number" && rating > 0 ? rating.toFixed(1) : "N/A";

  const ratingColor =
    rating >= 7.5
      ? "bg-green-500 text-black"
      : rating >= 5.5
      ? "bg-yellow-400 text-black"
      : "bg-red-500 text-white";

  return (
    <div className="poster-shine group relative aspect-[2/3] w-[120px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-zinc-900 shadow-lg shadow-black/40 ring-1 ring-white/5 transition-all duration-300 hover:z-20 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-red-950/40 hover:ring-red-500/50 sm:w-[145px] md:w-[172px]">
      {/* Poster image */}
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title || "Movie poster"}
        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-60"
        loading="lazy"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Rating badge — always visible */}
      <div
        className={`absolute left-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-0 ${ratingColor}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m12 2 2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.4-6 3.4 1.3-6.7-5-4.6 6.8-.8L12 2Z" />
        </svg>
        {formattedRating}
      </div>

      {/* Hover content */}
      <div className="absolute inset-x-0 bottom-0 translate-y-2 px-3 pb-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {/* Title */}
        {title && (
          <p className="mb-2 line-clamp-2 text-sm font-bold leading-tight text-white drop-shadow">
            {title}
          </p>
        )}

        {/* Rating row */}
        <div className="mb-2.5 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-black ${ratingColor}`}>
            ★ {formattedRating}
          </span>
          <span className="rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/80 backdrop-blur">
            TMDB
          </span>
        </div>

        {/* Play button */}
        <button
          className="inline-flex h-8 items-center gap-2 rounded-full bg-white px-3 text-xs font-bold text-black shadow-lg transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-95"
          aria-label={`Play ${title || "movie"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 2v20l17-10L4 2z" />
          </svg>
          Play
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
