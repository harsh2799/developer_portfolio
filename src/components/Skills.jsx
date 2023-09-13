import React from 'react'
import "../css/Skills.css"
import data from "../assets/data.json"
import Skill from './Skill'
import Project from './Project'


const Skills = () => {

  const skillsets = data.skillsets;
  const projects = data.projects;

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
          <div className='project-list'>
             {
              projects.map((project) => {
                return <Project key={project.id} {...project}/>
              })
             }
          </div>
        </div>
    </div>
  )
}

export default Skills