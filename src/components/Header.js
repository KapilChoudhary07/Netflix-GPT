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
    <header className="absolute left-0 top-0 z-50 w-full bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="flex min-h-20 items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-12">
        <img src={LOGO} alt="Netflix GPT" className="w-28 sm:w-36 md:w-44" />

        {user && (
          <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
            {showGptSearch && (
              <select
                onChange={handleLanguageChange}
                defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
                className="hidden h-9 rounded border border-white/20 bg-black/50 px-2 text-sm font-medium text-white outline-none backdrop-blur transition hover:bg-white/10 focus:ring-2 focus:ring-red-600 sm:block"
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
              className="h-9 rounded bg-red-600 px-3 text-sm font-bold text-white transition hover:bg-red-700 active:scale-95 sm:px-4"
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            <img
              src={user?.photoURL}
              alt="User profile"
              className="h-9 w-9 rounded object-cover ring-1 ring-white/20 sm:h-10 sm:w-10"
            />

            <button
              onClick={handleSignOut}
              className="hidden h-9 rounded border border-white/15 bg-white/10 px-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:inline-flex sm:items-center"
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
