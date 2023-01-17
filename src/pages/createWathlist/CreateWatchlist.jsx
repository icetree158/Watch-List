import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../components/modal/Modal'
import { addList } from '../../store/moviesListSlice'
import './createWatchlist.scss'

export default function CreateWatchlist() {
  const dispatch = useDispatch()
  const [nameWatchList, setnameWatchList] = useState('')
  const [titleWatchList, settitleWatchList] = useState('')
  const [modal, setModal] = useState(false)
  const [err, setErr] = useState('')
  const nameMovies = useSelector(e => e.moviesList.watchList)
  console.log(nameMovies)

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
    }
  }
  return (
    <div className='container-create-watchlist'>
      <span className='title-add' >Создайте новую колекцию</span>
      <span className='span-wathlist'>Название</span>
      <input className='input-watchlist' type="text" onChange={(e) => setnameWatchList(e.target.value)} />
      <span className='span-wathlist'>Описание</span>
      <input className='input-watchlist' type="text" onChange={(e) => settitleWatchList(e.target.value)} />
      <div className='wr-btn'>
        <button className='add-List' onClick={addWatchList}>Создать коллекцию</button>
        <span className='err-mess'>{err}</span>
      </div>
      <Modal active={modal} setActive={setModal} title="Ну добавил ты и что дальше?">

      </Modal>
    </div>
  )
}
