import React from "react";
import Section from "./places.jsx"
import flag from "./assets/images/flag-for-flag-nigeria-svgrepo-com.svg"

export default function Body() {
    return(
        <div className="cont">

            <nav>
                <img className="flag" src={flag} alt="" />
                <h4>My Travel Journal</h4>
            </nav>

            <Section />
        </div>
        
    )
}