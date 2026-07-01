import { useRef, useState } from "react";
import Headers from "./Header";
import { CheckValidDate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";




const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = CheckValidDate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const {uid , email , displayName , photoURL} = auth.currentUser;
              dispatch(
                addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
      );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Headers />
      <div className="absolute inset-0 -z-10">
  <img 
    src={BG_URL}
    alt="Netflix background"
    className="w-full h-full object-cover brightness-50"
  />
</div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[60%] md:w-3/12 absolute p-8 h-15 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
      >
        <h1 className="text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full rounded-md bg-gray-800  bg-opacity-100"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full rounded-md bg-gray-800   bg-opacity-100"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full rounded-md bg-gray-800   bg-opacity-100"
        />
        <p className="text-red-600  font-bold text-lg py-4">{errorMessage}</p>
        <button
          className="bg-red-700 w-full p-3 my-6 rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 mr-23 cursor-pointer " onClick={toggleSingInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already register? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
