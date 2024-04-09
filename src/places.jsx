import React from "react";
import Box from "./place-box"
import data from "./data"

export default function placeSection() {
    const element = data.map(place => {
        return(
            <>
              <Box {...place}/>
            </>
        )
    })
    return(
        <section className="places">
            {element}
        </section>
    )
}