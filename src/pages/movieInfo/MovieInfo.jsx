import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getMovieById from '../../http/getMovieById'
import './movieInfo.scss'
import great from "../../picture/great _ 80.png"
import normal from "../../picture/normal _35 and _80.png"
import awful from "../../picture/awful _35.png"
import CircleLoader from '../../components/UI/Loaders/CircleLoader/CircleLoader'
export default function MovieInfo() {
    const { id } = useParams()
    const [infoMovie, setInfoMovie] = useState({ "genres": [], "nameRu": "", "year": "", "filmLength": "" })
    const [isLoad, setIsLoad] = useState(true)
    const [color, setColor] = useState()
   
    useEffect(() => {
        getMovieById(id)
            .then(res => {
                setInfoMovie(res)
                setIsLoad(false)
                takeBorder(res)
            })

    }, [id])


    const takeBorder = (infoMovie) => {
        let rating = infoMovie.ratingKinopoisk
        if (!rating) {
            rating = infoMovie.ratingImdb
        }
        if (rating >= 8) setColor('green')
        if (rating < 8 && rating > 5) setColor('yellow')
        if (rating < 5 && rating > 0) setColor('red')
    }

    const markMovie = () => {

        let rating = infoMovie.ratingKinopoisk
        if (!rating) {
            rating = infoMovie.ratingImdb
        }

        if (rating >= 8) {

            return <>
                <img src={great} alt="great" />
                <div className='num-rating'>{rating + "/10"}</div>

            </>
        }
        if (rating < 8 && rating > 5) {

            return <>
                <img src={normal} alt="normal" />
                <div className='num-rating'>{rating + "/10"}</div>

            </>
        }
        if (rating < 5 && rating > 0) {

            return <>
                <img src={awful} alt="awful" />
                <div className='num-rating'>{rating + "/10"}</div>

            </>
        }

        if (!rating) return "Этот фильм еще не оценили"

    }

    return (

        <div className={isLoad ? 'movie-info-container load' : 'movie-info-container'}>
            {isLoad ? <CircleLoader /> : <><img className='porster-img' src={infoMovie.posterUrl} alt={infoMovie.nameRu} />

                <div className='info-movie'>
                    <span className='title-movie'>{infoMovie.nameRu + ' (' + infoMovie.year + ')'}</span>
                    <div className='genres-time'>
                        {infoMovie.genres.map(e => {
                            return e.genre[0].toUpperCase() + e.genre.slice(1) + " "
                        })}
                        <span>{Math.trunc(infoMovie.filmLength / 60) + " Ч " + infoMovie.filmLength % 60 + " Мин"}</span>
                    </div>

                    <div className='slogan-block'>
                        <span className='slogan-title'>Описание</span>
                        <br />
                        <span className='slogan'>{infoMovie.description}</span>
                    </div>
                    <div className='container-score'>

                        <div className= {'rating-kinopoisk '+color}>

                            {markMovie()}

                        </div>
                        <button className='add-to-wachlist'>Добавить в коллекцию</button>
                    </div>
                </div>
            </>}
        </div>


    )
}
