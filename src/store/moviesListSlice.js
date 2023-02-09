import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'moviesList',
    initialState: {
        watchList: [],
        addedMovies: [],

    },
    reducers: {
        addList(state, action) {

            state.watchList.push({
                "name": action.payload.name,
                "title": action.payload.title,
                "movies": []
            })
        },
        addMovie(state, action) {
            state.watchList[action.payload.numArr].movies.push(action.payload.infoMovie)
            state.addedMovies.push(action.payload.infoMovie.filmId ? action.payload.infoMovie.filmId : action.payload.infoMovie.kinopoiskId)

        },
        editList(state, action) {

            return {
                ...state,
                watchList: state.watchList.map(elem => {
                    if (elem.name === action.payload.prevName) {

                        return {
                            'name': action.payload.name,
                            'title': action.payload.title,
                            'movies': action.payload.movies,
                        }
                    } else return elem
                })
            }
        },
        removeWatchList(state, action) {
            return {
                ...state,
                watchList: state.watchList.filter(e => !(e.name === action.payload.prevName))
            }
        },
        editAddMovies(state, action) {
            return {
                ...state,
                addedMovies: state.addedMovies.filter(e => !action.payload.id.includes(Number(e)))
            }
        }
    }
})
export const { addList, addMovie, editList, editAddMovies, removeWatchList } = moviesList.actions
export default moviesList.reducer