import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toogleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";

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
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="flex min-h-20 items-center justify-between gap-3 bg-gradient-to-b from-black/95 via-black/70 to-transparent px-4 py-3 sm:px-6 md:px-12">
        <img
          src={LOGO}
          alt="Netflix GPT"
          className="w-28 drop-shadow-[0_8px_24px_rgba(229,9,20,0.35)] sm:w-36 md:w-44"
        />

        {user && (
          <div className="flex min-w-0 items-center justify-end gap-2 rounded-full border border-white/10 bg-black/25 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-md sm:gap-3">
            {showGptSearch && (
              <select
                onChange={handleLanguageChange}
                defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
                className="hidden h-9 rounded-full border border-white/20 bg-black/60 px-3 text-sm font-medium text-white outline-none transition hover:bg-white/10 focus:ring-2 focus:ring-red-600 sm:block"
                aria-label="Select language"
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
              className="h-9 rounded-full bg-red-600 px-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500 active:scale-95 sm:px-4"
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            <img
              src={user?.photoURL}
              alt="User profile"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-white/20 transition hover:ring-red-500 sm:h-10 sm:w-10"
            />

            <button
              onClick={handleSignOut}
              className="hidden h-9 rounded-full border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/20 sm:inline-flex sm:items-center"
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
