import React from 'react'

const Navlink = ({title, href}) => {
  return (
    <li className='navlink expand'>
        <a href={href}>{title}</a>
    </li>
  )
}

export default Navlink