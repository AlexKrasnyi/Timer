import React from 'react'


export const Display = (props) => {
    const {h, m, s} = props.time
    return (
        <div className='display'>
            <div className='display__hours'>{ h >=10 ? h : `0${h}`}</div>
            <div className='display__minutes'>{m >=10 ? m : `0${m}`}</div>
            <div className='display__seconds'>{s >=10 ? s : `0${s}`}</div>
        </div>
    )
}