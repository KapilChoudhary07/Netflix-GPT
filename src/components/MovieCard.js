import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCardHoverIcons = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="group relative aspect-[2/3] w-[128px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md bg-zinc-900 shadow-lg shadow-black/30 transition duration-300 hover:z-20 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl sm:w-[150px] md:w-[178px]">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title || "Movie poster"}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {title && (
          <p className="mb-3 line-clamp-2 text-sm font-semibold leading-tight text-white">
            {title}
          </p>
        )}
        <button
          className="inline-flex h-9 items-center gap-2 rounded bg-white px-3 text-sm font-bold text-black transition hover:bg-white/80"
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
