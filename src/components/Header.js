import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/95 shadow-xl shadow-black/50 backdrop-blur-md"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent"
      }`}
    >
      <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-12">
        {/* Logo */}
        <img
          src={LOGO}
          alt="Netflix GPT"
          className="w-24 drop-shadow-[0_6px_20px_rgba(229,9,20,0.4)] transition-transform duration-300 hover:scale-105 sm:w-32 md:w-40"
        />

        {/* Right controls */}
        {user && (
          <div className="flex min-w-0 items-center gap-2 sm:gap-3 animate-fade-in">
            {/* Language selector */}
            {showGptSearch && (
              <select
                onChange={handleLanguageChange}
                defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
                className="hidden h-9 rounded-full border border-white/20 bg-black/60 px-3 text-sm font-medium text-white outline-none transition-all duration-200 hover:bg-white/10 focus:ring-2 focus:ring-red-600 sm:block"
                aria-label="Select language"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-black text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Search toggle */}
            <button
              onClick={handleGptSearchClick}
              className={`relative h-9 overflow-hidden rounded-full px-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                showGptSearch
                  ? "bg-white/15 border border-white/20 hover:bg-white/25"
                  : "bg-red-600 shadow-red-950/40 hover:bg-red-500 glow-ring-anim"
              }`}
            >
              {showGptSearch ? (
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Home
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  GPT Search
                </span>
              )}
            </button>

            {/* Avatar */}
            <div className="relative group">
              <img
                src={user?.photoURL}
                alt="User profile"
                className="h-9 w-9 rounded-full object-cover ring-2 ring-white/20 transition-all duration-300 group-hover:ring-red-500 group-hover:scale-110 cursor-pointer"
              />
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-black bg-green-500" />
            </div>

            {/* Sign out — text label on sm+, icon-only on mobile */}
            <button
              onClick={handleSignOut}
              aria-label="Sign out"
              className="flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 text-sm font-semibold text-white/80 transition-all duration-200 hover:bg-white/20 hover:text-white sm:px-4"
            >
              <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
