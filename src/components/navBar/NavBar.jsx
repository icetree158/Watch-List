import React, { useEffect, useState } from 'react'
import './navBar.scss'
import home from '../../picture/Home.png'
import history from '../../picture/history.png'
import search from '../../picture/search.png'
import dots from '../../picture/dot3x.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../store/userSlice'


export default function NavBar() {
  const nameWatchList = useSelector((e) => e.moviesList.watchList)
  const [activeDrop, setActive] = useState(false)
  const user = useSelector(e => e.user)
  const dispatch = useDispatch()
  const showDrop = () => {
    setActive(!activeDrop)
  }

  const clickNotDrop = () => {
    setActive(false)

  }
  useEffect(() => {
    document.addEventListener(('click'), clickNotDrop)

    return () => {
      document.removeEventListener(('click'), clickNotDrop)
    }
  }, [])

  const logOut = () => {
    dispatch(setAuth())

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
            {nameWatchList.map((e) => {
              return <li key={e.name}>{e.name}</li>
            })}

          </ul>
        </div>
        <div className='user'>

          {user.avatar.picUrl && user.isAuth ? <img className='avatar' src={user.avatar.picUrl} alt="" />
            : <img className='avatar' src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" alt="" />
          }
          {user.name && user.isAuth ?
            <Link className='nameuser' to='editprofile'><span>{user.name}</span></Link>
            : <Link className='nameuser' to='registration'><span>Гость</span></Link>}
          <div className='dropdown'>
            <button onClick={(e) => { showDrop(); e.stopPropagation() }}><img src={dots} alt="" /> </button>
            <div className={activeDrop ? 'my-drop show' : 'my-drop'} >
              {user.isAuth ?
                <Link to='/' onClick={logOut}>Выйти</Link>
                :
                <><Link to='login'>Войти</Link>
                  <Link to='registration'>Зарегистрироваться</Link>
                </>}
            </div>
          </div>
        </div>
      </div>
    </header>


  )
}
