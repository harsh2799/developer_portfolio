import React from 'react'
import {useAnimation, motion} from 'framer-motion'

const Skill = ({name, logo, skills}) => {
    const path = "../../src/assets/icons/logos/"
    return (
    <motion.div 
        className='category'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay: .25, ease: "easeIn"}}>
        <img src={path + logo} className='category-logo' alt={name}/>
        <h3 className='category-title'>{name}</h3>
        <div className='category-skills'>
            {
                skills.map((skill) => {
                    return <span className='skill'>{skill}</span>
                })
            }
        </div>
    </motion.div>
  )
}

export default Skill