import React, {  useState } from 'react'
import './navBar.scss'
import home from '../../picture/Home.png'
import history from '../../picture/history.png'
import search from '../../picture/search.png'
import dots from '../../picture/dot3x.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function NavBar() {
  const nameWatchList=useSelector((e)=>e.moviesList.watchList)
  const [activeDrop, setActive]=useState(false)
  const showDrop =()=>{
    setActive(!activeDrop)
  }
  
  return (

    <header>
      <div className='header-container'>
        <h1>Колекция фильмов</h1>
        <div className='container-inp'>
          <button><img src={search} alt="" /></button>
          <input placeholder='Поиск' />
        </div>
      
        <Link className='link-navBar' to='/'>
          <button className='nav-btn'> <img src={home} alt="" /> Домой</button>
        </Link>


        <button className='nav-btn'> <img src={history} alt="" /> История</button>
        <Link className='link-navBar' to='addWathlist'>
          <button className='add-List'>+ Добавить колекцию</button>
        </Link>

        <span className='colections'>Мои колекции</span>
        <div className='container-ul'>
        <ul>
        {nameWatchList.map((e)=>{
          return <li key={e.name}>{e.name}</li>
        })}
          
        </ul>
        </div>
        <div className='user'>
         
          <img className='avatar' src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" alt="" />
          
          <span>Гость</span>
          <div className='dropdown'>
          <button onClick={(e)=>showDrop()}><img src={dots} alt="" /> </button>
          <div className={activeDrop?'my-drop show':'my-drop'}>
            <Link>Войти</Link>
            <Link>Зарегистрироваться</Link>
            <Link></Link>
          </div>
          </div>
        </div>
      </div>
    </header>


  )
}
