import React from 'react'
import './mainPage.scss';
import NavBar from '../components/navBar/NavBar';
import { Outlet } from 'react-router-dom';



export default function MainPage() {

  return (
  

      <div className="main-container">
      <NavBar/>
      <Outlet/>
      
      
      </div>
  

  );
}


