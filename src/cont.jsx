import React from "react";
import Section from "./places.jsx"

export default function Body() {
    return(
        <div className="cont">

            <nav>
                <img className="flag" src="/public/flag-for-flag-nigeria-svgrepo-com.svg" alt="" />
                <h4>My Travel Journal</h4>
            </nav>

            <Section />
        </div>
        
    )
}