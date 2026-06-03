// import { GoogleGenAI } from "@google/genai";
// // import {GoogleGenAI} from "genai";
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// const genai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// export default genai;

import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

// const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const genai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default genai;

