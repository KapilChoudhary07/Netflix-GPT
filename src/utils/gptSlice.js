// import { createSlice } from "@reduxjs/toolkit";
// import reducer from "./userSlice";

// const gptSlice = createSlice ({

//     name : 'gpt',
//     intialState : {
//         showGptSearch : false,
//     },
//     reducers: {
//         toogleGptSearchView : (state, action) => {
//             state.showGptSearch = !state.showGptSearch;

//         },
//     },
// });

//     export const {toogleGptSearchView} = gptSlice.actions;

//     export default gptSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {            // <-- fixed spelling
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state,action) => {
      const {movieNames , movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView , addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;
