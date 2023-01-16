import React from 'react'
import './createWatchlist.scss'

export default function CreateWatchlist() {
  return (
    <div className='container-create-watchlist'>
        <span className='title-add' >Создайте новую колекцию</span>
        <span className='span-wathlist'>Название</span>
        <input className='input-watchlist' type="text" />
        <span className='span-wathlist'>Описание</span>
        <input className='input-watchlist' type="text" />
        <div className='wr-btn'>
        <button className='add-List'>Создать коллекцию</button>
        </div>
    </div>
  )
}
