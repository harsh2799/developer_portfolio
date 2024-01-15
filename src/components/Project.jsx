import React from 'react'

const Project = ({id, title, github_link, page_link, image_source}) => {
    const image_path = "/assets/background-image/space.jpg";
    
    return (
    <a className='project' href={github_link} target='_blank'>
        <span className='project-id'>{id}</span>
        <img src={image_path + "" + image_source} alt={title}/>
        <h4 className='project-title'>{title}</h4>
    </a>
  )
}

export default Project