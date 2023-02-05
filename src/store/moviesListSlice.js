import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'moviesList',
    initialState: {
        watchList: [],
        addedMovies:[],
        
    },
    reducers: {
        addList(state, action) {

            state.watchList.push({
                "name": action.payload.name,
                "title": action.payload.title,
                "movies":[]
            })
        },
        addMovie(state,action){
           state.watchList[action.payload.numArr].movies.push(action.payload.infoMovie)
           state.addedMovies.push(action.payload.infoMovie.filmId?action.payload.infoMovie.filmId:action.payload.infoMovie.kinopoiskId)
        
        }
    }
})
export const { addList,addMovie } = moviesList.actions
export default moviesList.reducer