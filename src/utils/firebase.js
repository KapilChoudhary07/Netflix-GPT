// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // ✅ ADD THIS
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBukQwrwNREvDRg_HqjpSlD_nmPROL-xjw",
  authDomain: "netflix-gpt-fec36.firebaseapp.com",
  projectId: "netflix-gpt-fec36",
  storageBucket: "netflix-gpt-fec36.firebasestorage.app",
  messagingSenderId: "70035192863",
  appId: "1:70035192863:web:9ad94f197cb5b79069e92a",
  measurementId: "G-6KMGPHQ0BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ CREATE AUTH
const auth = getAuth(app);

// (optional)
const analytics = getAnalytics(app);

// ✅ EXPORT AUTH
export { auth };