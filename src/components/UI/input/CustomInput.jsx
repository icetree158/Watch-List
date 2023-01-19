import React from 'react'
import './customInput.scss'
export default function CustomInput({children, ...props}) {
  return (
    <div className='conainer-inp'>
    <span className='title'>{children}</span>
    <input {...props}  className='cust-inp'/>
    </div>
  )
}
