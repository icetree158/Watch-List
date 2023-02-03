import React from 'react'
import ribbon from '../../picture/ribbon.png'
import './movieCard.scss'
import { Link } from 'react-router-dom'

export default function MovieCard({ dataMovie, id,setActiveCard }) {

     if (dataMovie.nameRu) {
        return (

            <div className='card-container'>

                <div>
                    <button className='btn-add' onClick={e=>setActiveCard(dataMovie)}> <img src={ribbon} alt="" /></button>
                    <img className='poster-img' src={dataMovie.posterUrlPreview} alt="" />

                </div>
                <Link to={'movie/' + id}>
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

