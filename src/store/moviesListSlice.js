import { createSlice } from "@reduxjs/toolkit";

const moviesList =createSlice({
    name:'moviesList',
    initialState:{
        nameList:[],
        
    },
    reducers:{
        addMovie(state,action){

        }
    }
})
export const {addMovie} = moviesList.actions
export default moviesList.reducer