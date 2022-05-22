import React, { useState } from "react"
import SpaceList from "../components/SpaceList"
import SpaceData from "../data/SpaceData"
import SpaceDetail from "../components/SpaceDetails"
import MoonData from "../data/MoonData"
import MoonList from "../components/MoonList"
import MoonDetails from "../components/MoonDetails"

const UniverseContainer = () => {

    const [austronauts,setAustronauts] = useState("")
    const [space, setSpace] = useState(SpaceData)
    const [selectedSpace, setSelectedSpace] = useState(null)
    const [moon, setMoon] = useState(MoonData)
    const [selectedMoon, setSelectedMoon] = useState(null)
    

    const getAustronauts = function(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(austronauts => setAustronauts(austronauts))
    }

    const onPlanetClick = function(space) {
        setSelectedSpace(space)
    }

    const onGoBackClick = () => {
        setSelectedSpace(null)
    }

    const onMoonClick = function(moon){
        setSelectedMoon(moon)
    }
    const exitMoon = () => {
        setSelectedMoon(null)
    }


    let componentToShow

    if (selectedSpace) {
        componentToShow = <SpaceDetail selectedSpace={selectedSpace} setSelectedSpace={selectedSpace} onGoBackClick={onGoBackClick}/> 
    } else if (selectedMoon){
        componentToShow = <MoonDetails selectedMoon={selectedMoon} setSelectedMoon={selectedMoon} exitMoon={exitMoon}/>
    } else {
        componentToShow =  
        <>
        <SpaceList space={space} onPlanetClick={onPlanetClick}/>  
        <div className="people-in-space" onClick={getAustronauts}><h6>People currently in Space</h6><h1>{austronauts.number}</h1></div>
        <MoonList moon={moon} onMoonClick={onMoonClick}/>
        </>
    }

    
    return (
        <>
            <p>{componentToShow}</p>
        </>
    )
}


export default UniverseContainer




 {/* <SpaceList space={space} onPlanetClick={onPlanetClick}/>

       {selectedSpace ? <SpaceDetail selectedSpace={selectedSpace} setSelectedSpace={selectedSpace}/> : null} */}



