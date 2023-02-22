import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../../components/UI/input/CustomInput'
import RedBtn from '../../components/UI/red-btn/RedBtn'
import './login.scss'

export default function Login() {
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <CustomInput type='email'>Email*</CustomInput>
                <CustomInput type='password'>Пароль*</CustomInput>
                <div className='select-buttons'>
                    <RedBtn style={{ marginTop: "30px", width:'90px' }}>Войти</RedBtn>
                    <div className='or-creacte'>Или <Link to='/registration'>Создайте аккаунт</Link></div>
                </div>
            </div>
        </div>
    )
}
