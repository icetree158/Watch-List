import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'moviesList',
    initialState: {
        watchList: []

    },
    reducers: {
        addList(state, action) {

            state.watchList.push({
                "name": action.payload.name,
                "title": action.payload.title,
                "moviesId":[]
            })
        }
    }
})
export const { addList } = moviesList.actions
export default moviesList.reducer