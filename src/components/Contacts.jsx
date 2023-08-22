import React from "react"
import "../css/Contacts.css"
import data from "../assets/data.json"
import Contact from "./Contact"

let Contacts = () => {

    const socialLinks = data.socialLinks;

    return <div className="contacts-container">
            {
                socialLinks.map((socialLink) => {
                    return <Contact key={socialLink.title} {...socialLink}/>
                })
            }
        </div>
    }

export default Contacts