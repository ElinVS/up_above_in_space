import React from "react"


const SpaceDetail = ({selectedSpace, onGoBackClick}) => {

    const handleGoBack = () => {
        onGoBackClick()
    }

    return(
        <>
            <button onClick={handleGoBack}> Go back </button>
            
            <h1>{selectedSpace.planet}</h1>
            <div className="details-container">
            
            <img id="planet-image" src={selectedSpace.image}></img>
            
            <div id="description">{selectedSpace.description}</div>
            <li>{selectedSpace.austronaut}</li>
            </div>
        </>
    )
}




export default SpaceDetail

