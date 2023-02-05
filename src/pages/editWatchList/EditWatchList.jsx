import React from 'react'
import './editWatchList.scss'
import CustomInput from '../../components/UI/input/CustomInput'
import RedBtn from '../../components/UI/red-btn/RedBtn'
export default function EditWatchList() {
    return (
        <div className='edit-watchkist-cont'>
            <div className='tittle-btn'>
                <h2 className='edit-label'>Редактирование коллекции</h2>
                <button className='btn-del'>Удалить коллекцию</button>
            </div>
          
            <CustomInput>Название</CustomInput>
            <CustomInput>Описание</CustomInput>
            <span className='span-mov'>Фильмы</span>
            <div className='mov-section'>
                <img className='mini-poster' src="https://play-lh.googleusercontent.com/WSMFkoQ-KM-cWxEB7yEDcN8VOhW_Wn0M3Sym0vaka0WQRyIAo5J1Zmqw-VY2-47vo10M" alt="" />
                <span>Имя год</span>
                <button className='btn-del-mov'>Удалить</button>
            </div>
            <div className='mov-section'>
                <img className='mini-poster' src="https://play-lh.googleusercontent.com/WSMFkoQ-KM-cWxEB7yEDcN8VOhW_Wn0M3Sym0vaka0WQRyIAo5J1Zmqw-VY2-47vo10M" alt="" />
                <span>Имя год</span>
                <button className='btn-del-mov'>Удалить</button>
            </div>
            <div className='mov-section'>
                <img className='mini-poster' src="https://play-lh.googleusercontent.com/WSMFkoQ-KM-cWxEB7yEDcN8VOhW_Wn0M3Sym0vaka0WQRyIAo5J1Zmqw-VY2-47vo10M" alt="" />
                <span>Имя год</span>
                <button className='btn-del-mov'>Удалить</button>
            </div>
            <div className='mov-section'>
                <img className='mini-poster' src="https://play-lh.googleusercontent.com/WSMFkoQ-KM-cWxEB7yEDcN8VOhW_Wn0M3Sym0vaka0WQRyIAo5J1Zmqw-VY2-47vo10M" alt="" />
                <span>Имя год</span>
                <button className='btn-del-mov'>Удалить</button>
            </div>
            <RedBtn style={{width:'120px',marginLeft:'5.6vw', alignSelf:'flex-start',marginTop:"40px"}}>Сохранить</RedBtn>
        </div>
    )
}
