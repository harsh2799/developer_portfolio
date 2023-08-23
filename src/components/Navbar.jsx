import {React, useState, useEffect} from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import "../css/Navbar.css"
import data from "../assets/data.json"
import Navlink from "./Navlink"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen(!menuOpen);
    }

    const navlinks = data.navlinks;
    const logo = "	../../src/assets/icons/logo.png"

    return (
        <header>
            <div  className='glassmorph-background header-container'>
                <img className='logo' src={logo} />
                <ul className='navlink-container'>
                {
                    navlinks.map((navlink) => {
                        return <Navlink key={navlink.order} {...navlink}/>
                    })
                }
                </ul>
            </div>
        </header>
    )
}

export default Navbar