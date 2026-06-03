// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   useMovieTrailer(movieId);

//   if (!trailerVideo) return null;

//   const videoKey = trailerVideo.key;

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Iframe wrapper — 16:9 ko full screen stretch karta hai */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                       w-full h-full
//                       md:w-[177.78vh] md:h-[56.25vw]
//                       min-w-full min-h-full">
//         <iframe
//           className="w-full h-full"
//           src={
//             `https://www.youtube.com/embed/${videoKey}` +
//             `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}` +
//             `&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3` +
//             `&cc_load_policy=0&fs=0&disablekb=1`
//           }
//           title="Movie Trailer"
//           allow="autoplay; encrypted-media; picture-in-picture"
//           allowFullScreen={false}
//           frameBorder="0"
//         />
//       </div>

//       {/* Bottom fade — content section ke saath smooth blend */}
//       <div className="absolute bottom-0 left-0 right-0 h-40
//                       bg-gradient-to-t from-black to-transparent pointer-events-none" />

//       {/* Top fade — navbar ke saath blend */}
//       <div className="absolute top-0 left-0 right-0 h-28
//                       bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

//       {/* Mobile pe video skip — poster/thumbnail dikhao */}
//       <div className="md:hidden absolute inset-0 bg-black/50" />
//     </div>
//   );
// };

// export default VideoBackground;


// import { useSelector } from "react-redux";
// import { useEffect, useRef } from "react";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
//   const iframeRef = useRef(null);

//   useMovieTrailer(movieId);

//   // Browser-level keyboard events block karo (space/pause/arrows)
//   useEffect(() => {
//     const blockKeys = (e) => {
//       const blockedKeys = [" ", "k", "m", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "f", "c"];
//       if (blockedKeys.includes(e.key)) {
//         e.preventDefault();
//         e.stopPropagation();
//       }
//     };

//     window.addEventListener("keydown", blockKeys, true);
//     return () => window.removeEventListener("keydown", blockKeys, true);
//   }, []);

//   if (!trailerVideo) return null;

//   const videoKey = trailerVideo.key;

//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden bg-black"
//       // Click pe iframe focus mat hone do — keyboard capture rokta hai
//       onClickCapture={(e) => {
//         if (e.target.tagName === "IFRAME") e.preventDefault();
//       }}
//     >
//       {/* Iframe wrapper */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                     w-full h-full
//                     md:w-[177.78vh] md:h-[56.25vw]
//                     min-w-full min-h-full"
//       >
//         <iframe
//           ref={iframeRef}
//           className="w-full h-full"
//           src={
//             `https://www.youtube.com/embed/${videoKey}` +
//             `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}` +
//             `&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3` +
//             `&cc_load_policy=0&fs=0&disablekb=1`
//           }
//           title="Movie Trailer"
//           allow="autoplay; encrypted-media; picture-in-picture"
//           allowFullScreen={false}
//           muted                          // ← HTML attribute bhi lagao
//           tabIndex={-1}                  // ← Tab se iframe focus nahi hoga
//           style={{ pointerEvents: "none" }} // ← Click se iframe focus nahi hoga
//         />
//       </div>

//       {/* Transparent overlay — iframe pe click/focus block karta hai */}
//       <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" />

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 z-20
//                       bg-gradient-to-t from-black to-transparent pointer-events-none" />

//       {/* Top fade */}
//       <div className="absolute top-0 left-0 right-0 h-28 z-20
//                       bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

//       {/* Mobile overlay */}
//       <div className="md:hidden absolute inset-0 z-20 bg-black/50" />
//     </div>
//   );
// };

// export default VideoBackground;




import { useSelector } from "react-redux";
import { useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  useEffect(() => {
    const blockKeys = (e) => {
      const blocked = [" ", "k", "m", "f", "c", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (blocked.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("keydown", blockKeys, true);
    return () => window.removeEventListener("keydown", blockKeys, true);
  }, []);

  if (!trailerVideo) return null;

  const videoKey = trailerVideo.key;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-full h-full
                      md:w-[177.78vh] md:h-[56.25vw]
                      min-w-full min-h-full">
        <iframe
          className="w-full h-full"
          src={
            `https://www.youtube.com/embed/${videoKey}` +
            `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}` +
            `&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3` +
            `&cc_load_policy=0&fs=0&disablekb=1`
          }
          title="Movie Trailer"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          muted
          tabIndex={-1}
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Click/focus blocker */}
      <div className="absolute inset-0 z-[1]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[2]
                      bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 z-[2]
                      bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      {/* Mobile dark overlay */}
      <div className="md:hidden absolute inset-0 z-[2] bg-black/60" />
    </div>
  );
};

export default VideoBackground;