import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './wathListInfo.scss'
import edit from '../../picture/Edit 1.png'
import CardContainer from '../../components/UI/cardContainer/CardContainer'

export default function WathListInfo() {
  const { name } = useParams()
  const [infoWatchlist, setInfoWatchlist] = useState({})
  const allWatchList = useSelector(e => e.moviesList.watchList)
  useEffect(() => {
    setInfoWatchlist(allWatchList.find(e => e.name === name))
  }, [name, allWatchList])



  return (
    <div className='container-edit-wathlist'>
      <div className='label-wathlist'>
        <h2 className='name-watchlist'>{infoWatchlist.name}</h2>
        <br />
        Описание:
        <br />
        <h3 className='title-watchlist'>{infoWatchlist.title}</h3>
        <button className='edit-btn'>
          <img src={edit} alt="" />
        </button>
      </div>
      <div className='info-container'>
        <CardContainer title={'Всего фильмов'} entry={10}  />
        <CardContainer  title={'Осталось просмотреть'} entry={20} style={{marginLeft:'20px'}}/>
        <CardContainer  title={'Средняя оценка'} entry={73} style={{marginLeft:'20px'}}/>
      </div>




    </div>
  )
}
