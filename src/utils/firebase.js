import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    "AIzaSyBukQwrwNREvDRg_HqjpSlD_nmPROL-xjw",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    "netflix-gpt-fec36.firebaseapp.com",
  projectId:
    process.env.REACT_APP_FIREBASE_PROJECT_ID || "netflix-gpt-fec36",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    "netflix-gpt-fec36.firebasestorage.app",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "70035192863",
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    "1:70035192863:web:9ad94f197cb5b79069e92a",
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-6KMGPHQ0BY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
