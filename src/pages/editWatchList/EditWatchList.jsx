import React, { useEffect, useState } from 'react'
import './editWatchList.scss'
import CustomInput from '../../components/UI/input/CustomInput'
import RedBtn from '../../components/UI/red-btn/RedBtn'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editAddMovies, editList, removeWatchList } from '../../store/moviesListSlice'
export default function EditWatchList() {
    const { name } = useParams()
    const [infoWatchlist, setInfoWatchlist] = useState({ 'movies': [] })
    const allWatchList = useSelector(e => e.moviesList.watchList)
    const [nameWatchlist, setNameWatchlist] = useState('')
    const [titleWatchlist, setTitleWatchlist] = useState('')
    const [arrRemoveMovie, setArrRemoveMovie] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        let inf = allWatchList.find(e => e.name === name)
        setInfoWatchlist(inf)
        setNameWatchlist(inf.name)
        setTitleWatchlist(inf.title)
    }, [name, allWatchList])

    const setEditWatchlist = () => {
        dispatch(editList({
            'prevName': infoWatchlist.name,
            'name': nameWatchlist,
            'title': titleWatchlist,
            'movies': infoWatchlist.movies
        }))
        if (arrRemoveMovie.length) {
            dispatch(editAddMovies({
                'id': arrRemoveMovie
            }))
        }
        navigate('/')

    }
    const removeMovie = (elem) => {
        let sortMovies = infoWatchlist.movies.filter(e => (e.kinopoiskId ? e.kinopoiskId : e.filmId) !== Number(elem.target.value))
        setInfoWatchlist({
            ...infoWatchlist,
            'movies': sortMovies
        })
       
        setArrRemoveMovie(prev => [...prev, Number(elem.target.value)])

    }
    const removeList=()=>{
       dispatch(removeWatchList({
        'prevName': infoWatchlist.name
       }))
       navigate('/')
    }
    const renderMovies = () => {
        return infoWatchlist.movies.map(e => {

            return <div className='mov-section' key={e.kinopoiskId ? e.kinopoiskId : e.filmId}>
                <Link className='link-movie' to={'/movie/' + (e.kinopoiskId ? e.kinopoiskId : e.filmId)}>
                    <img className='mini-poster' src={e.posterUrl} alt={e.nameRU} />
                    <span>{e.nameRu + " (" + e.year + ')'}</span>
                </Link>
                <button value={e.kinopoiskId ? e.kinopoiskId : e.filmId} className='btn-del-mov' key={e.kinopoiskId ? e.kinopoiskId : e.filmId} onClick={e => removeMovie(e)}>Удалить</button>
            </div>
        })
    }
    return (
        <div className='edit-watchkist-cont'>
            <div className='tittle-btn'>
                <h2 className='edit-label'>Редактирование коллекции</h2>
                <button className='btn-del' onClick={removeList}>Удалить коллекцию</button>
            </div>

            <CustomInput value={nameWatchlist} onChange={(e) => setNameWatchlist(e.target.value)} >Название</CustomInput>
            <CustomInput value={titleWatchlist} onChange={(e) => setTitleWatchlist(e.target.value)}>Описание</CustomInput>
            {infoWatchlist.movies.length ?
                <> <span className='span-mov'>Фильмы</span>
                    {renderMovies()}
                </>
                : null
            }

            <RedBtn style={{ width: '120px', marginLeft: '5.6vw', alignSelf: 'flex-start', marginTop: "40px" }} onClick={e => setEditWatchlist()}>Сохранить</RedBtn>
        </div>
    )
}
