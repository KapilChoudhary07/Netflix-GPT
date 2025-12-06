// // import { onAuthStateChanged, signOut } from "firebase/auth";
// // import { auth } from "../utils/firebase";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { useDispatch } from "react-redux";
// // import { useEffect } from "react";
// // import { addUser, removeUser } from "../utils/userSlice";
// // import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
// // import { toogleGptSearchView } from "../utils/gptSlice";
// // import lang from "../utils/languageConstants";
// // import { changeLanguage } from "../utils/configSlice";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
// //   const user = useSelector((store) => store.user);

// //   const handleSignOut = () => {
// //     signOut(auth)
// //       .then(() => {})
// //       .catch((error) => {
// //         navigate("/error");
// //       });
// //   };
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       if (user) {
// //         const { uid, email, displayName, photoURL } = user;
// //         dispatch(
// //           addUser({
// //             uid: uid,
// //             email: email,
// //             displayName: displayName,
// //             photoURL: photoURL,
// //           })
// //         );
// //         navigate("/browse");
// //       } else {
// //         dispatch(removeUser());
// //         navigate("/");
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const handleGptSearchClick = () => {
// //     dispatch(toogleGptSearchView());
// //   };

// //   const handleLanguageChange = (e) => {
// //     dispatch(changeLanguage(e.target.value));
// //   };
// //   return (
// //     <div className="absolute w-screen px-28 pt-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row   justify-between  ">
// //       <img className="w-48 mx-auto md:mx-0" src={LOGO} alt="logo" />
// //       {user && (
// //         <div className="flex p-6  fa-solid fa-heart absolute top-1 right-2  ">
// //           {showGptSearch && (
// //             <select
// //               className="bg-gray/10 backdrop-blur-md border border-white/20 
// //   px-3  m-2.5 rounded-md text-white-200 font-medium
// //   focus:outline-none focus:ring-2 focus:ring-red-500/70
// //   hover:bg-white/20 transition-all duration-200 cursor-pointer"
// //               onChange={handleLanguageChange}
// //             >
// //               {SUPPORTED_LANGUAGES.map((lang) => (
// //                 <option key={lang.identifier} value={lang.identifier}>
// //                   {lang.name}
// //                 </option>
// //               ))}
// //             </select>
// //           )}
// //           <button
// //             className="bg-purple-600  py-1 px-2 mx-3 rounded-md font-bold text-white "
// //             onClick={handleGptSearchClick}
// //           >
// //             {showGptSearch? "Homepage" : "GPT Search"}
            
// //           </button>
// //           <img
// //             className="w-10 h-10 rounded-md "
// //             alt="usericon"
// //             src={user?.photoURL}
// //           />
// //           <button
// //             onClick={handleSignOut}
// //             className="flex bg-red-600 rounded-lg py-2 mx-2 p-2 mr-3 font-semibold text-white"
// //           >
// //             (Sign out)
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Header;


// // import { onAuthStateChanged, signOut } from "firebase/auth";
// // import { auth } from "../utils/firebase";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { useEffect } from "react";
// // import { addUser, removeUser } from "../utils/userSlice";
// // import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
// // import { toogleGptSearchView } from "../utils/gptSlice";
// // import { changeLanguage } from "../utils/configSlice";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
// //   const user = useSelector((store) => store.user);

// //   const handleSignOut = () => {
// //     signOut(auth)
// //       .then(() => {})
// //       .catch((error) => {
// //         navigate("/error");
// //       });
// //   };

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (u) => {
// //       if (u) {
// //         const { uid, email, displayName, photoURL } = u;
// //         dispatch(
// //           addUser({
// //             uid,
// //             email,
// //             displayName,
// //             photoURL,
// //           })
// //         );
// //         navigate("/browse");
// //       } else {
// //         dispatch(removeUser());
// //         navigate("/");
// //       }
// //     });
// //     return () => unsubscribe();
// //     // include navigate & dispatch to satisfy ESLint/react-hooks
// //   }, [dispatch, navigate]);

// //   const handleGptSearchClick = () => {
// //     dispatch(toogleGptSearchView());
// //   };

// //   const handleLanguageChange = (e) => {
// //     dispatch(changeLanguage(e.target.value));
// //   };

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-black/95">
// //       <div className="mx-auto w-full  px-4 md:auto lg:px-12 py-3 flex flex-col md:flex-row items-start md:items-center justify-between">
// //         {/* Logo */}
// //         <div className="flex-shrink-0">
// //           <img
// //             src={LOGO}
// //             alt="logo"
// //             className="w-36 md:w-48 mx-auto md:mx-0 block"
// //           />
// //         </div>

// //         {/* Controls */}
// //         {user && (
// //           <div className="w-full md:w-auto mt-3 md:mt-0 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-end gap-2 md:gap-3">
// //             {/* Language select (only when GPT search is shown) */}
// //             {showGptSearch && (
// //               <select
// //                 onChange={handleLanguageChange}
// //                 className="min-w-[6.5rem] sm:min-w-[7.5rem] md:min-w-[8.5rem] px-3 py-1 rounded-md text-sm md:text-base font-medium bg-white/5 border border-white/20 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-red-500/60 transition"
// //                 aria-label="Select language"
// //                 defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
// //               >
// //                 {SUPPORTED_LANGUAGES.map((lang) => (
// //                   <option key={lang.identifier} value={lang.identifier}>
// //                     {lang.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             )}

// //             {/* GPT / Homepage toggle */}
// //             <button
// //               onClick={handleGptSearchClick}
// //               className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold rounded-md px-3 py-1 md:px-4 md:py-1 text-sm md:text-base transition"
// //               aria-pressed={showGptSearch}
// //             >
// //               {showGptSearch ? "Homepage" : "GPT Search"}
// //             </button>

// //             {/* Avatar */}
// //             <img
// //               src={user?.photoURL}
// //               alt="usericon"
// //               className="w-9 h-9 md:w-10 md:h-10 rounded-md object-cover"
// //             />

// //             {/* Sign out */}
// //             <button
// //               onClick={handleSignOut}
// //               className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-2 py-1 md:px-3 md:py-1 text-sm md:text-base transition"
// //             >
// //               Sign out
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { addUser, removeUser } from "../utils/userSlice";
// import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
// import { toogleGptSearchView } from "../utils/gptSlice";
// import { changeLanguage } from "../utils/configSlice";

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
//   const user = useSelector((store) => store.user);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (u) => {
//       if (u) {
//         const { uid, email, displayName, photoURL } = u;
//         dispatch(addUser({ uid, email, displayName, photoURL }));
//         navigate("/browse");
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });

//     return () => unsubscribe();
//   }, [dispatch, navigate]);

//   const handleSignOut = () => {
//     signOut(auth).catch(() => navigate("/error"));
//   };

//   const handleGptSearchClick = () => {
//     dispatch(toogleGptSearchView());
//   };

//   const handleLanguageChange = (e) => {
//     dispatch(changeLanguage(e.target.value));
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-black">
//       <div className="relative w-full px-4 sm:px-6 md:px-16 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo Left */}
//           <div className="flex-shrink-0">
//             <img src={LOGO} alt="logo" className="w-28 sm:w-36 md:w-48" />
//           </div>

//           {/* Controls Right (absolute on small screens to avoid gaps) */}
//           {user && (
//             <div
//               className="flex items-center gap-2 sm:gap-3 whitespace-nowrap flex-nowrap"
//               style={{ transform: "translateY(0)" }}
//               aria-label="Header controls"
//             >
//               {showGptSearch && (
//                 <select
//                   onChange={handleLanguageChange}
//                   className="bg-gray/10 backdrop-blur-md border border-white/20 px-3 rounded-md text-white-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/70 hover:bg-white/20 transition-all duration-200 cursor-pointer"
//                   aria-label="Select language"
//                   defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
//                 >
//                   {SUPPORTED_LANGUAGES.map((lang) => (
//                     <option key={lang.identifier} value={lang.identifier}>
//                       {lang.name}
//                     </option>
//                   ))}
//                 </select>
//               )}

//               <button
//                 onClick={handleGptSearchClick}
//                 className="bg-purple-600 py-1 px-2 mx-3 rounded-md font-bold text-white"
//               >
//                 {showGptSearch ? "Homepage" : "GPT Search"}
//               </button>

//               <img
//                 src={user?.photoURL}
//                 alt="usericon"
//                 className="w-10 h-10 rounded-md object-cover"
//               />

//               <button
//                 onClick={handleSignOut}
//                 className="flex bg-red-600 rounded-lg py-2 mx-2 p-2 mr-3 font-semibold text-white"
//               >
//                 Sign out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toogleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        const { uid, email, displayName, photoURL } = u;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute  top-0 left-0 w-full z-50 bg-gradient-to-b from-black h-20">
      <div className=" mx-auto w-full px-4   h-full">
        
        <div className=" md:flex items-center  justify-between  md:m-7 flex">
          
          {/* LOGO */}
          <img src={LOGO} alt="logo" className="w-28 sm:w-36 md:w-48" />

          {/* RIGHT CONTROLS */}
          {user && (
            <div className="  flex items-center gap-2 sm:gap-3 whitespace-nowrap">
              
              {showGptSearch && (
                <select
                  onChange={handleLanguageChange}
                  className="bg-gray/10 backdrop-blur-md border border-white/20 px-3 rounded-md text-white-200"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                onClick={handleGptSearchClick}
                className="bg-purple-600 py-1 px-3 rounded-md font-bold text-white"
              >
                {showGptSearch ? "Homepage" : "GPT Search"}
              </button>

              <img
                src={user?.photoURL}
                alt="usericon"
                className="w-10 h-10 rounded-md object-cover"
              />

              <button
                onClick={handleSignOut}
                className="bg-red-600 rounded-lg py-1 px-3 font-semibold text-white"
              >
                Sign out
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Header;
