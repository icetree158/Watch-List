import React, { useEffect, useState } from 'react'
import './welcome.scss'
import ribbon from '../../picture/ribbon.png'
import Checkmark from '../../picture/Checkmark.png'
import search from '../../picture/search.png'
import MovieCard from '../../components/movieCard/MovieCard'
import getPopularMovies from '../../http/getPopularMovies'
export default function Welcome() {
    const [dataMovie, setDataMovie] = useState([])

    useEffect(() => {
        getPopularMovies().then(res => {
            setDataMovie(res.items)
            
        })
    },[])

    console.log(123)
    return (
        <div className='wel-container'>
            <div className='info'>

                <span style={{ color: '#E1E1E1' }}>Добро пожаловать в вашу </span>
                <span style={{ color: '#F33F3F' }}>Колекцию фильмов</span>
                <article className='info-use'>
                    Просматривайте фильмы, добавляйте их в свою колекцию и делитесь ими с друзьями. Просто нажмите <img src={ribbon} alt="ribbon" /> чтобы добавить фильм или <img src={Checkmark} alt="Checkmark" /> пометить фильм как просмотренный.
                </article>
            </div>
            <div className='input-movies'>
                <div>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Поиск фильмов по названию                    ' />
                </div>
                <button>Найти</button>
            </div>
            <span className='popular-now'>Популярное сейчас</span>
            <div className='movies-cards'>
                {dataMovie.map((e)=>{
                    return <MovieCard key={e.kinopoiskId} dataMovie={e}     />

                })}
                

            </div>
        </div>
    )
}
