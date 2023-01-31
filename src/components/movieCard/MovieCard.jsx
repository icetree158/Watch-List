import React from 'react'
import ribbon from '../../picture/ribbon.png'
import './movieCard.scss'
import { Link } from 'react-router-dom'
export default function MovieCard({ dataMovie, id }) {

    if (dataMovie.nameRu) {
        return (
            <Link to={'movie/' + id}>
                <div className='card-container'>

                    <div>
                        <button className='btn-add'> <img src={ribbon} alt="" /></button>
                        <img className='poster-img' src={dataMovie.posterUrlPreview} alt="" />

                    </div>

                    <div className='name-movie'>
                        {dataMovie.nameRu}
                        <br />
                        ({dataMovie.year})

                    </div>
                </div>
            </Link>

        )
    } else return null
}

