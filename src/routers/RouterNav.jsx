import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from '../components/navBar/NavBar';
import CreateWatchlist from '../pages/createWathlist/CreateWatchlist';
import MainPage from '../pages/MainPage';
import Welcome from '../pages/welcomePage/Welcome';


export default function RouterNav() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} >
                     <Route index element={<Welcome />}/>
                     <Route path='addWathlist' element={<CreateWatchlist />}/>
                </Route>
            </Routes>
        </>


    )
}
