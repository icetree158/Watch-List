import React, { useEffect, useState } from 'react'
import './navBar.scss'
import home from '../../picture/Home.png'
import history from '../../picture/history.png'
import search from '../../picture/search.png'
import dots from '../../picture/dot3x.png'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../store/userSlice'
import arrowAdaptive from '../../picture/pngegg.png'


export default function NavBar() {
  const [activeDrop, setActive] = useState(false)
  const [searchWathList, setSearchWathList] = useState('')
  const [nameList, setNameList] = useState([])
  const WatchLists = useSelector((e) => e.moviesList.watchList)
  const user = useSelector(e => e.user)
  const dispatch = useDispatch()
  const [isNavbar, SetIsNavbar] = useState(false)
  const location = useLocation()

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

  useEffect(() => {
    SetIsNavbar(true)
  }, [location.pathname])


  useEffect(() => {

    if (searchWathList.length > 0) {
      setNameList((WatchLists.filter(e => e.name.includes(searchWathList))))
    } else setNameList(WatchLists)
  }, [searchWathList, WatchLists])

  return (

    <header className={isNavbar ? 'header-wrapper' : 'header-wrapper active'}   >
      <button onClick={e => SetIsNavbar(!isNavbar)}><img className='arrowAdaptive' src={arrowAdaptive} alt="arrowAdaptive" /></button>
      <svg className='close_butt' onClick={e => SetIsNavbar(!isNavbar)}><path fill='red' d="M 8.832031 7.496094 L 14.890625 1.433594 C 15.019531 1.304688 15.019531 1.09375 14.890625 0.960938 L 14.027344 0.0976562 C 13.964844 0.0351562 13.878906 0 13.789062 0 C 13.699219 0 13.617188 0.0351562 13.554688 0.0976562 L 7.496094 6.15625 L 1.433594 0.0976562 C 1.308594 -0.0273438 1.085938 -0.0273438 0.960938 0.0976562 L 0.0976562 0.960938 C -0.03125 1.09375 -0.03125 1.304688 0.0976562 1.433594 L 6.15625 7.496094 L 0.0976562 13.554688 C -0.03125 13.683594 -0.03125 13.894531 0.0976562 14.027344 L 0.960938 14.890625 C 1.023438 14.953125 1.109375 14.988281 1.199219 14.988281 C 1.289062 14.988281 1.371094 14.953125 1.433594 14.890625 L 7.496094 8.832031 L 13.554688 14.890625 C 13.617188 14.953125 13.703125 14.988281 13.789062 14.988281 C 13.878906 14.988281 13.964844 14.953125 14.027344 14.890625 L 14.890625 14.027344 C 15.019531 13.894531 15.019531 13.683594 14.890625 13.554688 Z M 8.832031 7.496094 " /></svg>

      <div className='header-container'>
        <h1 className='hColection'>Колекция фильмов</h1>
        <div className='container-inp'>
          <button><img src={search} alt="" /></button>
          <input placeholder='Поиск' value={searchWathList} onChange={(e) => setSearchWathList(e.target.value)} />
        </div>

        <Link className='link-navBar' to='/'>
          <button className='nav-btn'> <img src={home} alt="" /> Домой</button>
        </Link>


        <button className='nav-btn'> <img src={history} alt="" /> История</button>
        <Link className='link-navBar' to='/addWatchList'>
          <button className='add-List'>+ Добавить колекцию</button>
        </Link>

        <span className='colections'>Мои колекции</span>
        <div className='container-ul'>
          <ul>
            {nameList.map((e, i) => {
              return <Link to={'watchList/' + e.name} key={i}> <li >{e.name}</li></Link>
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
