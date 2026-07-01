import { useRef, useState } from "react";
import Headers from "./Header";
import { CheckValidDate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shakeError, setShakeError] = useState(false);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const triggerShake = () => {
    setShakeError(true);
    setTimeout(() => setShakeError(false), 500);
  };

  const handleButtonClick = async () => {
    const message = CheckValidDate(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
      triggerShake();
      return;
    }
    setErrorMessage(null);
    setLoading(true);

    try {
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        });
        const { uid, email: e, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email: e, displayName, photoURL }));
      } else {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      }
    } catch (error) {
      setErrorMessage(error.message);
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-black/50" />
      </div>

      <Headers />

      {/* Form card */}
      <div
        className={`relative z-10 w-full max-w-md mx-4 mt-20 animate-scale-in ${
          shakeError ? "animate-shake" : ""
        }`}
      >
        {/* Glow ring behind card */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-red-600/30 via-transparent to-red-900/20 blur-xl opacity-70" />

        <div className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-8 py-10 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white tracking-tight">
              {isSignInForm ? "Welcome back" : "Create account"}
            </h1>
            <p className="mt-1.5 text-sm text-white/50">
              {isSignInForm
                ? "Sign in to continue watching"
                : "Join Netflix GPT today"}
            </p>
          </div>

          {/* Form — handles Enter-to-submit */}
          <form onSubmit={(e) => { e.preventDefault(); handleButtonClick(); }} noValidate>
            <div className="space-y-4">
              {!isSignInForm && (
                <div className="animate-fade-up">
                  <label htmlFor="fullname" className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    ref={name}
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/25 outline-none transition-all duration-300 hover:border-white/20 focus:border-red-500/60"
                  />
                </div>
              )}

              <div className={isSignInForm ? "animate-fade-up" : "animate-fade-up-delay-1"}>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  ref={email}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/25 outline-none transition-all duration-300 hover:border-white/20 focus:border-red-500/60"
                />
              </div>

              <div className={isSignInForm ? "animate-fade-up-delay-1" : "animate-fade-up-delay-2"}>
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  ref={password}
                  type="password"
                  placeholder="••••••••"
                  autoComplete={isSignInForm ? "current-password" : "new-password"}
                  className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/25 outline-none transition-all duration-300 hover:border-white/20 focus:border-red-500/60"
                />
              </div>
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-950/40 px-4 py-3 animate-fade-in" role="alert">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
                <p className="text-sm text-red-300 leading-snug">{errorMessage}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full rounded-xl bg-red-600 py-3.5 text-base font-bold text-white shadow-lg shadow-red-950/40 transition-all duration-300 hover:bg-red-500 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <span className="dot-loader flex gap-1.5" aria-label="Loading">
                  <span />
                  <span />
                  <span />
                </span>
              ) : (
                isSignInForm ? "Sign In" : "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/30 font-medium">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Toggle */}
          <p className="text-center text-sm text-white/50">
            {isSignInForm ? "New to Netflix GPT? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggleSignInForm}
              className="font-semibold text-white transition hover:text-red-400 underline underline-offset-2"
            >
              {isSignInForm ? "Sign Up Now" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
