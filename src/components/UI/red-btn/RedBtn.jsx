import React from 'react'
import './redBtn.scss'

export default function RedBtn({ children, ...props }) {
    
    return (
        <button {...props} className={props.className ? props.className : "redbtn"}>{children}
        </button>
    )
}
