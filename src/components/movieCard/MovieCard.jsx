import React from 'react'
import ribbon from '../../picture/ribbon.png'
import normal from '../../picture/normal _35 and _80.png'
import Checkmark from '../../picture/Checkmark.png'
import './movieCard.scss'

export default function MovieCard({dataMovie}) {

    console.log(dataMovie)

    return (
        <div className='card-container'>
         
            <div>
            <button className='btn-add'> <img src={ribbon} alt="" /></button>
            <img className='poster-img' src= {dataMovie.posterUrlPreview} alt="" />
           
            </div>
            <div className='mark-container'>

                <img className='mark-img' src={normal} alt="" />
                <span>68/100</span>

            </div>
            <div className='name-movie'>
            {dataMovie.nameRu}
            <br />
           ({dataMovie.year})
            
            </div>
        </div>
    )
}
