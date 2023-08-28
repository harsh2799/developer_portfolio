import {React, useRef} from 'react'
import data from "../assets/data.json"
import Navlink from "./Navlink"
import Contact from './Contact'
import { FaBars, FaTimes } from 'react-icons/fa'
import "../css/NavbarNew.css"
import "../css/Navbar.css"
import { logo } from "../../public/logo.png"

const NavbarNew = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    }

    const navlinks = data.navlinks;
    const sl = data.socialLinks;
    return (<header className='glassmorph-background'>
        <div>
            <img className='logo' src={logo} />
        </div>
        <nav ref={navRef}>
            {
                navlinks.map((navlink) => {
                    return <Navlink key={navlink.order} {...navlink} hideNavbar={hideNavbar}/>
                })
            }
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
            <div className='navbar-contacts'>
                {
                    sl.map((socialLink) => {
                        return <Contact key={socialLink.title} {...socialLink}/>
                    })
                }
            </div>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>)
}

export default NavbarNew