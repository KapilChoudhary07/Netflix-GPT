
// import React from "react";
// import { IMG_CDN_URL } from "../utils/constants";


// const MovieCard = ({ posterPath }) => {
//   return (
//     <div
//       className="w-[400px] p-1 relative 
   
//     md:w-40 cursor-pointer
//   transition-all duration-400 ease-out
//   hover:-translate-y-8 
  
//   "
//     >
//       <img
//         className="rounded-md
//         h-56 object-cover 
//                transition-all duration-300 group-hover:shadow-xl
               
//                "
//         alt="Movie Card"
//         src={IMG_CDN_URL + posterPath}
//       />
//     </div>
//   );
// };

// export default MovieCard;




// import React from "react";
// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCardHoverIcons = ({ posterPath }) => {

//   if(!posterPath) return null;
//   return (
//     <div
//       className="relative group 
//       w-[150px] md:w-[170px] 
//       cursor-pointer overflow-hidden 
//       rounded-sm
//       flex-shrink-0"
//     >
//       {/* Poster */}
//       <img
//         src={IMG_CDN_URL + posterPath}
//         alt="Movie Poster"
//         className="w-full h-[250px] object-cover rounded-md
//         transition-all duration-300 group-hover:scale-150"
//       />

//       {/* Dark Overlay */}
//       <div
//         className="absolute 
//          group-hover:opacity-100 
//         transition-opacity duration-300"
//       />

//       {/* Center Play Button */}
//       <div
//         className="absolute inset-0 flex items-center justify-center
//         opacity-0 group-hover:opacity-100 
//         transition duration-300"
//       >
//         <button
//           className="bg-white text-black px-4 py-2 rounded-md 
//           font-semibold text-sm flex items-center gap-2 
//           hover:scale-105 transition"
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

//       {/* Bottom Icons */}       <div
//         className="absolute bottom-2 left-1 flex gap-2
//         opacity-0 group-hover:opacity-105
//         transition duration-300"
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


import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCardHoverIcons = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="relative group 
      w-25 md:w-[170px] 
      cursor-pointer overflow-hidden 
      rounded-sm
      flex-shrink-0"
    >
      {/* Poster */}
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-[250px] object-cover rounded-md
        transition-transform duration-300 transform group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/40
         opacity-0 group-hover:opacity-100 
        transition-opacity duration-300"
      ></div>

      {/* Center Play Button */}
      <div
        className="absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300"
      >
        <button
          className="bg-white text-black px-4 py-2 rounded-md 
          font-semibold text-sm flex items-center gap-2 
          hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 2v20l17-10L4 2z" />
          </svg>
          Play
        </button>
      </div>

      {/* Bottom Icons */}
      <div
        className="absolute bottom-2 left-1 flex gap-2
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300"
      >
        {/* Add Icon */}
        <button
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full
          hover:bg-white/30 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        {/* Like Icon */}
        <button
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full
          hover:bg-white/30 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 9V5a3 3 0 10-6 0v4M7 15v-6h10l1 6-1 6H7v-6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCardHoverIcons;
