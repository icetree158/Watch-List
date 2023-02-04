import React, { useEffect, useState, useRef } from 'react'
import './welcome.scss'
import ribbon from '../../picture/ribbon.png'
import Checkmark from '../../picture/Checkmark.png'
import search from '../../picture/search.png'
import MovieCard from '../../components/movieCard/MovieCard'
import getPopularMovies from '../../http/getPopularMovies'
import getMovieByKeyWord from '../../http/getMovieByKeyWord'
import DotsLoader from '../../components/UI/Loaders/DotsLoader/DotsLoader'
import Pagination from '../../components/pagination/Pagination'
import Modal from '../../components/modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addMovie } from '../../store/moviesListSlice'


export default function Welcome() {
    const [dataMovie, setDataMovie] = useState([])
    const [load, setLoad] = useState(true)
    const [title, setTitle] = useState('Популярное сейчас')
    const [pages, setPages] = useState()
    const [curpage, setCurPage] = useState()
    const [activeCard, setActiveCard] = useState({})
    const [modal, setModal] = useState(false)
    const searchInp = useRef()
    const watchLists = useSelector((e) => e.moviesList.watchList)
    const dispath = useDispatch()
    
    useEffect(() => {
        setLoad(true)
        getPopularMovies().then(res => {
            setDataMovie(res.items)
            setLoad(false)
        })
    }, [])

    useEffect(() => {

        searchmovies()

    }, [curpage, searchInp])


    const searchmovies = () => {
        if (searchInp.current.value) {
            setLoad(true)
            getMovieByKeyWord(searchInp.current.value, curpage).then(e => {
                setDataMovie(e.films)
                setPages(e.pagesCount)
                setLoad(false)
                setTitle('Результаты поиска')

            })
        }
    }
    const selectWatchlist = () => {

        if (!watchLists.length) {
            return <Link style={{ color: '#f33f3f' }} to='/addWathlist'>У вас еще нету коллекций хотите создать?</Link>
        } else {
            return watchLists.map((e, i) => {
                return <button onClick={elem => {
                    dispath(addMovie({ 'infoMovie': activeCard, 'numArr': i }))
                    setModal(false)
                }} key={e.name}>{e.name}</button>
            })
        }
    }

    return (
        <div className='wel-container'>

            <div className='info'>

                <span style={{ color: '#E1E1E1' }}>Добро пожаловать в вашу </span>
                <span style={{ color: '#F33F3F' }}>Колекцию фильмов</span>
                <article className='info-use'>
                    Просматривайте фильмы, добавляйте их в свою колекцию и делитесь ими с друзьями. Просто нажмите  <img src={ribbon} alt="" /> чтобы добавить фильм или <img src={Checkmark} alt="Checkmark" />  пометить фильм как просмотренный.
                </article>
            </div>

            <div className='input-movies'>
                <div>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Поиск фильмов по названию' ref={searchInp} />
                </div>
                <button onClick={(e) => { curpage === 1 ? searchmovies() : setCurPage(1) }} >Найти</button>
            </div>

            <span className='popular-now'>{title}</span>
            {load ? <DotsLoader /> :
                <>
                    <div className='movies-cards'>
                        {dataMovie.length ?
                            dataMovie.map((e) => {
                                return <MovieCard setModal={setModal} setActiveCard={setActiveCard} key={e.filmId ? e.filmId : e.kinopoiskId} dataMovie={e} id={e.kinopoiskId ? e.kinopoiskId : e.filmId} />
                            })
                            : <span>Ничего не найдено </span>
                        }


                    </div>
                    <Pagination curpage={Number(curpage)} pages={pages} setCurPage={setCurPage} />
                    <Modal active={modal} setActive={setModal} title='Выберете коллекцию'>
                        {selectWatchlist()}
                    </Modal>
                </>
            }



        </div>
    )
}
