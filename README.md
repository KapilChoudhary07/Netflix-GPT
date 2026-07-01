# 🎬 Netflix GPT

Netflix GPT is an AI-powered Netflix-style movie browsing app built with React, Redux Toolkit, Tailwind CSS, Firebase Authentication, TMDB API, and Google Gemini AI.

The app lets users sign up or log in, browse movie categories, watch trailer backgrounds, and use AI search to get smart movie recommendations.

---

🌐 **Live Demo**: https://netflix-gpt-one-rouge.vercel.app/

---



## ✨ Features

- 🎥 Netflix-inspired UI
- 🔐 Firebase Authentication
- 📝 Sign up and sign in flow
- 🛡️ Protected browse route
- 🧠 Redux Toolkit state management
- 🍿 TMDB movie data integration
- 📺 Now Playing, Popular, Top Rated, TV Shows, and On The Air sections
- ▶️ YouTube trailer background for featured movies
- 🤖 AI-powered movie recommendations using Google Gemini
- 🌐 Multi-language support
- 📱 Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

- ⚛️ React
- 🧭 React Router DOM
- 🧰 Redux Toolkit
- 🎨 Tailwind CSS
- 🔥 Firebase
- 🎞️ TMDB API
- 🤖 Google Gemini API
- 📦 Create React App


---
## 👨‍💻 Author
- **Developer:** Kapil Choudhary
- **Email:** [kapilchoudhary9171@gmail.com](mailto:kapilchoudhary9171@gmail.com)
- **GitHub:** [@KapilChoudhary07](https://github.com/KapilChoudhary07)
---


## 📁 Project Structure

```txt
src/
├── components/
│   ├── Body.js
│   ├── Browse.js
│   ├── GptMovieSuggestion.js
│   ├── GptSearch.js
│   ├── GptSearchBar.js
│   ├── Header.js
│   ├── Login.js
│   ├── MainContainer.js
│   ├── MovieCard.js
│   ├── MovieList.js
│   ├── SecondaryContainer.js
│   ├── VideoBackground.js
│   └── VideoTitle.js
├── hooks/
│   ├── useMovieTrailer.js
│   ├── useNowPlayingMovies.js
│   ├── useOnTheAir.js
│   ├── usePopularMovies.js
│   ├── useTopRatedMovies.js
│   └── useTvShow.js
├── utils/
│   ├── appStore.js
│   ├── configSlice.js
│   ├── constants.js
│   ├── firebase.js
│   ├── genai.js
│   ├── gptSlice.js
│   ├── languageConstants.js
│   ├── moviesSlice.js
│   ├── userSlice.js
│   └── validate.js
├── App.js
├── index.js
└── index.css
