import React from 'react'
import RedBtn from '../UI/red-btn/RedBtn'
import './pagination.scss'


export default function Pagination({ pages, curpage, setCurPage }) {

    const pagination = () => {

        const arr = []
        let lastPage
      
        if (pages > 20) {
            lastPage = 20
        } else lastPage = Math.ceil(pages)

        const firsPage = 1

        if (curpage >= 6 && pages > 10 && !(curpage + 3 >= lastPage)) {
            for (let i = curpage - 3; i <= curpage + 3; i++) {
                arr.push(i)
            }

            arr.push(lastPage)
            arr.unshift(firsPage)

            return arr.map((e) => {
                if (curpage === e) return <RedBtn key={e} className='redbtn active'>{e}</RedBtn>
                else return <RedBtn key={e}>{e}</RedBtn>
            })
        }

        if (curpage < 6 && pages > 10) {

            for (let i = 1; i <= 9; i++) {
                arr.push(i)
            }

            return arr.map(e => {
                if (curpage === e) return <RedBtn key={e} className='redbtn active'>{e}</RedBtn>
                else return <RedBtn key={e}>{e}</RedBtn>
            })
        }
        if (pages === 1) {
            return
        }
        if (pages <= 10) {

            for (let i = 1; i <= pages; i++) {
                arr.push(i)
            }
            return arr.map(e => {
                if (curpage === e) return <RedBtn key={e} className='redbtn active'>{e}</RedBtn>
                else return <RedBtn key={e} >{e}</RedBtn>
            })
        }
        if (curpage + 3 >= lastPage && pages > 10) {

            for (let i = lastPage - 7; i <= lastPage; i++) {
                arr.push(i)
            }
            arr.unshift(firsPage)
            return arr.map((e) => {
                if (curpage === e) return <RedBtn key={e} className='redbtn active'>{e}</RedBtn>
                else return <RedBtn key={e}>{e}</RedBtn>
            })
        }

    }

    return (
        <div className='buttons-page' onClick={(e) => setCurPage(e.target.outerText)}>
            {pagination()}
        </div>
    )
}
