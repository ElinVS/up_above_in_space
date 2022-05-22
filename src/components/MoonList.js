import React from "react"
import MoonItem from "./MoonItem"

const MoonList = ({moon, onMoonClick}) => {

    const moonArray = moon.map ((moon) => {
        return <MoonItem moon={moon} onMoonClick={onMoonClick}/>

    })

    return (
        <>
            <div className="container">
                <div id="moon">
                    <h4>{moonArray}</h4>   
                </div>
            </div>
        </>
    )
}




export default MoonList





