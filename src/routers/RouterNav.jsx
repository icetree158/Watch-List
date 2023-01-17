import React from 'react'
import { Route, Routes } from "react-router-dom";

import CreateWatchlist from '../pages/createWathlist/CreateWatchlist';
import MainPage from '../pages/MainPage';
import MovieInfo from '../pages/movieInfo/MovieInfo';
import Welcome from '../pages/welcomePage/Welcome';


export default function RouterNav() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} >
                     <Route index element={<Welcome />}/>
                     <Route path='addWathlist' element={<CreateWatchlist />}/>
                     <Route path='movie/:id' element={<MovieInfo />}/>
                </Route>
            </Routes>
        </>


    )
}
