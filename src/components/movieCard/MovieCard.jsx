import React from 'react'
import ribbon from '../../picture/ribbon.png'
import greenribon from '../../picture/hover_add.png'
import './movieCard.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MovieCard({ dataMovie, id, setActiveCard, setModal, ...props }) {
    const addedMovies = useSelector((e) => e.moviesList.addedMovies)
    const checkadd = (e) => {
        if (!addedMovies.includes(id)) {
            setActiveCard(dataMovie)
            setModal(true)
            e.preventDefault()
        } else e.preventDefault()
    }
   
    if (dataMovie.nameRu) {
        return (

            <div className='card-container' {...props}>
                <Link to={'/movie/' + id}>
                    <div>
                        <button className='btn-add' onClick={e => checkadd(e)}>
                            <img src={addedMovies.includes(id) ? greenribon : ribbon} alt="ribbon" />
                        </button>
                        <img className='poster-img' src={dataMovie.posterUrlPreview} alt="Preview" />

                    </div>

                    <div className='name-movie'>
                        {dataMovie.nameRu}
                        <br />
                        ({dataMovie.year})

                    </div>
                </Link>

            </div>


        )
    } else return null
}

