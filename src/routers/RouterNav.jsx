import React from 'react'
import { Route, Routes } from "react-router-dom";

import CreateWatchlist from '../pages/createWathlist/CreateWatchlist';
import EditProfile from '../pages/editProfile/EditProfile';
import EditWatvhlist from '../pages/editWathlist/EditWatvhlist';
import Login from '../pages/login/Login';
import MainPage from '../pages/MainPage';
import MovieInfo from '../pages/movieInfo/MovieInfo';
import Registration from '../pages/registration/Registration';
import Welcome from '../pages/welcomePage/Welcome';


export default function RouterNav() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} >
                    <Route index element={<Welcome />} />
                    <Route path='addWathlist' element={<CreateWatchlist />} />
                    <Route path='movie/:id' element={<MovieInfo />} />
                    <Route path='login' element={<Login />} />
                    <Route path='registration' element={<Registration />} />
                    <Route path='editprofile' element={<EditProfile />} />
                    <Route path='wathList' element={<EditProfile />} />
                    <Route path='watchList/:name' element={<EditWatvhlist />} />
                </Route>
            </Routes>
        </>


    )
}
