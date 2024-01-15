import React from 'react'
import "./css/App.css"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import data from "./assets/data.json"
import NavbarNew from './components/NavbarNew'
import Footer from './components/Footer'


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
          <Footer />
        </div>
        
    </div>
  )
}

export default App