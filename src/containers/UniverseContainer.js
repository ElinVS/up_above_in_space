import React, { useState, useEffect } from "react"
import SpaceList from "../components/SpaceList"
import SpaceData from "../data/SpaceData"
import SpaceDetail from "../components/SpaceDetails"

const UniverseContainer = () => {

    const [austronauts,setAustronauts] = useState("")
    const [space, setSpace] = useState(SpaceData)
    const [selectedSpace, setSelectedSpace] = useState(null)
    

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


    let componentToShow

    if (selectedSpace) {
        componentToShow = <SpaceDetail selectedSpace={selectedSpace} setSelectedSpace={selectedSpace} onGoBackClick={onGoBackClick}/> 
    } else {
        componentToShow =  
        <>
        <SpaceList space={space} onPlanetClick={onPlanetClick}/>  
        <div className="people-in-space" onClick={getAustronauts}><h6>People currently in Space</h6><h1>{austronauts.number}</h1></div>

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



