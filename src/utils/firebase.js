
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: "AIzaSyCjaCIVBH2mkRjDYSQrsAz27bqiF0rDjPQ",
//   authDomain: "netflixgpt-bcbe5.firebaseapp.com",
//   projectId: "netflixgpt-bcbe5",
//   storageBucket: "netflixgpt-bcbe5.firebasestorage.app",
//   messagingSenderId: "28629025788",
//   appId: "1:28629025788:web:cbf1467144627d5ef7e879",
//   measurementId: "G-N6XR85T83G"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCkvDb3xve6Tq-85Jo8IgD5S4Kx51U2xI4",
  authDomain: "netflixgpt-4886e.firebaseapp.com",
  projectId: "netflixgpt-4886e",
  storageBucket: "netflixgpt-4886e.firebasestorage.app",
  messagingSenderId: "709077782764",
  appId: "1:709077782764:web:bd03c4c7e794d46c21d5c9",
  measurementId: "G-XZ8FK61SQR"
};




const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 export const auth = getAuth();
 