# Netflix GPT

An AI-powered Netflix-style movie browsing app.

## Stack
- **React 19** (Create React App)
- **Redux Toolkit** — global state
- **Tailwind CSS** — styling + animations
- **Firebase** — authentication
- **TMDB API** — movie data
- **Google Gemini AI** — AI movie search

## Running locally
```
npm start        # starts CRA dev server on port 3000
npm run build    # production build
```

## Required environment variables
Set these in Replit Secrets (or a `.env` file locally):

| Variable | Description |
|---|---|
| `REACT_APP_FIREBASE_API_KEY` | Firebase project API key |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `REACT_APP_FIREBASE_PROJECT_ID` | Firebase project ID |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `REACT_APP_FIREBASE_APP_ID` | Firebase app ID |
| `REACT_APP_FIREBASE_MEASUREMENT_ID` | Firebase measurement ID |
| `REACT_APP_GEMINI_API_KEY` | Google Gemini API key |
| `REACT_APP_TMBD_KEY` | TMDB Bearer token |

## Routes
- `/` — Login / Sign Up page
- `/browse` — Main browse page (protected, requires auth)

## User preferences
- Keep existing project structure (CRA, src/components, src/hooks, src/utils)
- Tailwind for all styling — no CSS modules
