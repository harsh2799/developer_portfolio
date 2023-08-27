import {React} from "react"
import "../css/About.css"

const About = () => {
    return <>
        <div id="about" className="info-container">
            <div>
                
                <h1 className="name glitch">Harsh Mishra</h1>
              
                <h3 className="title typing-demo">Software Developer, Full Stack</h3>
                <span className="divider"></span>
                <p className="description">
                I am currently pursuing a Master's degree in Applied Computer Science at Concordia University. I have two years of experience as a software developer, with a strong foundation in various programming languages and software development methodologies. My expertise includes developing software applications, debugging and troubleshooting code, and working in a team environment. I am also well-versed in various software development tools and technologies. I am eager to continue growing my skills and contributing to the success of technology-driven companies.
                </p>
            </div>
            <a className="explore" href="#experience">
                <span className="text">Explore More</span>
                <svg id="more-arrows">
                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
            </a>
        </div>
    </>
}

export default About