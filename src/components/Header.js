


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
//     <header className="absolute  top-0 left-0 w-full z-50 bg-gradient-to-b from-black h-20">
//       <div className=" mx-auto w-full px-4   h-full">
        
//         <div className=" md:flex items-center  justify-between  md:m-7 flex">
          
//           {/* LOGO */}
//           <img src={LOGO} alt="logo" className="w-28 sm:w-36 md:w-48" />

//           {/* RIGHT CONTROLS */}
//           {user && (
//             <div className="  flex items-center gap-2 sm:gap-3 whitespace-nowrap">
              
//               {showGptSearch && (
//                 <select
//                   onChange={handleLanguageChange}
//                   className="bg-gray/10 backdrop-blur-md border border-white/20 px-3 rounded-md text-white-200"
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
//                 className="bg-purple-600 py-1 px-3 rounded-md font-bold text-white"
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
//                 className="bg-red-600 rounded-lg py-1 px-3 font-semibold text-white"
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

  return (
    <header className="absolute top-0 left-0 w-full z-50
                       bg-gradient-to-b from-black/90 to-transparent">
      <div className="flex items-center justify-between
                      px-4 sm:px-6 md:px-12 py-3 md:py-4">

        {/* Logo */}
        <img src={LOGO} alt="Netflix" className="w-24 sm:w-32 md:w-44 object-contain" />

        {/* Right controls */}
        {user && (
          <div className="flex items-center gap-2 sm:gap-3">

            {showGptSearch && (
              <select
                onChange={(e) => dispatch(changeLanguage(e.target.value))}
                defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
                className="hidden sm:block bg-black/40 backdrop-blur-md border border-white/20
                           text-white text-sm px-2 py-1.5 rounded-md
                           focus:outline-none focus:ring-1 focus:ring-red-500
                           cursor-pointer transition"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier} className="bg-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={() => dispatch(toogleGptSearchView())}
              className="bg-purple-600 hover:bg-purple-700 active:scale-95
                         text-white text-xs sm:text-sm font-semibold
                         px-3 py-1.5 rounded-md transition-all duration-200"
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>

            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt="avatar"
                className="w-8 h-8 md:w-9 md:h-9 rounded-md object-cover"
              />
            )}

            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 active:scale-95
                         text-white text-xs sm:text-sm font-semibold
                         px-3 py-1.5 rounded-md transition-all duration-200"
            >
              Sign out
            </button>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;