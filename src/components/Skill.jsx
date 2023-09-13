import React from 'react'
import {useAnimation, motion} from 'framer-motion'

const Skill = ({name, logo, skills}) => {
    const path = "developer_portfolio/src/assets/icons/logos/"
    return (
    <motion.div 
        className='category'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay: .25, ease: "easeIn"}}>
        {/* <img src={path + logo} className='category-logo' alt={name}/> */}
        <h3 className='category-title'>{name}</h3>
        <div className='category-skills'>
            {
                skills.map((skill,index) => {
                    return <div  key={index} className='skill-icon'>
                        <img src={path + skill.icon} alt={skill.name}/>
                        <span className='skill-tooltip'>{skill.name}</span>
                    </div>
                })
            }
        </div>
    </motion.div>
  )
}

export default Skill