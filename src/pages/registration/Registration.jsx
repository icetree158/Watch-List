import React from 'react'
import CustomInput from '../../components/UI/input/CustomInput'
import RedBtn from '../../components/UI/red-btn/RedBtn'
import './registration.scss'
import fakeAvatar from '../../picture/Group 105.png'
import cam from '../../picture/Vector.png'

export default function Registration() {
    return (
        <div className='reg-container'>
            <div className='reg-wrapper'>
                <img src={fakeAvatar} alt="avatar" />
                <div className='add-cont'>
                    <img src={cam} alt="camera" />
                    <span className='span-add'> Добавить фото</span>
                </div>
                <CustomInput>Имя*</CustomInput>
                <CustomInput>Email*</CustomInput>
                <CustomInput type='password'>Пароль*</CustomInput>
                <RedBtn>Создать профиль</RedBtn>
            </div>
        </div>
    )
}
