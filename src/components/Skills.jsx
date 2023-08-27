import React from 'react'
import "../css/Skills.css"
import data from "../assets/data.json"
import Skill from './Skill'

const Skills = () => {

  const skillsets = data.skillsets;
  return (
    <div id='skills'>
        <div className='skills-container'>
          <h3 className='heading'>What am I good at!</h3>
          <div className='skills-category'>
              {
                skillsets.map((skillset, index) => {
                  return <Skill key={index} {...skillset} />
                })
              }
          </div>
        </div>
        <div className='project-container'>
          <h3 className='heading'>My Works</h3>
        </div>
    </div>
  )
}

export default Skills