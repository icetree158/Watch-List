import React from 'react'
import './notFound.scss'
import sadFace from '../../picture/sad-face-2691.svg'
export default function NotFound() {
    return (
        <div className='notFoundcontainer'>
            <div style={{ textAlign:'center',display:'flex', alignItems:'center'}}>
            4<img className='img-sadFace' src={sadFace} alt="sadFace" />4
            </div>
            
            <span className='spannotfound'> Страница не найдена</span>

        </div>
    )
}
