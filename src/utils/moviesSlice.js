import {createSlice} from "@reduxjs/toolkit"


const moviesSlice = createSlice ({


    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        on_the_air : null,
        popularMovies:null,
        trailerVideo : null,
        top_ratedMovies: null,
        tvshowMovies : null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;

        },
          addpopularMovies : (state,action) => {
            state.popularMovies = action.payload;

        },
          addtopratedMovies : (state,action) => {
            state.topratedMovies = action.payload;

        },
       addontheairMovies : (state,action) => {
            state.ontheairMovies = action.payload;

        },
           addtvshow : (state,action) => {
            state.tvshow = action.payload;

        },
         
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies , addTrailerVideo, addpopularMovies , addtopratedMovies, addontheairMovies ,addtvshow } = moviesSlice.actions;

export default moviesSlice.reducer;