import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addList } from '../../store/moviesListSlice'
import './createWatchlist.scss'

export default function CreateWatchlist() {
  const dispatch = useDispatch()
  const [nameWatchList, setnameWatchList] = useState('')
  const [titleWatchList, settitleWatchList] = useState('')
  const [err, setErr] = useState('')
  const nameMovies = useSelector(e => e.moviesList.watchList)
  const navigate = useNavigate()


  const addWatchList = () => {
    if (nameWatchList.length === 0 || titleWatchList.length === 0) {
      setErr("Есть пустые поля")
      return
    }
    if (nameMovies.some(e => e.name === nameWatchList)) {
      setErr("У вас уже есть такое название")
    }
    else {
      dispatch(addList({
        "name": nameWatchList,
        "title": titleWatchList
      }))
      setErr('')
      settitleWatchList('')
      setnameWatchList('')
      navigate('/')
    }
  }
  return (

    <div className='container-create-watchlist'>
      <span className='title-add' >Создайте новую колекцию</span>
      <span className='span-wathlist'>Название</span>
      <input className='input-watchlist' type="text" value={nameWatchList} onChange={(e) => setnameWatchList(e.target.value)} />
      <span className='span-wathlist'>Описание</span>
      <input className='input-watchlist' type="text" value={titleWatchList} onChange={(e) => settitleWatchList(e.target.value)} />
      <div className='wr-btn'>
        <button className='add-List' onClick={addWatchList}>Создать коллекцию</button>
        <span className='err-mess'>{err}</span>
      </div>

    </div>
  )
}
