import { GoogleGenAI } from "@google/genai";

// Lazy-initialize so a missing key doesn't crash the whole bundle at load time
let _genai = null;

const getGenai = () => {
  if (_genai) return _genai;
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("REACT_APP_GEMINI_API_KEY is not set – GPT Search won't work.");
    return null;
  }
  _genai = new GoogleGenAI({ apiKey, dangerouslyAllowBrowser: true });
  return _genai;
};

// Proxy object so existing callers (`genai.models.generateContent(...)`) still work
const genai = {
  models: {
    generateContent: (opts) => {
      const instance = getGenai();
      if (!instance) throw new Error("Gemini API key not configured.");
      return instance.models.generateContent(opts);
    },
  },
};

export default genai;
