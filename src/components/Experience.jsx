import React from 'react'
import "../css/Experience.css"
import Job from './Job'
import data from "../assets/data.json"

export const Experience = () => {

  const experiences = data.experience;
  return (
    <div id='experience'>
        <h1 className="heading">My Experience</h1>
        <div className='excontent'>
          <div className='timeline'>
            {
              experiences.map((experience) => {
                
                return <Job key={experience.id} {...experience} />
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Experience