import {React, useState} from 'react'

const Contact = ({href, title, image}) => {
    const classes = `${image} icons`
    return (
        <a href={href}>
            <div title={title} className={classes}>
            </div>
        </a>
    )
}

export default Contact