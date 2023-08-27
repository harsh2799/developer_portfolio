import React from 'react'
import "./css/App.css"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Navbar from './components/Navbar'
import data from "./assets/data.json"
import NavbarNew from './components/NavbarNew'


const App = () => {
  
  return (
    <div className='main-container'>
        {/* <Navbar /> */}
        <NavbarNew />
        <Contacts />
        
        <div className='content-container'>
          <About />
          <Experience />
          <Skills />
        </div>
        
    </div>
  )
}

export default App