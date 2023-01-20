import React, { useRef, useState } from 'react'
import CustomInput from '../../components/UI/input/CustomInput'
import RedBtn from '../../components/UI/red-btn/RedBtn'
import './registration.scss'
import fakeAvatar from '../../picture/Group 105.png'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar, SetRegistration } from '../../store/userSlice'

export default function Registration() {
    const filePicer = useRef(null)
    const dispatch = useDispatch();
    const [preview, SetPreview] = useState({ 'picUrl': '' })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [err, setErr] = useState('')

    const clickload = () => {
        filePicer.current.click()
    }

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

    const checkValues = () => {
        if (name && email && password) {
            dispatch(SetRegistration({ "name": name, "email": email, "password": password }))
            setErr('')
        } else setErr("Есть пустые поля...")

        if (preview) dispatch(setAvatar(preview))
    }
    return (
        <div className='reg-container'>
            <div className='reg-wrapper'>
                {preview.picUrl ? <img className='preavatar' src={preview.picUrl} alt="avatar" /> : <img className='preavatar' src={fakeAvatar} alt="avatar" />}
                <div className='add-cont'>
                    <button className='file-click' onClick={clickload}></button>
                    <input className='file-inp' ref={filePicer} onChange={loadFile} type='file' accept='image/*, .png, .jpg, .swg, .jpeg' />
                    <span className='span-add' onClick={clickload} > Добавить фото</span>
                </div>
                <CustomInput onChange={e => setName(e.target.value)}>Имя*</CustomInput>
                <CustomInput onChange={e => setEmail(e.target.value)} >Email*</CustomInput>
                <CustomInput type='password' onChange={e => setpassword(e.target.value)} >Пароль*</CustomInput>
                <div className='form-btn'>

                    <RedBtn onClick={checkValues} >Создать профиль</RedBtn>
                    <span className='err-mess'>{err}</span>
                </div>
            </div>
        </div>
    )
}
