import {React, useState} from 'react'
import "../css/Navbar.css"
import data from "../assets/data.json"
import Navlink from "./Navlink"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    }

    const setActiveToDefault = () => {
        setIsActive(false);
    }

    const navlinks = data.navlinks;
    const logo = "	../../src/assets/icons/logo.png"

    return (
        <header className='glassmorph-background'>
            <img className='logo' src={logo} />
            <ul className='navlink-container'>
               {
                navlinks.map((navlink) => {
                    return <Navlink key={navlink.order} {...navlink}/>
                })
               }
            </ul>
        </header>
    )
}

export default Navbar