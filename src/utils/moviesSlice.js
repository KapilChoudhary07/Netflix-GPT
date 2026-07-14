import {createSlice} from "@reduxjs/toolkit"

const moviesSlice = createSlice ({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        onTheAirMovies: null,
        tvShowMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addpopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addtopratedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addontheairMovies: (state, action) => {
            state.onTheAirMovies = action.payload;
        },
        addtvshow: (state, action) => {
            state.tvShowMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addpopularMovies, addtopratedMovies, addontheairMovies, addtvshow } = moviesSlice.actions;

export default moviesSlice.reducer;