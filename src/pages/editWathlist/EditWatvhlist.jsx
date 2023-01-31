import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './editWatvhlist.scss'
import edit from '../../picture/Edit 1.png'

export default function EditWatvhlist() {
  const { name } = useParams()
  const [infoWatchlist, setInfoWatchlist] = useState({})
  const allWatchList = useSelector(e => e.moviesList.watchList)
  useEffect(() => {
    setInfoWatchlist(allWatchList.find(e => e.name === name))
  }, [name, allWatchList])
  


  return (
    <div >
      <span>{infoWatchlist.name}</span>
      <img src={edit} alt="" />
      <span>{infoWatchlist.title}</span>

    </div>
  )
}
