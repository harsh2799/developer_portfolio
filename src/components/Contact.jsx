import {React, useState} from 'react'

const Contact = ({href, title, image}) => {

    if (title == 'Gmail') return (
        <a href={"mailto:" + href} target='_blank'>
            <div title={title} className={image + ' icons'}>
            </div>
        </a>
    )


    return (
        <a href={href} target='_blank' >
            <div title={title} className={image + ' icons'}>
            </div>
        </a>
    )
}

export default Contact