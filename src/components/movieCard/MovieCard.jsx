import React from 'react'
import ribbon from '../../picture/ribbon.png'
import './movieCard.scss'
import { Link } from 'react-router-dom'
export default function MovieCard({ dataMovie }) {



    return (
        <Link to={'movie/'+dataMovie.kinopoiskId}>  
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
}
