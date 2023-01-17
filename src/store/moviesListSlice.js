import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'moviesList',
    initialState: {
        WatchList: []

    },
    reducers: {
        addList(state, action) {

            state.WatchList.push({
                "name": action.payload.name,
                "title": action.payload.title
            })
        }
    }
})
export const { addList } = moviesList.actions
export default moviesList.reducer