import React from "react";

export default function placeBox(props){
    return(
        <div className="box">
            <img src={props.locationImage} alt=""  className="travel--image" />
            <div className="info">
                <div className="top">
                    <img src="./public/location-sign-svgrepo-com.svg" alt="" width="10px" className="location-icon" />
                    <p className="travel--location">{props.location}</p>
                    <a href={props.googleMapURL} className="travel--location--link">View on Google Maps</a>
                </div>
                <h1 className="travel--place">{props.title}</h1>
                <h3 className="travel--duration">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
        
    )
}