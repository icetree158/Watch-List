import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './wathListInfo.scss'
import edit from '../../picture/Edit 1.png'
import CardContainer from '../../components/UI/cardContainer/CardContainer'
import MovieCard from '../../components/movieCard/MovieCard'

export default function WathListInfo() {
  const { name } = useParams()
  const [infoWatchlist, setInfoWatchlist] = useState({ 'movies': [] })
  const allWatchList = useSelector(e => e.moviesList.watchList)
  const navigate = useNavigate()

  useEffect(() => {
    if (allWatchList.find(e => e.name === name)) {
      setInfoWatchlist(allWatchList.find(e => e.name === name))
    }
    else navigate('/*')
  }, [name, allWatchList])

  const timeWathing = () => {
    let sum = 0
    infoWatchlist.movies.forEach(e => {
      if (e.duration) {
        sum += e.duration
      }
      if (typeof(e.filmLength)==='string') {
        let splitArr = e.filmLength.split(':')
        sum += Number(splitArr[0]) * 60 + Number(splitArr[1])
      }
      if (typeof(e.filmLength)==='number') {
        
        sum += e.filmLength
      }
    })
    return Math.trunc(sum / 60) + " Ч " + sum % 60 + " Мин"
  }

  return (
    <div className='container-edit-wathlist'>
      <div className='label-wathlist'>
        <h2 className='name-watchlist'>{infoWatchlist.name}</h2>
        <br />
        Описание:
        <br />
        <h3 className='title-watchlist'>{infoWatchlist.title}</h3>
        <Link to='edit' className='edit-btn'>
          <img src={edit} alt="edit" />
        </Link>
      </div>
      {infoWatchlist.movies.length ?
        <>
          <div className='info-container'>
            <CardContainer title={'Всего фильмов'} entry={infoWatchlist.movies.length} />
            <CardContainer title={'Общая длительность'} entry={timeWathing()} style={{ marginLeft: '20px' }} />
          </div>
          <div className='movies-container'>
            {infoWatchlist.movies.map((e, i) => {
              return <MovieCard dataMovie={e} id={e.kinopoiskId ? e.kinopoiskId : e.filmId} key={i} ></MovieCard>
            })}
          </div>
        </>
        : <Link style={{ color: '#f33f3f' }} to='/'>Пока здесь пусто... Хотите что-то добавить?</Link>
      }



    </div>
  )
}
