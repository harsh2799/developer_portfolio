import React from 'react'

const Navlink = ({title, href, hideNavbar}) => {
  return (
    // className='navlink expand'
    
        <a className="expand" href={href} onClick={hideNavbar}>{title}</a>
    
  )
}

export default Navlink