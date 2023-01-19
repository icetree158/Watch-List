import React from 'react'
import classes from './redBtn.module.scss'

export default function RedBtn({children,...props}) {
    return (
        <button{...props} className={classes.redbtn}>{children}</button>
    )
}
