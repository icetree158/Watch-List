import React from 'react'
import './cardContainer.scss'

export default function CardContainer({title,entry, ...props}) {
  return (
    <div {...props} className='info-card'>
        <p className='title'>{title}</p>
        
        <p className='redArticle'>{entry}</p>
        
    </div>
  )
}
