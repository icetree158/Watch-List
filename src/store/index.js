import { configureStore } from "@reduxjs/toolkit";
import moviesList from "./moviesListSlice";
import user from "./userSlice";
export default configureStore({
    reducer:{
        user:user,
        moviesList:moviesList
    }
})