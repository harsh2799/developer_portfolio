import React from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'


const Job = ({id, company_name, position, time, skills, description, logo}) => {
  
  const logoPath = "/assets/icons/logos/";
  
  return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay: .25, ease: "easeIn"}}
        className={id%2 == 0? "container right slide-right": "container left slide-left"}>
        <div className="content">
          <h2 className='company-name'>{company_name}</h2>
          <h4 className='position-time'>{position}  <span className='time'>{time}</span></h4>
          <p className='work-description'>
            {description}
          </p>
          <div className='skills'>
              {skills.map((skill, index) => {
                  return <span key={index} className='skill'>{skill}</span>
              })}
          </div>
        </div>
        <div className={id%2 == 0? "content-logo logo-left": "content-logo logo-right"}>
          <img src={logoPath + logo} alt={company_name} />  
        </div>
      </motion.div>
  )
}

export default Job