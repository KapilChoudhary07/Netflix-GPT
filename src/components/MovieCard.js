



// import React from "react";
// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCardHoverIcons = ({ posterPath }) => {
//   if (!posterPath) return null;

//   return (
//     <div
//       className="relative group 
//       w-25 md:w-[170px] 
//       cursor-pointer overflow-hidden 
//       rounded-sm
//       flex-shrink-0"
//     >
//       {/* Poster */}
//       <img
//         src={IMG_CDN_URL + posterPath}
//         alt="Movie Poster"
//         className="w-full h-[250px] object-cover rounded-md
//         transition-transform duration-300 transform group-hover:scale-105"
//       />

//       {/* Dark Overlay */}
//       <div
//         className="absolute inset-0 bg-black/40
//          opacity-0 group-hover:opacity-100 
//         transition-opacity duration-300"
//       ></div>

//       {/* Center Play Button */}
//       <div
//         className="absolute inset-0 flex items-center justify-center
//         opacity-0 group-hover:opacity-100 
//         transition-opacity duration-300"
//       >
//         <button
//           className="bg-white text-black px-4 py-2 rounded-md 
//           font-semibold text-sm flex items-center gap-2 
//           hover:scale-105 transition-transform"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M4 2v20l17-10L4 2z" />
//           </svg>
//           Play
//         </button>
//       </div>

//       {/* Bottom Icons */}
//       <div
//         className="absolute bottom-2 left-1 flex gap-2
//         opacity-0 group-hover:opacity-100
//         transition-opacity duration-300"
//       >
//         {/* Add Icon */}
//         <button
//           className="p-2 bg-white/20 backdrop-blur-sm rounded-full
//           hover:bg-white/30 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//           </svg>
//         </button>

//         {/* Like Icon */}
//         <button
//           className="p-2 bg-white/20 backdrop-blur-sm rounded-full
//           hover:bg-white/30 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M14 9V5a3 3 0 10-6 0v4M7 15v-6h10l1 6-1 6H7v-6z"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieCardHoverIcons;



import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCardHoverIcons = ({ posterPath, title, rating }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!posterPath) return null;

  return (
    <div className="relative group w-28 md:w-[170px] cursor-pointer flex-shrink-0 rounded-lg overflow-hidden">

      {/* Poster Image */}
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title || "Movie Poster"}
        className="w-full aspect-[2/3] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Desktop Hover Content */}
      <div className="hidden md:flex absolute inset-0 flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        {/* Rating Badge */}
        {rating && (
          <div className="self-end bg-yellow-400 text-black text-[11px] font-bold px-2 py-0.5 rounded-full">
            ⭐ {rating.toFixed(1)}
          </div>
        )}

        {/* Play Button */}
        <div className="flex items-center justify-center flex-1">
          <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-opacity-90 hover:scale-105 transition-all duration-200 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2v20l17-10L4 2z" />
            </svg>
            Play
          </button>
        </div>

        {/* Bottom — Title + Icons */}
        <div>
          {title && (
            <p className="text-white text-xs font-semibold truncate mb-2 drop-shadow">
              {title}
            </p>
          )}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
              className={`p-1.5 rounded-full border border-white/40 backdrop-blur-sm transition-all duration-200 hover:scale-110 ${isWishlisted ? "bg-red-500 border-red-500" : "bg-white/20 hover:bg-white/30"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Like */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
              className={`p-1.5 rounded-full border border-white/40 backdrop-blur-sm transition-all duration-200 hover:scale-110 ${isLiked ? "bg-green-500 border-green-500" : "bg-white/20 hover:bg-white/30"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19m7-9v-4a3 3 0 00-3-3H7v4l-3 3v7h3m7-9H7" />
              </svg>
            </button>

            {/* More Info */}
            <button className="ml-auto p-1.5 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between px-2 py-2">

        <button
          onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
          className={`p-1.5 rounded-full transition-colors ${isWishlisted ? "text-red-500" : "text-white/80"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <button className="bg-white/90 text-black px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2v20l17-10L4 2z" />
          </svg>
          Play
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className={`p-1.5 rounded-full transition-colors ${isLiked ? "text-green-400" : "text-white/80"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19m7-9v-4a3 3 0 00-3-3H7v4l-3 3v7h3m7-9H7" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default MovieCardHoverIcons;