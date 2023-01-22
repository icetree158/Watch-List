import React, { useEffect, useRef, useState } from 'react'
import CustomInput from '../../components/UI/input/CustomInput'
import RedBtn from '../../components/UI/red-btn/RedBtn'
import './editProfile.scss'
import fakeAvatar from '../../picture/Group 105.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function EditProfile() {
    const filePicer = useRef(null)
    const [preview, SetPreview] = useState({ 'picUrl': '' })
    const [avatar, setavatar] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const user = useSelector(e => e.user)
    const loadFile = (e) => {
        if (e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0]
            reader.onloadend = () => {
                SetPreview({ 'picUrl': reader.result })
            };
            reader.readAsDataURL(file)
        }
    }
    const clickload = () => {
        filePicer.current.click()
    }
    useEffect((e) => {

        setavatar(user.avatar.picUrl)
        setName(user.name)
        setEmail(user.email)
        setpassword(user.password)
    }, [user.avatar.picUrl, user.name, user.email, user.password])

    return (
        <div className='edit-profile-container'>
          

            <div className='edit-profile-wrapper'>
            <div className='continer-top'>
                <div className='edit-span'>Редактирование профиля</div>
                <Link className='btn-logout'>Выйти</Link>
            </div>
                {avatar ? <img className='preavatar' src={avatar} alt="avatar" /> : <img className='preavatar' src={fakeAvatar} alt="avatar" />}
                <div className='add-cont'>
                    <button className='file-click' onClick={clickload}></button>
                    <input className='file-inp' ref={filePicer} onChange={loadFile} type='file' accept='image/*, .png, .jpg, .swg, .jpeg' />
                    <span className='span-add'  onClick={clickload} > Изменить фото</span>
                </div>
                <CustomInput value={name} onChange={e => setName(e.target.value)} >Имя*</CustomInput>
                <CustomInput value={email} onChange={e => setEmail(e.target.value)} >Email*</CustomInput>
                <CustomInput value={password} onChange={e => setpassword(e.target.value)} type='password'  >Пароль*</CustomInput>
                <div className='form-btn'>

                    <RedBtn >Применить изменения</RedBtn>
                    <span className='err-mess'></span>
                </div>
            </div>
        </div>
    )
}
